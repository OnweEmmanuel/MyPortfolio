// Turns Kepa's privacy policy (kepa/privacy-policy.md) into plain HTML at
// build time, so /kepa/privacy/ is readable without JavaScript: Google
// Play checks that URL.
//
// Only the Markdown the policy uses is understood: # and ## headings,
// paragraphs, "-" bullets, "|" tables, **bold**, a line wrapped in _…_
// (italic) and two trailing spaces for a line break. The app parses the
// same subset (lib/core/legal/policy_document.dart in the Kepa repo).

const escape = (text) =>
  text.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

// **bold** and email addresses (as mailto links), on already-escaped text.
function inline(text) {
  return escape(text)
    .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
    .replace(/([\w.+-]+@[\w-]+\.[\w.]+[\w])/g, '<a href="mailto:$1">$1</a>');
}

const slug = (text) =>
  text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");

const cells = (row) =>
  row
    .trim()
    .replace(/^\||\|$/g, "")
    .split("|")
    .map((cell) => cell.trim());

const isDivider = (row) => cells(row).every((cell) => /^:?-{3,}:?$/.test(cell));

/**
 * @param {string} markdown
 * @param {{ skipTitle?: boolean }} options skipTitle drops the "# Title"
 *   line when the page shows its own title.
 * @returns {string} HTML
 */
export function policyToHtml(markdown, { skipTitle = false } = {}) {
  const out = [];
  let paragraph = [];
  let list = [];

  const flushParagraph = () => {
    if (!paragraph.length) return;
    const raw = paragraph.join("").trimEnd();
    paragraph = [];
    const italic = raw.length > 1 && raw.startsWith("_") && raw.endsWith("_");
    const body = inline(italic ? raw.slice(1, -1) : raw).replace(/\n/g, "<br />\n");
    out.push(italic ? `<p class="meta"><em>${body}</em></p>` : `<p>${body}</p>`);
  };
  const flushList = () => {
    if (!list.length) return;
    out.push(`<ul>\n${list.map((item) => `  <li>${inline(item)}</li>`).join("\n")}\n</ul>`);
    list = [];
  };
  const flush = () => {
    flushParagraph();
    flushList();
  };

  const lines = markdown.replace(/\r\n/g, "\n").split("\n");
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const trimmed = line.trim();
    if (!trimmed) {
      flush();
      continue;
    }
    const heading = /^(#{1,6})\s+(.*)$/.exec(trimmed);
    if (heading) {
      flush();
      const level = heading[1].length;
      if (level === 1 && skipTitle) continue;
      const text = heading[2].trim();
      out.push(`<h${level} id="${slug(text)}">${inline(text)}</h${level}>`);
      continue;
    }
    if (trimmed.startsWith("- ")) {
      flushParagraph();
      list.push(trimmed.slice(2).trim());
      continue;
    }
    if (trimmed.startsWith("|")) {
      flush();
      const rows = [];
      while (i < lines.length && lines[i].trim().startsWith("|")) {
        if (!isDivider(lines[i])) rows.push(cells(lines[i]));
        i++;
      }
      i--;
      const [header, ...body] = rows;
      out.push(
        [
          '<div class="table-wrap"><table>',
          `<thead><tr>${header.map((h) => `<th scope="col">${inline(h)}</th>`).join("")}</tr></thead>`,
          "<tbody>",
          ...body.map(
            (row) =>
              `<tr>${header
                .map((h, c) =>
                  c === 0
                    ? `<th scope="row">${inline(row[c] ?? "")}</th>`
                    : `<td data-label="${escape(h)}">${inline(row[c] ?? "")}</td>`
                )
                .join("")}</tr>`
          ),
          "</tbody></table></div>",
        ].join("\n")
      );
      continue;
    }
    flushList();
    // Two trailing spaces keep the line break; otherwise lines run on.
    paragraph.push(line.endsWith("  ") ? `${trimmed}\n` : `${trimmed} `);
  }
  flush();
  return out.join("\n");
}
