import winston from "winston";

test('logging with combine format', () => {
  const logger = winston.createLogger({
    level:"debug",
    // disini kita menggunakan format combine supaya kita bisa menggunakan format timestamp
    format:winston.format.combine(
      winston.format.timestamp(),
      winston.format.ms(),
      winston.format.json(),
    ),
    transports: [
      new winston.transports.Console({})
    ]
  })
  logger.info("Hello Info")
  logger.warn("Hello Warn")
  logger.error("Hello Error")
})
