import winston from "winston";

test('create new logger with console transport', () => {
  const logger = winston.createLogger({
    // sampai level mana log/output yang akan dijalankan di cmd atau console
    level:"debug",
    transports: [
      new winston.transports.Console({})
    ]
  })

  logger.error("Hello Error")
  logger.warn("Hello Warn")
  logger.info("Hello Info")
  logger.http("Hello Http")
  logger.verbose("Hello Verbose")
  logger.debug("Hello Debug")
  logger.silly("Hello Silly")
})
