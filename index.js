#!/usr/bin/env node

const [host] = process.argv.slice(2);
const pc = require("picocolors");

if (host === "-help" || !host) {
  console.log("Usage: mss <host>");
  console.log("Example: mss 2b2t.org");
  console.log("Available commands: -help");
  process.exit(0);
}

const API_URL = "https://api.mcsrvstat.us/3/";

function getInformation(host) {
  return fetch(`${API_URL}${host}`)
    .then((response) => response.json())
    .then((data) => {
      if (!data.online) {
        console.log(`${host} is ${pc.red(`offline`)}`);
        return;
      }
      console.log(`${host} is ${pc.green(`online`)}`);

      console.log(`Ip: ${data.ip}:${data.port}`);
      console.log(`Version: ${data.version}`);
      console.log(`Players: ${data.players.online}/${data.players.max}`);
      console.log(`Software: ${data.software}`);
    })
    .catch((error) => {
      console.log(pc.red(`Request failed: ${error}`));
      process.exit(1);
    });
}

getInformation(host);
