import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import LogoSI from "../../Img/LOGO1MAN5.png";
import PDFskripsi from "../../PDF/PedomanSkripsiSI2022.pdf";
import "./NavBarHome.css";

function BasicExample() {
  return (
    <Navbar bg="white" expand="lg">
      <Container fluid="sm">
        <Navbar.Brand href="" target="_blank">
        </Navbar.Brand>
        <Navbar.Brand
          href=""
          target="_blank"
        >
          <img
            src={LogoSI}
            width="250"
            height="50"
            className="d-inline-block align-top"
            alt="React Bootstrap logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="nav1">
          <Nav className="navbar-text">
            <Nav.Link href="/">Home</Nav.Link>
            <NavDropdown title="Panduan" id="basic-nav-dropdown">
              <NavDropdown.Item target="_blank ">
                Panduan Skripsi 2022
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="About Us" id="basic-nav-dropdown">
              <NavDropdown.Item href="/about-us">LMS SI</NavDropdown.Item>
              <NavDropdown.Item
                href=""
                target="_blank"
              >
                IPI Garut
              </NavDropdown.Item>
              <NavDropdown.Item
                href=""
                target="_blank"
              >
                Sistem Informasi
              </NavDropdown.Item>
              <NavDropdown.Item href="/profil-dosen">
                Dosen Pengajar
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/login">Login</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;
