import React from "react";
import "../assets/styles/components/CardNormal.css";
import { Card, Image } from "react-bootstrap";

// --------------- imports images -----------------------------
import up from "../assets/imgs/icon-up.svg";
import down from "../assets/imgs/icon-down.svg";
import facebook from "../assets/imgs/icon-facebook.svg";
import instagram from "../assets/imgs/icon-instagram.svg";
import twitter from "../assets/imgs/icon-twitter.svg";
import youtube from "../assets/imgs/icon-youtube.svg";

const CardNormal = ({ userName, followers, stats, direcction, type }) => {
  return (
    <div className="rootNormal">
      <Card.Body
        style={{
          borderTop: "3px solid",
          borderRadius: "5px",
          borderColor:
            type === "fb"
              ? "hsl(208, 92%, 53%)"
              : type === "ig"
              ? "hsl(37, 97%, 70%)"
              : type === "tw"
              ? "hsl(203, 89%, 53%)"
              : type === "yt" && "hsl(348, 97%, 39%)",
        }}
      >
        <p className="userName">
          <span className="img">
            {type === "fb" ? (
              <Image src={facebook} />
            ) : type === "ig" ? (
              <Image src={instagram} />
            ) : type === "tw" ? (
              <Image src={twitter} />
            ) : (
              type === "yt" && <Image src={youtube} />
            )}
          </span>
          {userName}
        </p>
        <p className="numberNormal">{followers[1]}</p>
        <p className="followers">{followers[0]}</p>
        {direcction === "up" ? (
          <p className="statsNormal" style={{ color: "hsl(163, 72%, 41%)" }}>
            <span>
              <Image src={up} />
            </span>
            {stats}
          </p>
        ) : (
          <p className="statsNormal" style={{ color: "hsl(356, 69%, 56%)" }}>
            <span>
              <Image src={down} />
            </span>
            {stats}
          </p>
        )}
      </Card.Body>
    </div>
  );
};
export default CardNormal;
