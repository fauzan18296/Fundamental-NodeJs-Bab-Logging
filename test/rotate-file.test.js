import winston from "winston";
import DailyRotateFile from "winston-daily-rotate-file";

test('create new logger with console & file transport', () => {
  const logger = winston.createLogger({
    level:"info",
    transports: [
      new winston.transports.Console({}),
      new DailyRotateFile({
        filename:"app-%DATE%.log",
        zippedArchive: true,
        maxSize: "1m",
        maxFiles: "20d",
      })
    ]
  })
  for(let i = 0; i<100000; i++){
    logger.info(`Hello World-${i}`)
  }
})
