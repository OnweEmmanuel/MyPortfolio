// Circuit-board traces behind the hero. Each trace is drawn faintly, with a
// short orange (or green) "pulse" travelling along it and a node at each end.
const TRACES = [
  [[0, 180], [220, 180], [280, 240], [520, 240], [560, 200], [700, 200]],
  [[0, 720], [160, 720], [230, 650], [420, 650], [470, 700], [640, 700]],
  [[1440, 120], [1260, 120], [1200, 180], [1060, 180], [1020, 140], [900, 140]],
  [[1440, 820], [1300, 820], [1240, 760], [1120, 760], [1080, 800], [940, 800]],
  [[380, 900], [380, 820], [430, 770], [430, 640]],
  [[1060, 0], [1060, 70], [1010, 120], [1010, 260]],
  [[0, 460], [90, 460], [130, 420], [260, 420]],
  [[1440, 520], [1380, 520], [1340, 480], [1250, 480]],
];

const toPath = (points) => points.map(([x, y], i) => `${i ? "L" : "M"}${x} ${y}`).join(" ");

export default function Circuits() {
  return (
    <svg className="circuits" viewBox="0 0 1440 900" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      {TRACES.map((points, i) => {
        const d = toPath(points);
        const ends = [points[0], points[points.length - 1]];
        return (
          <g key={d}>
            <path className="base" d={d} pathLength="1000" />
            <path
              className={`pulse${i % 3 === 2 ? " alt" : ""}`}
              d={d}
              pathLength="1000"
              style={{ animationDelay: `${-i * 0.9}s`, animationDuration: `${4 + (i % 4)}s` }}
            />
            {ends.map(([x, y]) => (
              <circle key={`${x}-${y}`} cx={x} cy={y} r="6" />
            ))}
          </g>
        );
      })}
    </svg>
  );
}
