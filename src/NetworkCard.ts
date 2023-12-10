import Computer from "Computer";
import Server from "Server";
import { nanoid } from "nanoid";

export default class NetworkCard {
  _address: string;
  _gateway?: NetworkCard;
  _routingTable = new Array<string>();

  constructor(gateway?: NetworkCard) {
    this._address = nanoid(6);
    this._gateway = gateway;
  }

  public get gateway(): NetworkCard | undefined {
    return this._gateway;
  }

  public set gateway(networkCard: NetworkCard) {
    this._gateway = networkCard;
  }

  public get address(): string {
    return this._address;
  }

  public set address(address: string) {
    this._address = address;
  }

  ping = (address: string): string => {
    if (!this.gateway) {
      throw new Error("No network found");
    }
    try {
      // return this.gateway.resolvePing(address);
      return "";
    } catch (e) {
      if (e instanceof Error) {
        return e.message;
      }
      return String(e);
    }
  };
}
