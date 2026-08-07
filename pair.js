#!/usr/bin/env node

/**
 * ARSLAN MD ULTRA - Pairing Code Generator
 * Generate pairing code for WhatsApp without QR scanning
 * Perfect for Railway, Heroku, Replit deployments
 */

const { default: makeWASocket, useMultiFileAuthState, DisconnectReason } = require('@whiskeysockets/baileys');
const chalk = require('chalk');
const pino = require('pino');
const moment = require('moment-timezone');

const colors = {
    reset: '\x1b[0m',
    bright: '\x1b[1m',
    red: '\x1b[31m',
    green: '\x1b[32m',
    yellow: '\x1b[33m',
    blue: '\x1b[34m',
    magenta: '\x1b[35m',
    cyan: '\x1b[36m'
};

const fancyLog = (type, text) => {
    const time = moment().tz('Asia/Karachi').format('HH:mm:ss');
    const types = {
        'SUCCESS': `${colors.green}[✓]${colors.reset}`,
        'ERROR': `${colors.red}[✗]${colors.reset}`,
        'INFO': `${colors.cyan}[i]${colors.reset}`,
        'WARN': `${colors.yellow}[!]${colors.reset}`
    };
    console.log(`${colors.magenta}[${time}]${colors.reset} ${types[type]} ${text}`);
};

const generatePairingCode = async () => {
    console.log(chalk.cyan.bold('\n╔══════════════════════════════════════╗'));
    console.log(chalk.cyan.bold('║   ARSLAN MD ULTRA - PAIRING CODE     ║'));
    console.log(chalk.cyan.bold('║        Railway Deployment Helper      ║'));
    console.log(chalk.cyan.bold('╚══════════════════════════════════════╝\n'));

    const { state, saveCreds } = await useMultiFileAuthState('session');

    const sock = makeWASocket({
        auth: state,
        logger: pino({ level: 'silent' }),
        browser: ['Ubuntu', 'Chrome', '20.0.04'],
        connectTimeoutMs: 120000
    });

    sock.ev.on('connection.update', async (update) => {
        const { connection, lastDisconnect, qr } = update;

        if (qr) {
            fancyLog('INFO', 'QR Code generated, scanning...');
        }

        if (connection === 'open') {
            fancyLog('SUCCESS', 'Connection established!');
            
            // Get pairing code
            try {
                const pairingCode = await sock.requestPairingCode(sock.user?.id?.split(':')[0] || '92300000000');
                
                console.log(chalk.green.bold('\n╔════════════════════════════════════════╗'));
                console.log(chalk.green.bold('║         PAIRING CODE GENERATED          ║'));
                console.log(chalk.green.bold('╚════════════════════════════════════════╝\n'));
                
                console.log(chalk.yellow.bold(`Pairing Code: ${chalk.cyan.bold(pairingCode)}\n`));
                console.log(chalk.green('✓ Copy this code and use it to connect without QR\n'));
                
                process.exit(0);
            } catch (err) {
                fancyLog('ERROR', `Failed to get pairing code: ${err.message}`);
                process.exit(1);
            }
        }

        if (connection === 'close') {
            const reason = new (require('@hapi/boom')).Boom(lastDisconnect?.error)?.output?.statusCode;
            fancyLog('WARN', `Connection closed. Reason: ${reason}`);
            
            if (reason !== DisconnectReason.loggedOut) {
                fancyLog('INFO', 'Reconnecting...');
                setTimeout(() => generatePairingCode(), 5000);
            }
        }
    });

    sock.ev.on('creds.update', saveCreds);
};

// Run the generator
generatePairingCode().catch(err => {
    fancyLog('ERROR', `Startup error: ${err.message}`);
    process.exit(1);
});

// Timeout after 60 seconds
setTimeout(() => {
    fancyLog('WARN', 'Pairing code generation timed out');
    process.exit(1);
}, 60000);
