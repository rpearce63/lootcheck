import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchBitcoin } from "../actions/bitcoin";

export class Loot extends Component {
  componentDidMount() {
    this.props.fetchBitcoin();
  }

  computeBitcoin() {
    const bitcoinRate = this.getRate();
    if (!bitcoinRate) return "";
    return this.props.balance / parseInt(bitcoinRate.replace(",", ""), 10);
  }

  getRate() {
    const { bitcoin } = this.props;
    if (Object.keys(bitcoin).length === 0) return "";
    return bitcoin.bpi.USD.rate;
  }
  render() {
    return (
      <div>
        <h3>Bitcoin balance: {this.computeBitcoin()}</h3>
        <small className="bitcoin-rate">Bitcoin value: {this.getRate()}</small>
      </div>
    );
  }
}

export default connect(
  state => state,
  { fetchBitcoin }
)(Loot);
