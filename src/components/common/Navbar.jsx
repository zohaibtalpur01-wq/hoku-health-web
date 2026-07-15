function Navbar() {
  return (
    <nav>
      <h2>Hoku Health Care</h2>

      <ul style={{ display: "flex", gap: "20px", listStyle: "none" }}>
        <li>Home</li>
        <li>Services</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
}

export default Navbar;