import React from 'react';
import HornedBeasts from './HornedBeasts';
import { animalData } from '../data';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col} from 'react-bootstrap';
function Main() {
  return (
    <>
      {animalData.map((data, key) => {
        return (
          <Container>
            <Row>
              <Col>
                <div key={key}>
                  <HornedBeasts
                    key={key}
                    image_url={data.image_url}
                    title={data.title}
                    description={data.description}
                  />
                </div>
              </Col>
            </Row>
          </Container>
        );
      })}
      {/* <HornedBeasts
        title="Bird"
        imgurl={Bird}
        desc="special bird"/> */}
      <button variant="primary">Primary</button>
      <button variant="secondary">Secondary</button>
      <button variant="success">Sucess</button>
    </>
  );
}
export default Main;
