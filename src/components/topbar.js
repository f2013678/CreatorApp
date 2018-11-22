import React from "react";
import { Segment, Divider } from "semantic-ui-react";

const Topbar = () => {
  return (
    <Segment
      textAlign="center"
      style={{ height: "100px", padding: "1em 0em" }}
      vertical
    >
      Topbar
      <Divider />
        <b>Broadcast</b>
    </Segment>
  );
};

export default Topbar;
