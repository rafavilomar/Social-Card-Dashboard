import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Image, Card } from "react-bootstrap";
import "../assets/styles/components/CardSmall.css";

// --------------- imports images -----------------------------
import up from "../assets/imgs/icon-up.svg";
import down from "../assets/imgs/icon-down.svg";
import facebook from "../assets/imgs/icon-facebook.svg";
import instagram from "../assets/imgs/icon-instagram.svg";
import twitter from "../assets/imgs/icon-twitter.svg";
import youtube from "../assets/imgs/icon-youtube.svg";

const CardSmall = ({ title, number, stats, type, direcction }) => {
  return (
    <div className="root">
      <Card.Body>
        <Container fluid>
          <Row>
            <Col xs={8}>
              <p className="title"> {title} </p>
            </Col>
            <Col xs={4}>
              {type === "fb" ? (
                <Image src={facebook} />
              ) : type === "ig" ? (
                <Image src={instagram} />
              ) : type === "tw" ? (
                <Image src={twitter} />
              ) : (
                type === "yt" && <Image src={youtube} />
              )}
            </Col>
          </Row>
          <Row>
            <Col xs={7}>
              <p className="number"> {number} </p>
            </Col>
            <Col xs={5} className="details">
              {direcction === "up" ? (
                <p className="stats" style={{ color: "hsl(163, 72%, 41%)" }}>
                  <span>
                    <Image src={up} />
                  </span>
                  {stats}
                </p>
              ) : (
                <p className="stats" style={{ color: "hsl(356, 69%, 56%)" }}>
                  <span>
                    <Image src={down} />
                  </span>
                  {stats}
                </p>
              )}
            </Col>
          </Row>
        </Container>
      </Card.Body>
    </div>
  );
};
export default CardSmall;
