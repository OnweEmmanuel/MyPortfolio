import { location } from "../data.js";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap">
        <span>
          © {new Date().getFullYear()} <b>emmanuel.onwe</b>, built with React
        </span>
        <span>
          {location.from} <b>→</b> {location.to} · working worldwide
        </span>
      </div>
    </footer>
  );
}
