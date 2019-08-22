import { drizzleConnect } from "drizzle-react";
import React, { Component } from "react";
import PropTypes from "prop-types";
import { Label, Icon, Grid, Segment } from "semantic-ui-react";

class AData extends Component {
  constructor(props) {
    super(props);

    this.precisionRound = this.precisionRound.bind(this);
  }

  precisionRound(number, precision) {
    var factor = Math.pow(10, precision);
    return Math.round(number * factor) / factor;
  }

  render() {
    // No accounts found.
    if (Object.keys(this.props.accounts).length === 0) {
      return <span>Initializing...</span>;
    }

    // Get account address and balance.
    const address = this.props.accounts[this.props.accountIndex];
    var balance = this.props.accountBalances[address];
    const units = this.props.units
      ? this.props.units.charAt(0).toUpperCase() + this.props.units.slice(1)
      : "Wei";

    // Convert to given units.
    if (this.props.units && typeof balance !== "undefined") {
      balance = this.context.drizzle.web3.utils.fromWei(
        balance,
        this.props.units,
      );
    }

    // Adjust to given precision.
    if (this.props.precision) {
      balance = this.precisionRound(balance, this.props.precision);
    }

    if (this.props.render) {
      return this.props.render({
        address,
        balance,
        units,
      });
    }

    return (
        <Grid columns='equal'> 
        <Grid.Column>
        <Segment>
       
        <Label>
        <Icon  name="ethereum"/>
        {address.toString().slice(0, 12)}
        </Label>
       
        </Segment>
       
       
        </Grid.Column>
       
    
      <Grid.Column>
      <Segment>
      <p>
    balance:  {balance} {units}
    </p>
    </Segment>
    </Grid.Column>
      </Grid>
    );
  }
}

AData.contextTypes = {
  drizzle: PropTypes.object,
};

AData.propTypes = {
  accounts: PropTypes.arrayOf(PropTypes.string),
  accountBalances: PropTypes.arrayOf(PropTypes.string),
  accountIndex: PropTypes.number.isRequired,
  units: PropTypes.string,
  precision: PropTypes.number,
  render: PropTypes.func,
};

/*
 * Export connected component.
 */

const mapStateToProps = state => {
  return {
    accounts: state.accounts,
    accountBalances: state.accountBalances,
  };
};

export default drizzleConnect(AData, mapStateToProps);