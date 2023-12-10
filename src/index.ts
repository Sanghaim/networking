import Computer from "./Computer";
import Server from "./Server";

const util = require("util");
const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req: any, res: any) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);

  const pc1 = new Computer("PC1");
  const server = new Server("Server");
  pc1.joinNetwork(server);
  server.addToRoutingTable(pc1.name, pc1.getAddress());
  console.log("PC", util.inspect(pc1, false, null, true));
  console.log("Server", util.inspect(server, false, null, true));
  pc1.setAddress("bullshit");
  server.updateAddressEntry(pc1.name, pc1.getAddress());
  console.log("updated address\n", util.inspect(server, false, null, true));
});
