import winston from "winston";

test('create new logger with console & file transport', () => {
  const logger = winston.createLogger({
    level:"info",
     // transports fungsinya agar isi dari log/output bisa muncul di cmd atau console dan output akan dibuat juga di file yaitu application.log
    transports: [
      new winston.transports.Console({}),
      new winston.transports.File({
        filename:"application.log"
      }),
      // jadi ini adalah transport level yang mana output nya akan dibuat sesuai dengan level tranport yang ditentukan.
      new winston.transports.File({
        level:"error",
        filename:"application-error.log"
      }),
    ]
  })
  logger.error("Hello Error")
  logger.warn("Hello Warn")
  logger.info("Hello Info")
})
