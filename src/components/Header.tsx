import { Col, Row } from 'react-bootstrap';
import '../../src/App.css';

const Header = () => {
  return (
      <>
        <Row className="headerRow">
          <Col className="headerCol" >
            <div className="navLogo" >
              <a href="https://www.MassMutual.com" target="_blank" tabIndex={1}>
                <img src="https://mediaassets.massmutual.com/Client_Landing_Page/images/mm-logos/MassMutual-logo-landing.svg"
                  alt="MassMutual" width="140" height="17" />
              </a>
            </div>
            <div className="navText" >
              POC - Landing Page
            </div>
          </Col>
        </Row>
      </>
  )
}

export default Header
