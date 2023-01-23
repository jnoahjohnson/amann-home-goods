// services/redis.server.ts

import * as redis from "redis";

const client = redis.createClient({
  url: process.env.REDIS_URL,
});

client.on("error", (err) => console.log("Redis client error", err));

// If you update the data type, update the key version so you are not left with invalid states
const KEY_VERSION = "1";

export const saveToRedis = async (data: any) => {
  await client.connect();
  await client.set(`f-${KEY_VERSION}-amazon`, JSON.stringify(data), {
    EX: 60 * 60 * 12,
  });
  await client.quit();
};

export const getDataFromRedis = async (): Promise<any | null> => {
  // Get data from redis
  await client.connect();
  const data = await client.get(`f-${KEY_VERSION}-amazon`);
  await client.quit();

  if (!data) {
    return null;
  }

  const jsonData = JSON.parse(data);

  console.log("parsed", jsonData);

  return jsonData;
};
