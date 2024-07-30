import { Container, Row, Col, Image } from 'react-bootstrap';
import './Footer.css';
import instagram_icon from '../assets/instagram_icon.png';
import pintrest_icon from '../assets/pintester_icon.png';
import whatsapp_icon from '../assets/whatsapp_icon.png';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className='footer'>
      <Container>
        <Row className="align-items-center">
          <Col md={4} className="text-center">
            <p className='footer-logo-p'>Pandora's Box</p>
          </Col>
          <Col md={4} className="text-center">
            <ul className="footer-links">
              <li>Company</li>
              <li>Products</li>
              <li>Offices</li>
              <li>About</li>
              <li>Contact</li>
            </ul>
          </Col>
          <Col md={4} className="text-center">
            <div className="footer-icons-container">
              <Image src={instagram_icon} alt="Instagram Icon" className='footer-icons-container-img' fluid />
            </div>
            <div className="footer-icons-container">
              <Image src={pintrest_icon} alt="Pinterest Icon"className='footer-icons-container-img' fluid />
            </div>
            <div className="footer-icons-container">
              <Image src={whatsapp_icon} alt="WhatsApp Icon" className='footer-icons-container-img' fluid />
            </div>
          </Col>
        </Row>
        <Row className="text-center">
          <Col>
            <hr />
            <p>ProShop &copy; {currentYear} - All Rights Reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;