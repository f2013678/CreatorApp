import React from "react";
import { Segment, Container, Divider, Icon } from "semantic-ui-react";

const BroadcastElement1 = props => {
  const activeData = props.data;
  return (
    <Container>
      <h1 style={{ alignContent: "left" }}>{props.head}</h1>
      {activeData.map(message => {
        return (
          <div>
            <Divider />
            <Container
              fluid
              style={{ display: "grid", gridTemplateColumns: "60% 20% 20%" }}
            >
              <div>
                <Icon
                  large
                  name={
                    props.head === "Active"
                      ? "check circle outline"
                      : "pause circle outline"
                  }
                  color={
                    props.head === "Active"
                      ? "green"
                      : "red"
                  }
                />
                {message.content}
              </div>
              <div>{message.openRate}</div>
              <div>{message.clickRate}</div>
            </Container>
          </div>
        );
      })}
    </Container>
  );
};

export default BroadcastElement1;
