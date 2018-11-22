import React from "react";
import { Segment, Divider, Icon, Button, Dropdown } from "semantic-ui-react";

const Topbar = () => {
  return (
    <div>
      <Segment
        textAlign="center"
        style={{ height: "100px", padding: "1em 0em" }}
        vertical
      >
        Topbar
        <Divider />
        <Icon name="bullhorn" color="blue" />
        <b>Broadcast</b>
      </Segment>
      <Segment className="tagbar broadcast">
        <Button color="orange">+BROADCAST</Button>
        <Button basic>Dec 6, 2017 - Dec 7, 2017</Button>
        <Dropdown text="DOWNLOAD (CSV)"></Dropdown>
      </Segment>
    </div>
  );
};

export default Topbar;
