#!/usr/bin/env node

const [edition, host] = process.argv.slice(2);
const pc = require("picocolors");

if (host === "-help" || !host) {
  console.log("Usage: mss <edition> <host>");
  console.log("Example: mss java 2b2t.org");
  console.log("Available commands: -help");
  process.exit(0);
}

const API_URL = "https://api.mcstatus.io/v2/status";

switch (edition) {
  case "java":
    getInformation(host, `${API_URL}/java`);
    break;
  case "bedrock":
    getInformation(host, `${API_URL}/bedrock`);
    break;
  default:
    console.log(pc.red(`Unknown edition ${edition}`));
    process.exit(1);
}

function getInformation(host, apiEdition) {
  return fetch(`${apiEdition}/${host}`)
    .then((response) => response.json())
    .then((data) => {
      if (!data.online) {
        console.log(`${host} is ${pc.red(`offline`)}`);
        return;
      }
      console.log(`${host} is ${pc.green(`online`)}`);

      function row(label, value) {
        console.log(`${pc.cyan(label.padEnd(10))} ${value}`);
      }
      row("IP", `${data.ip_address}:${data.port}`);
      row("Version", data.version.name_clean ?? data.version.name);
      row("Players", `${data.players.online}/${data.players.max}`);
    })
    .catch((error) => {
      console.log(pc.red(`Request failed: ${error}`));
      process.exit(1);
    });
}
