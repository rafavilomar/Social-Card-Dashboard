import React, { useEffect } from 'react'
import "./assets/styles/App.css";
import CardSmall from "./components/CardSmall";

import { Container, Col, Row, Form } from "react-bootstrap";
import CardNormal from "./components/CardNormal";

const App = () => {
  const [lightTheme, setLightTheme] = React.useState(localStorage.getItem("theme") === "dark" ? true : false);
  const handleChange = () => {
    if (lightTheme === false) {
      localStorage.setItem("theme", "dark");
      setLightTheme(true);
    } else {
      localStorage.setItem("theme", "light");
      setLightTheme(false);
    }
  }

  React.useEffect(() => {
    document.getElementsByTagName("HTML")[0].setAttribute("data-theme", localStorage.getItem("theme"))
  }, [lightTheme])

  return (
    <Container className="body">
      <Row className="header">
        <Col xs={12} md={6}>
          <h4 className="subjet">Social Media Dashboard</h4>
          <p className='subtitle'>Total Followers: 23,004</p>
        </Col>
        <hr/>
        <Col xs={12} md={6}>
          <Form.Check
            checked={lightTheme}
            type="switch"
            label="Dark Mode"
            id="hoka"
            className="switch"
            onChange = {() => handleChange()}
          />
        </Col>
      </Row>
      <Row>
        {datasCardNormal.map((data) => (
          <Col xs={12} md={4} lg={3}>
            <CardNormal
              userName={data.userName}
              followers={data.followers}
              stats={data.stats}
              direcction={data.direcction}
              type={data.type}
            />
          </Col>
        ))}
      </Row>

      <h4 className="text-muted subject" style={{marginTop: '20px'}}>Overview - Today</h4>
      <Row>
        {datasCardSmall.map((data) => (
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

const datasCardNormal = [
  {
    userName: "@nathanf",
    followers: ["FOLLOWERS", "1987"],
    stats: "12 Today",
    direcction: "up",
    type: "fb",
  },
  {
    userName: "@nathanf",
    followers: ["FOLLOWERS", "1044"],
    stats: "99 Today",
    direcction: "up",
    type: "tw",
  },
  {
    userName: "@realnathanf",
    followers: ["FOLLOWERS", "11k"],
    stats: "1099 Today",
    direcction: "up",
    type: "ig",
  },
  {
    userName: "@Nathan F.",
    followers: ["SUSCRIBERS", "8239"],
    stats: "144 Today",
    direcction: "down",
    type: "yt",
  },
];

const datasCardSmall = [
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
