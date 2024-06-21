import winston from "winston";

test('create new logger with console transport', () => {
  const logger = winston.createLogger({
    // sampai level mana log/output yang akan dijalankan di cmd atau console
    level:"debug",
    transports: [
      new winston.transports.Console({})
    ]
  })

  logger.log({level: "error",message: "Hello Error",})
  logger.log({level: "warn",message: "Hello Warn",})
  logger.log({level: "info",message: "Hello Info",})
  logger.log({level: "http",message: "Hello Http",})
  logger.log({level: "verbose",message: "Hello Verbose",})
  logger.log({level: "debug",message: "Hello Debug",})
  logger.log({level: "silly",message: "Hello Silly",})
})
