import {
  Modal,
  Container,
  Row,
  ListGroup,
  Tabs,
  Tab,
  Col,
} from "react-bootstrap";
import { CardsApi } from "../../Controller/Data/structApi";

const ModalBodyCustom = (props: CardsApi) => {
  return (
    <div style={{ overflowY: "scroll" }}>
      <Container>
        <Row>
          <Col></Col>
          <Modal.Header closeButton>
            <Modal.Title>{props.name}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Container>
              <Row>
                <Col>
                  <img src={props.card_images[0].image_url_small} />
                </Col>

                <Col>
                  <div>{props.desc}</div>
                </Col>

                <Col></Col>
              </Row>
            </Container>
          </Modal.Body>

          <Tabs
            defaultActiveKey="profile"
            id="uncontrolled-tab-example"
            className="mb-3"
          >
            {props.card_sets.length > 0 ? (
              props.card_sets.map((e) => {
                return (
                  <Tab eventKey={e.set_name} title={e.set_name}>
                    <div>
                      <span style={{ color: "red" }}>{e.set_rarity}</span>
                      <br />

                      <Container>
                        <Row>
                          <Col>Tcg</Col>
                          <Col>Troll</Col>
                        </Row>
                      </Container>
                    </div>
                  </Tab>
                );
              })
            ) : (
              <span>No Card Set</span>
            )}
          </Tabs>

          <Col></Col>
        </Row>
      </Container>
    </div>
  );
};

export default ModalBodyCustom;
