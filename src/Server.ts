import Computer from "./Computer";
import { nanoid } from "nanoid";

export default class Server extends Computer {
  private _localNetwork = new Array<Computer>();

  resolvePing(address: string): string {
    if (address === this._networkCard.address) {
      return `Pong from Host: ${this._name} address ${this._networkCard.address}`;
    }
    const receiver = this._localNetwork.find(
      (x) => x.getAddress() === address || x.name === address
    );
    if (receiver === undefined) {
      throw new Error("Host not found");
    }
    return `Pong from Host: ${receiver.name} address ${receiver.getAddress()}`;
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

  addToLocalNetwork(computer: Computer) {
    this._localNetwork.push(computer);
    this.addToRoutingTable(computer.name, computer.getAddress());
  }
}
