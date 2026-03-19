export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="container">
        <p className="footer__text">
          © {year} <span>&lt;Dev /&gt;</span> — Crafted with passion & code.
        </p>
      </div>
    </footer>
  );
}
