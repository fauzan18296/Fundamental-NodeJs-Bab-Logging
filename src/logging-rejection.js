import winston from "winston";

const logger = winston.createLogger({
  level:"info",
  transports: [
    new winston.transports.File({
      handleRejections: true,
      filename: "rejection.json"
    })
  ]
})

async function callAsync() {
  return Promise.reject("Ups!")
}
callAsync()