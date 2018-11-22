import React from "react";
import { Segment, Container, Divider } from "semantic-ui-react";
import CardElement from "./CardElement";
import BroadcastElement1 from "./BroadcastElement1";

const BroadcastCard = () => {
  const data = {
    activeData: [
      {
        content: "Users who liked Outfits",
        openRate: "80.1%",
        clickRate: "80.1%"
      },
      {
        content: "Users who liked Outfits",
        openRate: "80.1%",
        clickRate: "80.1%"
      },
      {
        content: "Users who liked Outfits",
        openRate: "80.1%",
        clickRate: "80.1%"
      }
    ],
    pauseData: [
      {
        content: "Users who liked Outfits",
        openRate: "80.1%",
        clickRate: "80.1%"
      },
      {
        content: "Users who liked Outfits",
        openRate: "80.1%",
        clickRate: "80.1%"
      },
      {
        content: "Users who liked Outfits",
        openRate: "80.1%",
        clickRate: "80.1%"
      }
    ]
  };

  return (
    <div style={{textAlign:"left"}}>
      <Segment>
        
        <Container
          fluid
          style={{ display: "grid", gridTemplateColumns: "60% 20% 20%" }}
        >
          <div>Broadcast Name</div>
          <div>Click Rate</div>
          <div>Open Rate</div>
        </Container>
        <Divider />
        <BroadcastElement1 data={data.activeData} head="Active" />
        <BroadcastElement1 data={data.pauseData} head="Paused" />
      </Segment>
    </div>
  );
};

export default BroadcastCard;
