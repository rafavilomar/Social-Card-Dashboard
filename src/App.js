import "./assets/styles/App.css";
import CardSmall from "./components/CardSmall";

import { Container, Col, Row } from "react-bootstrap";

function App() {
  return (
      <Container>
      <h4 className="text-muted">Overview - Today</h4>
        <Row>
          {datas.map((data) => (
            <Col xs={12} md={4} lg={3}>
              <CardSmall
                title={data.title}
                number={data.number}
                stats={data.stats}
                direcction={data.direcction}
                type={data.type}
              />
            </Col>
          ))}
        </Row>
      </Container>
  );
}
export default App;

const datas = [
  {
    title: "Page Views",
    number: "87",
    stats: "3%",
    type: "fb",
    direcction: "up",
  },
  { title: "Likes", number: "52", stats: "2%", type: "fb", direcction: "down" },
  {
    title: "Likes",
    number: "5462",
    stats: "2257%",
    type: "ig",
    direcction: "up",
  },
  {
    title: "Profile Views",
    number: "52k",
    stats: "1375%",
    type: "ig",
    direcction: "up",
  },
  {
    title: "Retweets",
    number: "117",
    stats: "303%",
    type: "tw",
    direcction: "up",
  },
  {
    title: "Likes",
    number: "507",
    stats: "553%",
    type: "tw",
    direcction: "up",
  },
  {
    title: "Likes",
    number: "107",
    stats: "19%",
    type: "yt",
    direcction: "down",
  },
  {
    title: "Total Views",
    number: "1407",
    stats: "12%",
    type: "yt",
    direcction: "down",
  },
];
