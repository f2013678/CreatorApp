import React from "react";
import { Segment, Container, Divider } from "semantic-ui-react";

const CardElement = props => {
  const { userData, messageData } = props.data;
  return (
    <Segment style={{margin:"15px 5px 15px 5px",boxShadow: "1px 1px 4px #888888"}}>
      <Container fluid style={{ display: "flex" }}>
        <div style={{ flex: 1 }}>
          <img
            src={require("../face.png")}
            alt=""
            style={{ width: "60px", borderRadius: "50%" }}
          />
        </div>
        <Container style={{ flex: 2, textAlign: "left" }} textAlign={"center"} >
          <div>
            <div>{userData.name}</div>
            <div>{userData.location}</div>
          </div>
        </Container>
        <div style={{ flex: 1 }}>{userData.mobile}</div>
      </Container>
      {messageData.map(message => {
        return (
          <div>
            <Divider />
            <Container
              fluid
              style={{ display: "grid", gridTemplateColumns: "20% 60% 20%" }}
            >
              <div>{message.time}</div>
              <div>{message.message}</div>
              <div>{message.value}</div>
            </Container>
          </div>
        );
      })}
    </Segment>
  );
};

export default CardElement;
