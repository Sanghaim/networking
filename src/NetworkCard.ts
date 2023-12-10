import Server from "Server";
import { nanoid } from "nanoid";

export default class NetworkCard {
  private _address: string;
  private _gateway?: Server;
  private _routingTable = new Array<{ name: string; address: string }>();

  constructor(gateway?: Server) {
    this._address = nanoid(6);
    this._gateway = gateway;
  }

  public get gateway(): Server | undefined {
    return this._gateway;
  }

  public set gateway(gateway: Server) {
    this._gateway = gateway;
  }

  public get address(): string {
    return this._address;
  }

  public set address(address: string) {
    this._address = address;
  }

  ping(address: string): string {
    /*     if (!this.gateway) {
      throw new Error("No network found");
    }
    try {
      return this.gateway.pong();
    } catch (e) {
      if (e instanceof Error) {
        return e.message;
      }
      return String(e);
    } */
    return "";
  }

  pong(): string {
    return `Response from ${this.address}`;
  }

  addToRoutingTable(name: string, address: string) {
    this._routingTable.push({ name, address });
  }

  updateAddress(name: string) {
    if (this.gateway === undefined) {
      throw new Error("Gateway is not set");
    }
    this._gateway?.updateAddressEntry(name, this.address);
  }

  deleteFromRoutingTable(name: string) {
    this._routingTable = this._routingTable.filter((x) => x.name !== name);
  }
}
