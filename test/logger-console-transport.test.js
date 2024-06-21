import winston from "winston";

test('create new logger with console transport', () => {
  const logger = winston.createLogger({
     // transports fungsinya agar isi dari log/output bisa muncul di cmd atau console
    transports: [
      new winston.transports.Console({})
    ]
  })

  logger.log({
    level: "info",
    message: "Hello logging",
  })
})
