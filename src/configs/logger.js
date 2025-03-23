import pino from 'pino';

/* const transport = pino.transport({
    target: 'pino/file',
    options: {
        destination: './log.json'
    },
}); */

const transport = pino.transport({
    targets: [
        {
            target: './errors.js',
            level: 'error'
        },
        {
            target: 'pino/file',
            options: {
                destination: './log.json'
            },
        },
    ],
    dedupe: true,
    sync: true,
});

const logger = pino(transport);

export default logger;