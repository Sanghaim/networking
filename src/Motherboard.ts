import NetworkCard from "NetworkCard";

export default class Mortherboard {
  _networkCard: NetworkCard;

  constructor(networkCard: NetworkCard) {
    this._networkCard = networkCard;
  }

  ping(address: string) {
    return this._networkCard.ping(address);
  }

  getNetworkAddress() {
    return this._networkCard.address
  }
}
