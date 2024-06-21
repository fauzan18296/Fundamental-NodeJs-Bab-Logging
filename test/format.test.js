import winston from "winston";

test('logging with format', () => {
  const logger = winston.createLogger({
    level:"debug",
     // ini adalah default format saat menjalankan log yaitu format json.
    format: winston.format.json(),
      // ini adalah format saat menjalankan log yaitu format simple yang mana bentuk outputnya simple.
    format: winston.format.simple(),
    transports: [
      new winston.transports.Console({})
    ]
  })
  logger.info("Hello Info")
})

test('logging with printf format', () => {
  const logger = winston.createLogger({
    level:"debug",
    // format printf ini adalah format custom/format yang dibuat sendiri.
    format:winston.format.printf(log => {
     return `${new Date()} : ${log.level} : ${log.message}`
    }),
    transports: [
      new winston.transports.Console({})
    ]
  })
  logger.info("Hello Info")
})
