import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const ClientsSection = () => {
  return (
    <div className="py-5">
      <h1 className="text-center mt-5">Our Clients</h1>
      <section className="clients">
        <Container>
          <Row className="text-center">
            {/* Client 1 */}
            <Col md={4} className="mb-4">
              <img src="/src/assets/maruti.png" alt="Maruti" className="img-fluid" style={{ maxHeight: '100px' }} />
            </Col>
            {/* Client 2 */}
            <Col md={4} className="mb-4">
              <img src="/src/assets/renault-removebg.png" alt="Skoda" className="img-fluid" style={{ maxHeight: '100px' }} />
            </Col>
            {/* Client 3 */}
            <Col md={4} className="mb-4">
              <img src="/src/assets/toyota.jpg" alt="Toyota" className="img-fluid" style={{ maxHeight: '100px' }} />
            </Col>
          </Row>
        </Container>
      </section>

      {/* Second Row of Clients */}
      <section className="clients">
        <Container>
          <Row className="text-center">
            {/* Client 1 */}
            <Col md={4} className="mb-4 mt-3">
              <img src="/src/assets/hyundai-bg-remove.png" alt="Hyundai" className="img-fluid" style={{ maxHeight: '100px' }} />
            </Col>
            {/* Client 2 */}
            <Col md={4} className="mb-4 mt-3">
              <img src="/src/assets/mg-removebg-preview.png" alt="MG" className="img-fluid" style={{ maxHeight: '100px' }} />
            </Col>
            {/* Client 3 */}
            <Col md={4} className="mb-4 mt-3">
              <img src="/src/assets/Mahindra_Auto-removebg-preview2.png" alt="Mahindra" className="img-fluid" style={{ maxHeight: '100px' }} />
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default ClientsSection;