import React from "react";

import ConForm from './utils/ContForm';
import AData from "./utils/AData";
import { Header, Container, Segment } from "semantic-ui-react";


const style = {
  h1: {
    marginTop: '3em',
  },
  h2: {
    margin: '4em 0em 2em',
  },
  h3: {
    marginTop: '2em',
    padding: '2em 0em',
  },
  last: {
    marginBottom: '300px',
  },
}

export default ({ accounts }) => (
  <div>
    <Header as='h1' content='Flight Surety' style={style.h1} textAlign='center' />
    <Header as='h2'  style={style.h2} textAlign='center'><AData  accountIndex={0} units="ether" precision={3} /></Header>
    <Container>
      <Segment.Group>
        <Segment>
        <ConForm contract="FlightSuretyApp" method="registerFlight" button="buy" color="green"/>
        </Segment>
        <Segment>
        <ConForm contract="FlightSuretyApp" method="buyInsurance" button="buy" color="green"/>

        </Segment>
        <Segment>
        <ConForm contract="FlightSuretyApp" method="makeAClaim" button="buy" color="green"/>

        </Segment>
        <Segment>
        <ConForm contract="FlightSuretyApp" method="fetchFlightStatus" button="buy" color="green"/>

        </Segment>
        <Segment>
        <ConForm contract="FlightSuretyApp" method="registerFlight" button="buy" color="green"/>
        </Segment>
        <Segment>
        <ConForm contract="FlightSuretyApp" method="registerOracle" button="buy" color="green"/>
        </Segment>
        <Segment>
        <ConForm contract="FlightSuretyApp" method="getMyIndexes" button="buy" color="green"/>
        </Segment>
        <Segment>
        <ConForm contract="FlightSuretyApp" method="submitOracleResponse" button="buy" color="green"/>
        </Segment>
        <Segment>
        <ConForm contract="FlightSuretyApp" method="getFlightKey" button="buy" color="green"/>
        </Segment>
        <Segment>
        <ConForm contract="FlightSuretyApp" method="getFlightKey" button="buy" color="green"/>
        </Segment>
        <Segment>
        <ConForm contract="FlightSuretyApp" method="getFlightKey" button="buy" color="green"/>
        </Segment>
        <Segment>
        <ConForm contract="FlightSuretyApp" method="getFlightKey" button="buy" color="green"/>
        </Segment>
      </Segment.Group>
    </Container>
</div>
);
