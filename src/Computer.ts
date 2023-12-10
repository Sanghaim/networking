import NetworkCard from "./NetworkCard";
import Server from "./Server";

export default class Computer {
  _networkCard: NetworkCard;
  _name: string;

  constructor(name: string) {
    this._name = name;
    this._networkCard = new NetworkCard();
  }

  public get name() {
    return this._name;
  }

  public set name(name: string) {
    this._name = name;
  }

  ping(address: string): string {
    return this._networkCard.ping(address);
  }

  getAddress() {
    return this._networkCard.address;
  }

  setAddress(address: string) {
    this._networkCard.address = address;
    try {
      this._networkCard.updateAddress(this.name);
    } catch (error) {
      console.log((error as Error).message);
    }
  }

  getGateway(): Server | undefined {
    return this._networkCard.gateway;
  }

  setGateway(server: Server) {
    this._networkCard.gateway = server;
  }

  joinNetwork(server: Server) {
    this.setAddress(server.assignAddress());
    this.setGateway(server);
    server.addToRoutingTable(this.name, this.getAddress());
  }
}
