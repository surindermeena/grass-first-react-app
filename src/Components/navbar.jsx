import { Link } from "react-router-dom";

const NavbarComponent = () => {
  return (
    <>
      <div style={navbarStyle}>
        <div style={titleStyle}>spaceX</div>
        <div style={menuContainerStyle}>
          <Link to="/" style={linkStyle}>
            <div style={menuItemStyle}>Home</div>
          </Link>
          <Link to="/counter" style={linkStyle}>
            <div style={menuItemStyle}>Counter</div>
          </Link>

          <Link to="/todoapp" style={linkStyle}>
            <div style={menuItemStyle}>ToDoApp</div>
          </Link>
          <Link to="/about" style={linkStyle}>
            <div style={menuItemStyle}>About</div>
          </Link>
          <Link to="/contact" style={linkStyle}>
            <div style={menuItemStyle}>Contact</div>
          </Link>
          {/* <Link to="/mui-learn" style={linkStyle}>
            <div style={menuItemStyle}>MuiComponent</div>
          </Link> */}
        </div>
      </div>
    </>
  );
};



const linkStyle = {textDecoration:"none", color:"white"}

const navbarStyle = {
  display: "flex",
  justifyContent: "space-between",
  padding: "10px",
  backgroundColor: "#333",
  color: "white",
};

const titleStyle = {
  fontSize: "1.5em",
  padding: "15px",
  color: "white",
  backgroundColor: "black",
  borderRadius: "30px",
  boxShadow: "0px 0px 9px white inset"
};

const menuContainerStyle = {
  display: "flex",
};

const menuItemStyle = {
  margin: "15px",
  cursor: "pointer",
  color: "white",
  fontSize: "20px",
};

export default NavbarComponent;
