import * as crypto from "crypto";

export type DBRecord = {
  [key: string]: {
    channel: string;
    hash: string;
  };
};

function generateId() {
  return Math.random().toString(36).substring(7);
}

export function createDBRecords(channels: string[], hash: string) {
  return channels.reduce<DBRecord>(
    (acc, cur) => ({
      ...acc,
      [generateId()]: {
        channel: cur,
        hash,
      },
    }),
    {},
  );
}

function main() {
  const channels = ["#channel1", "#channel2", "#channel3"];
  const hash = crypto.randomUUID();
  const dbRecords = createDBRecords(channels, hash);

  console.log(dbRecords);
}

main();
