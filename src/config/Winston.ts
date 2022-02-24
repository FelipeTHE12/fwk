import winston from "winston";

const { combine, timestamp, label, printf } = winston.format;

const customFormat = printf(({ level, message, label, timestamp }) => {
  return `${timestamp} [${label} ${level}]: ${message}`;
});

export const logger = winston.createLogger({
  level: "silly",
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({ filename: "calcular.log" }),
  ],
  format: combine(label({ label: "calcular" }), timestamp(), customFormat),
});
