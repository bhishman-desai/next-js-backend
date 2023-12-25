import { RateLimiter } from "limiter";

export const limiter = new RateLimiter({
  tokensPerInterval: 3 /* Limit the number of requests to 3 */,
  interval: "min" /* Define the interval for the limit i.e. 3 requests/min */,
  fireImmediately: true /* To delete tokens immediately async */,
});
