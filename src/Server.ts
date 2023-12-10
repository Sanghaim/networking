import Computer from "./Computer";
import { nanoid } from "nanoid";

export default class Server extends Computer {
  // localNetwork = new Array<Computer>();

  resolvePing(address: string): string {
    /*     if (address === this._networkCard.address) {
      return `Pong from Host: ${this._name} address ${this._networkCard.address}`;
    }
    const receiver = this.localNetwork.find(
      (x) => x._networkCard._address === address || x._name === address
    );
    if (receiver === undefined) {
      throw new Error("Host not found");
    }
    return `Pong from Host: ${receiver._name} address ${receiver._networkCard.address}`; */
    return "";
  }

  assignAddress(): string {
    return nanoid(6);
  }

  addToRoutingTable(name: string, address: string) {
    this._networkCard.addToRoutingTable(name, address);
  }

  updateAddressEntry(name: string, address: string) {
    this._networkCard.deleteFromRoutingTable(name);
    this.addToRoutingTable(name, address);
  }
}
