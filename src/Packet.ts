export default class Packet {
  private _senderName?: string;
  private _senderAddress?: string;
  private _receiverName?: string;
  private _receiverAddress?: string;

  constructor(
    senderName: string,
    senderAddress: string,
    receiverName: string,
    receiverAddress: string
  ) {
    if (
      !checkForNulls([senderName, senderAddress, receiverName, receiverAddress])
    ) {
      throw new Error("Packet cannot be empty");
    } else if (!checkForNulls([senderName, senderAddress])) {
      throw new Error("Packet needs to have sender");
    } else if (!checkForNulls([receiverName, receiverAddress])) {
      throw new Error("Packet needs to have receiver");
    }

    this._senderAddress = senderAddress;
    this._senderName = senderName;
    this._receiverAddress = receiverAddress;
    this._receiverName = receiverName;
  }
}

function checkForNulls<T>(args: (undefined | T)[]): args is T[] {
  return args.every((e) => e !== undefined);
}
