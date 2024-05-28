import './navigation.css'
const Navigation = () => {
  return (
    <nav>
      <div className="logo">
        <b>NIKE</b>
      </div>
      <ul>
        <li href="#">menu</li>
        <li href="#">location</li>
        <li href="#">About</li>
        <li href="#">contect</li>
      </ul>
      <button className="button">login</button>
    </nav>
  );
};
export default Navigation;
