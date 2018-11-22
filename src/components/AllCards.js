import React from "react";
import { Segment, Container, Button } from "semantic-ui-react";
import CardElement from "./CardElement";

const AllCards = () => {
  const data = [
    {
      userData: {
        name: "Shrenik Borad",
        mobile: "9783825868",
        location: "Mumbai"
      },
      messageData: [
        {
          time: "12:29 a.m.",
          message: "Anim fugiat minim est sunt incididunt amet id nulla.",
          value: "0.81"
        },
        {
          time: "12:29 a.m.",
          message: "Anim fugiat minim est sunt incididunt amet id nulla.",
          value: "0.81"
        },
        {
          time: "12:29 a.m.",
          message: "Anim fugiat minim est sunt incididunt amet id nulla.",
          value: "0.81"
        }
      ]
    },
    {
      userData: {
        name: "Foo Bar",
        mobile: "9783825868",
        location: "Bangalore"
      },
      messageData: [
        {
          time: "12:29 a.m.",
          message: "Anim fugiat minim est sunt incididunt amet id nulla.",
          value: "0.81"
        },
        {
          time: "12:29 a.m.",
          message: "Anim fugiat minim est sunt incididunt amet id nulla.",
          value: "0.81"
        },
        {
          time: "12:29 a.m.",
          message: "Anim fugiat minim est sunt incididunt amet id nulla.",
          value: "0.81"
        },
        {
          time: "12:29 a.m.",
          message: "Anim fugiat minim est sunt incididunt amet id nulla.",
          value: "0.81"
        },
        {
          time: "12:29 a.m.",
          message: "Anim fugiat minim est sunt incididunt amet id nulla.",
          value: "0.81"
        },
        {
          time: "12:29 a.m.",
          message: "Anim fugiat minim est sunt incididunt amet id nulla.",
          value: "0.81"
        }
      ]
    }
  ];
  const tagData = [
    "top10",
    "product",
    "collection",
    "delivery",
    "city",
    "refund",
    "store",
    "outfit",
    "flyrobe"
  ];
  return (
    <div>
      <Segment className="tagbar">
        <Button basic >Dec 6, 2017 - Dec 7, 2017</Button>
      </Segment>
      <Segment className="tagbar">
        {tagData.map(tag => {
          return(<Button basic key={tag}>{"#"+tag}</Button>)
        })}
      </Segment>
      <div className="row">
        <div className="column">
          <CardElement data={data[0]} />
          <CardElement data={data[1]} />
        </div>
        <div className="column">
          <CardElement data={data[1]} />
          <CardElement data={data[0]} />
        </div>
      </div>
    </div>
  );
};

export default AllCards;
