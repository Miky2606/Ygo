import { useEffect, useState } from "react";
import searchCard from "../Controller/searchApi";
import { Container, Col, Row, Spinner, Alert } from "react-bootstrap";
import CardsWeb from "./subPages/cards";
import { CardsApi } from "../Controller/Data/structApi";
import axios from "axios";
import { setDefaultResultOrder } from "dns/promises";

const App = (): JSX.Element => {
  const [cards, setCards] = useState<CardsApi[]>();
  const [loading, setLoading] = useState<Boolean>(true);
  const [error, setError] = useState<String>("");

  useEffect(() => {
    axios
      .get("https://db.ygoprodeck.com/api/v7/cardinfo.php")
      .then((response) => {
        setCards(response.data.data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  return (
    <div id="content">
      <Container>
        <Row>
          {loading ? (
            <Spinner animation="border" role="status">
              <span className="visually-hidden">Loading...</span>
            </Spinner>
          ) : (
            <span></span>
          )}

          {error !== "" ? (
            <Alert variant="danger">Error: {error}</Alert>
          ) : (
            <span></span>
          )}

          {cards !== [] ? (
            cards?.map((e) => {
              return (
                <Col xs={4}>
                  {" "}
                  <CardsWeb {...e}  />
                </Col>
              );
            })
          ) : (
            <div>Vacio</div>
          )}
        </Row>
      </Container>
    </div>
  );
};

export default App;
