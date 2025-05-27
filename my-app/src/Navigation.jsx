export function Navigation({ srcImg, alt, items }) {
  return (
    <nav className="navbar">
      <img src={srcImg} alt={alt} className="logo" />
      <div className="nav-items">
        {items.map(e => (
          <a key={e.title} className="nav-item" href={e.ref} target="_blank" rel="noopener noreferrer">
            {e.title}
          </a>
        ))}
      </div>
    </nav>
  );
}
