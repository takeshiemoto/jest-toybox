import { createDBRecords, DBRecord } from "./index";
import crypto from "crypto";

describe("Test", () => {
  const channels = ["#channel1", "#channel2", "#channel3"];
  let hash: string;
  let records: DBRecord;

  beforeEach(() => {
    hash = crypto.randomUUID();
    records = createDBRecords(channels, hash);
  });

  it("generates records", () => {
    const recordKeys = Object.keys(records);
    expect(recordKeys.length).toBe(channels.length);
  });

  it("has correct channel names", () => {
    const actualChannels = Object.values(records).map(
      (record) => record.channel,
    );
    expect(actualChannels).toEqual(channels);
  });

  it("has correct hash value", () => {
    const hashes = Object.values(records).map((record) => record.hash);
    expect(hashes).toEqual(Array(channels.length).fill(hash));
  });
});
