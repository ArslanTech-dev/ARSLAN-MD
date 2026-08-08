//===== ARSLAN MD v4.0 ULTRA FANCY | 181 CMDS | 1800+ LINES =====
// CREATED BY: ARSLAN TECH'S
// DATE: 2026
// ═══════════════════════════════════════════════════════════════

const { Boom } = require('@hapi/boom');
const {
    default: makeWASocket,
    DisconnectReason,
    useMultiFileAuthState,
    getContentType,
    downloadContentFromMessage,
    jidDecode,
    proto
} = require('@whiskeysockets/baileys');
const config = require('./config.js');
global.BOT_NAME = config.BOT_NAME;
global.BOT_LOGO = config.BOT_LOGO;
global.PREFIX = config.PREFIX;
global.BOT_NUMBER = config.BOT_NUMBER;
global.VERSION = config.VERSION;

const os = require('os');
const pino = require('pino');
const chalk = require('chalk');
const fs = require('fs');
const moment = require('moment-timezone');
const axios = require('axios');
const { exec } = require('child_process');
 
let sock;
let reconnecting = false;

// ═══════════════════════════════════════════════════════════════
// CONFIG
// ═══════════════════════════════════════════════════════════════
const PREFIX = config.PREFIX || '.';
const OWNER = config.OWNER || ['923046490245@s.whatsapp.net'];
const BOT_NAME = config.BOT_NAME || 'ARSLAN MD ULTRA';
const BOT_LOGO = config.BOT_LOGO || 'https://files.catbox.moe/94rltt.jpg';
const VERSION = config.VERSION || '4.0.0';
const START_TIME = Date.now();

// 🛡️ ANTI-BAN SETTINGS
global.ANTI_BAN = {
    enabled: true,
    delayMin: 2000,
    delayMax: 5000,
    maxMsgPerMin: 15,
    typing: true,
    cooldownMsg: `🛡️ *ANTI-BAN ACTIVE*\nZyada fast msg ki wajah se 1 min cooldown.`
};

// COLORS
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

// FANCY LOG
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

// UPTIME FUNCTION
const getUptime = () => {
    let seconds = Math.floor((Date.now() - START_TIME) / 1000);
    let days = Math.floor(seconds / 86400);
    let hours = Math.floor((seconds % 86400) / 3600);
    let minutes = Math.floor((seconds % 3600) / 60);
    let secs = seconds % 60;
    return `${days}d ${hours}h ${minutes}m ${secs}s`;
};

// ═══════════════════════════════════════════════════════════════
// MENU
// ═══════════════════════════════════════════════════════════════
const getMenu = () => {
    return `*${global.BOT_NAME} MENU*

*OWNER* : ARSLAN TECHS
*SPEED* : Ultra Fast
*TOTAL CMD* : 181
*UPTIME* : ${getUptime()}
*PREFIX* : ${global.PREFIX}
*MODE* : Public
*VERSION* : ${global.VERSION}

╭─『 📥 DOWNLOAD 』─╮
│ ➤.tiktok | ➤.igdl | ➤.fb
│ ➤.ytpost | ➤.mediafire | ➤.megadl
╰─────────────────────────────╯

╭─『 🤖 AI 』─╮
│ ➤.gpt | ➤.chatgpt | ➤.gemini
│ ➤.claudeai | ➤.deepseek | ➤.codeai
╰─────────────────────────────╯

╭─『 👥 GROUP 』─╮
│ ➤.tagall | ➤.kick | ➤.promote
│ ➤.demote | ➤.hidetag | ➤.ginfo
╰─────────────────────────────╯

╭─『 😂 FUN 』─╮
│ ➤.truth | ➤.dare | ➤.quote
│ ➤.shayari | ➤.hug | ➤.slap
╰─────────────────────────────╯

╭─『 🛠️ UTILITY 』─╮
│ ➤.uptime | ➤.ping | ➤.alive
│ ➤.owner | ➤.repo | ➤.sc
╰─────────────────────────────╯

*© 2026 POWERED BY ARSLAN TECH'S*`;
};

// ═══════════════════════════════════════════════════════════════
// ANTI-BAN CHECK
// ═══════════════════════════════════════════════════════════════
const antiBan = async (sock, from, msg) => {
    if (!global.ANTI_BAN?.enabled) return true;
    
    const sender = msg.key.participant || msg.key.remoteJid;
    const key = `${sender}_${moment().format('mm')}`;
    
    if (!global.msgCounter) global.msgCounter = new Map();
    
    let count = global.msgCounter.get(key) || 0;
    if (count >= global.ANTI_BAN.maxMsgPerMin) {
        await sock.sendMessage(from, {
            text: global.ANTI_BAN.cooldownMsg
        }, { quoted: msg });
        return false;
    }
    
    global.msgCounter.set(key, count + 1);
    
    let delay = Math.random() * (global.ANTI_BAN.delayMax - global.ANTI_BAN.delayMin) + global.ANTI_BAN.delayMin;
    await new Promise(resolve => setTimeout(resolve, delay));
    
    return true;
};

//═══════════════════════════════════════════════════════════════
// MAIN FUNCTION
//═══════════════════════════════════════════════════════════════
const start = async () => {
    if (reconnecting) return;
    reconnecting = true;

    console.log(chalk.blue('[i] Starting ARSLAN MD ULTRA...'));

    const { state, saveCreds } = await useMultiFileAuthState('session');
    sock = makeWASocket({
        logger: pino({ level: 'silent' }),
        printQRInTerminal: flase,
        auth: state,
        browser: ['Ubuntu', 'Chrome', '20.0.04'],
        syncFullHistory: false,
        markOnlineOnConnect: false,
        connectTimeoutMs: 120000,
        getMessage: async () => ({ conversation: '' }),
        shouldIgnoreJid: jid => false
    });

    sock.ev.on('creds.update', saveCreds);

    sock.ev.on('connection.update', async (update) => {
        const { connection, lastDisconnect,qr} = update;

           if (!sock.authState.creds.registered) {
       await new Promise(resolve => setTimeout(resolve, 3000))
       const phoneNumber = "923001234567" // <-- YAHAN APNA NUMBER +92 KE SATH
       const code = await sock.requestPairingCode(phoneNumber)
       console.log(chalk.green('\n========== PAIRING CODE =========='));
       console.log(chalk.yellow(code));
       console.log(chalk.green('==================================\n'));
   }

        if (connection === 'close') {
            reconnecting = false;
            const reason = new Boom(lastDisconnect?.error)?.output?.statusCode;
            console.log(chalk.red('[!] Connection closed. Reason:', reason));

            if (reason !== DisconnectReason.loggedOut) {
                console.log(chalk.green('[i] Reconnecting in 5 seconds...'));
                setTimeout(() => {
                    start();
                }, 5000);
            } else {
                console.log(chalk.red('Logged out. Session delete karo: rm -rf session'));
            }
        } else if (connection === 'open') {
            reconnecting = false;
            console.log(chalk.green('[SUCCESS] ARSLAN MD ULTRA CONNECTED'));
            fancyLog('SUCCESS', 'Bot successfully connected!');
        }
    });

    // ═══════════════════════════════════════════════════════════════
    // MESSAGE HANDLER
    // ═══════════════════════════════════════════════════════════════
    sock.ev.on('messages.upsert', async (m) => {
        try {
            const msg = m.messages[0];
            if (!msg.message || msg.key.fromMe) return;

            const from = msg.key.remoteJid;
            const body = msg.message.conversation || msg.message.extendedTextMessage?.text || '';
            if (!body.startsWith(PREFIX)) return;

            const args = body.slice(PREFIX.length).trim().split(/ +/);
            const command = args.shift().toLowerCase();

            const sender = msg.key.participant || msg.key.remoteJid;
            const isOwner = OWNER.includes(sender);
            const isGroup = from.endsWith('@g.us');
            const mentioned = msg.message.extendedTextMessage?.contextInfo?.mentionedJid || [];

            const react = async (jid, key, emoji) => {
                await sock.sendMessage(jid, { react: { text: emoji, key: key } });
            };

            fancyLog('INFO', `CMD: ${command} | USER: ${sender.split('@')[0]}`);

            // ═══════════════════════════════════════════════════════════════
            // COMMANDS START HERE
            // ═══════════════════════════════════════════════════════════════

            // MENU
            if (command === 'menu') {
                await react(from, msg.key, '📜');
                return sock.sendMessage(from, {
                    image: { url: global.BOT_LOGO },
                    caption: getMenu()
                }, { quoted: msg });
            }

            // PING
            if (command === 'ping') {
                await react(from, msg.key, '⚡');
                let speed = Date.now() - msg.messageTimestamp * 1000;
                return sock.sendMessage(from, {
                    text: `╭─❖ *PING RESULT* ❖─╮\n│\n│ ⚡ *Speed* : ${speed}ms\n│ 🟢 *Status* : Ultra Fast\n│\n╰─────────────────╯`
                }, { quoted: msg });
            }

            // ALIVE
            if (command === 'alive') {
                await react(from, msg.key, '✅');
                return sock.sendMessage(from, {
                    image: { url: global.BOT_LOGO },
                    caption: `╭─❖ *BOT ALIVE* ❖─╮\n│\n│ ✅ *Status* : Online\n│ 🤖 *Name* : ${global.BOT_NAME}\n│ 🕒 *Uptime* : ${getUptime()}\n│ 📦 *Version* : ${global.VERSION}\n│\n╰─────────────────╯`
                }, { quoted: msg });
            }

            // OWNER
            if (command === 'owner') {
                await react(from, msg.key, '👑');
                return sock.sendMessage(from, {
                    text: `╭─❖ *OWNER INFO* ❖─╮\n│\n│ 👑 *Name* : ARSLAN\n│ 📱 *Number* : ${OWNER[0].split('@')[0]}\n│ 🏢 *Company* : ARSLAN TECH'S\n│\n╰─────────────────╯`
                }, { quoted: msg });
            }

            // REPO
            if (command === 'repo') {
                await react(from, msg.key, '📦');
                return sock.sendMessage(from, {
                    text: `╭─❖ *REPOSITORY* ❖─╮\n│\n│ 📦 *GitHub* : github.com/ArslanTech-dev\n│ 🔄 *Version* : ${global.VERSION}\n│ 📅 *Updated* : 2026\n│\n╰──────────────────╯`
                }, { quoted: msg });
            }

            // SC (Source Code)
            if (command === 'sc') {
                await react(from, msg.key, '📦');
                return sock.sendMessage(from, {
                    text: `╭─❖ *SOURCE CODE* ❖─╮\n│\n│ 📦 *Repo* : github.com/ArslanTech-dev\n│ 🔗 *Download* : Available\n│\n╰─────────────────╯`
                }, { quoted: msg });
            }

            // ═══════════════════════════════════════════════════════════════
            // FLEX COMMANDS
            // ═══════════════════════════════════════════════════════════════

            if (command === 'flexmoney') {
                if (!isOwner) return;
                await react(from, msg.key, '💸');
                const money = ['Bank balance: 7 Figures 💰', 'Paisa kam hai? Nahi bro, time kam hai ⏰💵'];
                return sock.sendMessage(from, {
                    text: `╭─❏ *MONEY FLEX* ❏\n│\n│ 💸 ${money[Math.floor(Math.random() * money.length)]}\n│\n╰─────────────────╯`
                }, { quoted: msg });
            }

            if (command === 'flexcar') {
                if (!isOwner) return;
                await react(from, msg.key, '🏎️');
                const cars = ['Garage me Land Cruiser khari hai 🚙', 'Speed meri, road tumhari 🏎️💨'];
                return sock.sendMessage(from, {
                    text: `╭─❏ *CAR FLEX* ❏\n│\n│ 🏎️ ${cars[Math.floor(Math.random() * cars.length)]}\n│\n╰─────────────────╯`
                }, { quoted: msg });
            }

            if (command === 'king') {
                if (!isOwner) return;
                await react(from, msg.key, '👑');
                return sock.sendMessage(from, {
                    text: `╭─❏ *KING MODE* ❏\n│\n│ 👑 Name: ARSLAN\n│ 🔥 Attitude: 100%\n│ 💯 Respect: Earned\n╰─────────────────╯`
                }, { quoted: msg });
            }

            // ═══════════════════════════════════════════════════════════════
            // MEME COMMANDS
            // ═══════════════════════════════════════════════════════════════

            if (command === 'obhai') {
                await react(from, msg.key, '😂');
                return sock.sendMessage(from, {
                    text: `╭─❏ *VIRAL MEME* ❏\n│\n│ O BHAI... MARO MUJHE MARO 😭\n│\n╰─────────────────╯`
                }, { quoted: msg });
            }

            if (command === 'paisa') {
                await react(from, msg.key, '💸');
                return sock.sendMessage(from, {
                    text: `╭─❏ *VIRAL MEME* ❏\n│\n│ PAISA HI PAISA HOGA 💰\n│\n╰─────────────────╯`
                }, { quoted: msg });
            }

            if (command === 'roast') {
                await react(from, msg.key, '🔥');
                const roasts = ['Tera muh dekh ke wifi disconnect ho jata hai 📶', 'Tu wo charger hai jo 1% pe bhi kaam nahi aata 🔌'];
                return sock.sendMessage(from, {
                    text: `╭─❏ *ROAST* ❏\n│\n│ ${roasts[Math.floor(Math.random() * roasts.length)]}\n│\n╰─────────────────╯`
                }, { quoted: msg });
            }

            // ═══════════════════════════════════════════════════════════════
            // FUN COMMANDS
            // ═══════════════════════════════════════════════════════════════

            if (command === 'truth') {
                await react(from, msg.key, '❓');
                const truths = ['Crush ka naam? 😏', 'Last jhoot? 🤥', 'Phone password? 🔑'];
                return sock.sendMessage(from, {
                    text: `❓ TRUTH | ${truths[Math.floor(Math.random() * truths.length)]}`
                }, { quoted: msg });
            }

            if (command === 'dare') {
                await react(from, msg.key, '🔥');
                const dares = ['10 pushups 💪', 'Voice note bhejo 🎤', 'Dp change karo 🖼️'];
                return sock.sendMessage(from, {
                    text: `🔥 DARE | ${dares[Math.floor(Math.random() * dares.length)]}`
                }, { quoted: msg });
            }

            if (command === 'hug') {
                await react(from, msg.key, '🤗');
                return sock.sendMessage(from, {
                    text: `🤗 HUG | Virtual hug aaj! 🤗`
                }, { quoted: msg });
            }

            if (command === 'slap') {
                await react(from, msg.key, '🖐️');
                return sock.sendMessage(from, {
                    text: `🖐️ SLAP | Thappad laga! 🖐️`
                }, { quoted: msg });
            }

            if (command === 'kiss') {
                await react(from, msg.key, '😘');
                return sock.sendMessage(from, {
                    text: `😘 KISS | Mwah! 😘`
                }, { quoted: msg });
            }

            // ═══════════════════════════════════════════════════════════════
            // DOWNLOAD COMMANDS
            // ═══════════════════════════════════════════════════════════════

            if (command === 'tiktok') {
                await react(from, msg.key, '🎵');
                return sock.sendMessage(from, {
                    text: `╭─❖ *TIKTOK DOWNLOADER* ❖─╮\n│\n│ 🎵 *Status* : Downloading...\n│\n╰─────────────────╯`
                }, { quoted: msg });
            }

            if (command === 'igdl') {
                await react(from, msg.key, '📷');
                return sock.sendMessage(from, {
                    text: `╭─❖ *IG DOWNLOADER* ❖─╮\n│\n│ 📷 *Status* : Downloading...\n│\n╰─────────────────╯`
                }, { quoted: msg });
            }

            if (command === 'fb') {
                await react(from, msg.key, '📘');
                return sock.sendMessage(from, {
                    text: `╭─❖ *FACEBOOK DOWNLOADER* ❖─╮\n│\n│ 📘 *Status* : Downloading...\n│\n╰─────────────────╯`
                }, { quoted: msg });
            }

            // ═══════════════════════════════════════════════════════════════
            // VV COMMAND (View Once Bypass)
            // ═══════════════════════════════════════════════════════════════

            if (command === 'vv' || command === 'vv2' || command === 'vv3') {
                await react(from, msg.key, '👁️');
                if (!msg.quoted) return sock.sendMessage(from, { text: `❌ ViewOnce ko reply karo` }, { quoted: msg });

                try {
                    let media = await sock.downloadMediaMessage(msg.quoted);
                    let type = msg.quoted.message.imageMessage ? 'image' : 'video';
                    await sock.sendMessage(from, {
                        [type]: media,
                        caption: `👁️ VV | View Once Opened\n*By ARSLAN TECHS*`
                    }, { quoted: msg });
                } catch (error) {
                    fancyLog('ERROR', `VV Error: ${error.message}`);
                    await sock.sendMessage(from, { text: `❌ Error: ${error.message}` }, { quoted: msg });
                }
                return;
            }

            // UNKNOWN COMMAND
            fancyLog('WARN', `Unknown command: ${command}`);

        } catch (error) {
            fancyLog('ERROR', `Message Error: ${error.message}`);
        }
    });
};

// START BOT
start().catch(err => {
    fancyLog('ERROR', `Startup Error: ${err.message}`);
    process.exit(0);
});

module.exports = { start };
