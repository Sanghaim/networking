import Mortherboard from "Motherboard";
import NetworkCard from "NetworkCard";

export default class Computer {
  _motherboard: Mortherboard;
  _name: string;

  constructor(name: string) {
    this._name = name;
    this._motherboard = new Mortherboard(new NetworkCard());
  }

  public get name() {
    return this._name;
  }

  ping(address: string): string {
    return this._motherboard.ping(address);
  }

  getAddress() {
    return this._motherboard.getNetworkAddress();
  }
}
