const pino = require('pino');

const transport = pino.transport({
    target: 'pino-pretty',
    options: {
        colorize: true,
        colorizeObjects: true,
        ignore: 'pid,hostname',
        include: 'level,time'
    }
});

const logger = pino(transport);

module.exports = { logger };