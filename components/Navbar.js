import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import Image from 'next/image';

function BasicExample() {
  return (
    <Navbar>
      <Container>
        <Navbar.Brand href="https://www.nitj.ac.in/"> <div className='flex font-semibold ' ><Image src='/Logo.png' alt="logo" width={50} height={50} className='m-2' /> <div className='font-semibold' > डॉ बी आर अम्बेडकर राष्ट्रीय प्रौद्योगिकी संस्थान जालंधर <br /> Dr B R Ambedkar National Institute of Technology Jalandhar </div> </div>  </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto ">
            
            <NavDropdown title="Hostels" id="basic-nav-dropdown" className='p-2' >
              <NavDropdown.Item href="#action/3.1">Boys Hostel</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Girls Hostel
              </NavDropdown.Item>
             
    
            </NavDropdown>
            <NavDropdown title="Departments" id="basic-nav-dropdown"  className='p-2' >
              <NavDropdown.Item href="#action/3.1">CSE</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                IT
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                ECE
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                ICE
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                IPE
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                ME
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                CE
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                CHE
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                BT
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                TT
              </NavDropdown.Item>
              
            </NavDropdown>
            <NavDropdown title="Residences" id="basic-nav-dropdown" className='p-2'>
              <NavDropdown.Item href="#action/3.1">Residence 1</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Residence 2
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Residence 3
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Residence 4
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Residence 5
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Residence 6
              </NavDropdown.Item>

             
    
            </NavDropdown>
            <NavDropdown title="Admin Building" id="basic-nav-dropdown" className='p-2'>
              <NavDropdown.Item href="#action/3.1">Admin Building 1</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Admin Building 2
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Admin Building 3
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Admin Building 4
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Admin Building 5
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Admin Building 6
              </NavDropdown.Item>
             
    
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;