export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-content">
        <p>&copy; {new Date().getFullYear()} Emmanuel Onwe</p>
        <p className="footer-location">Cape Town, South Africa</p>
      </div>
    </footer>
  );
}
