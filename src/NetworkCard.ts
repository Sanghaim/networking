import { v4 as uuidv4 } from "uuid";

export default class NetworkCard {
  address: string;
  gateway?: string;

  constructor(gateway?: string) {
    this.address = uuidv4();
    this.gateway = gateway;
  }
}
