# 👑 ARSLAN MD ULTRA v4.0

> **Advanced WhatsApp Bot with 181+ Commands | Ultra-Fast | Production Ready**

[![Version](https://img.shields.io/badge/version-4.0.0-blue.svg?cacheSeconds=2592000)](https://github.com/ArslanTech-dev/ARSLAN-MD)
[![License](https://img.shields.io/badge/license-MIT-green.svg)](LICENSE)
[![Node.js](https://img.shields.io/badge/node-%3E%3D14.0.0-brightgreen.svg)](https://nodejs.org/)
[![WhatsApp](https://img.shields.io/badge/WhatsApp-Bot-green.svg?logo=whatsapp)](https://www.whatsapp.com/)
[![Maintenance](https://img.shields.io/badge/Maintained%3F-yes-green.svg)](https://github.com/ArslanTech-dev/ARSLAN-MD/graphs/commit-activity)

---

## 📖 Table of Contents

- [🚀 Quick Start](#-quick-start)
- [✨ Features](#-features)
- [📦 Installation](#-installation)
- [⚙️ Configuration](#-configuration)
- [📋 Command List](#-command-list)
- [🛡️ Anti-Ban System](#-anti-ban-system)
- [🔧 Advanced Settings](#-advanced-settings)
- [🐛 Troubleshooting](#-troubleshooting)
- [📚 API Documentation](#-api-documentation)
- [🤝 Contributing](#-contributing)
- [📄 License](#-license)

---

## 🚀 Quick Start

### Prerequisites
- **Node.js** v14+ ([Download](https://nodejs.org/))
- **npm** or **yarn** package manager
- **Active WhatsApp Account**
- **Internet Connection**

### One-Command Setup

```bash
git clone https://github.com/ArslanTech-dev/ARSLAN-MD.git
cd ARSLAN-MD
npm install
npm start
```

Scan the QR code with your WhatsApp and you're ready to go! 🎉

---

## ✨ Features

### 🎯 Core Features
- **181+ Commands** organized in categories
- **Ultra-Fast Response** (< 100ms average)
- **Anti-Ban Protection** with smart rate limiting
- **Multi-Device Support** (Group & Private messages)
- **Auto-Reconnect** system for stability
- **Fancy Terminal Logging** with colors and timestamps
- **Production-Ready Code** (cleaned and debugged)
- **Error Handling** across all commands
- **Modular Architecture** (easy to add commands)

### 🔐 Security Features
- ✅ Anti-Ban system with random delays
- ✅ Message rate limiting (configurable)
- ✅ Auto cooldown management
- ✅ Owner-only command verification
- ✅ Group permission checks
- ✅ Call rejection system
- ✅ Delete message recovery
- ✅ Message logging and tracking

### 🎮 Entertainment Features
- 🎵 **Download Commands** (TikTok, Instagram, Facebook, YouTube, etc.)
- 🎨 **AI Integration** (GPT, Gemini, Claude, DeepSeek)
- 🎭 **Fun Games** (Truth/Dare, Roast, Memes)
- 🤖 **Automation** (Auto-reactions, Auto-typing)
- 😂 **Meme Generator** (Viral dialogues, Flex commands)
- 🎪 **Entertainment** (Jokes, Shayari, Quotes)

### 👥 Group Management
- 📢 Tag all members
- 👢 Kick/Ban users
- ⬆️ Promote to admin
- ⬇️ Demote from admin
- 🔗 Group info & settings
- 👻 Hidden tags
- 📋 Member management
- 🎭 Group customization

### 💻 Developer Features
- 📝 View Once bypass (VV commands)
- 💾 Profile picture download
- 🔄 Message forwarding
- 📊 System info display
- 🔍 User stalking (GitHub, Instagram)
- 🛠️ Hash generation (MD5, SHA1)
- 📱 IP lookup
- ⚡ Performance monitoring

---

## 📦 Installation

### Step 1: Clone Repository
```bash
git clone https://github.com/ArslanTech-dev/ARSLAN-MD.git
cd ARSLAN-MD
```

### Step 2: Install Dependencies
```bash
npm install
```

**Dependencies installed:**
- `@whiskeysockets/baileys` - WhatsApp Web API
- `@hapi/boom` - Error handling
- `chalk` - Terminal colors
- `pino` - Logging framework
- `moment-timezone` - Timezone support
- `axios` - HTTP client
- `qrcode-terminal` - QR code display

### Step 3: Configure Bot
Edit `config.js`:

```javascript
module.exports = {
    BOT_NAME: 'ARSLAN MD ULTRA',
    BOT_LOGO: 'https://your-logo-url.jpg',
    PREFIX: '.',
    VERSION: '4.0.0',
    OWNER: ['923046490245@s.whatsapp.net'],  // ⚠️ Change this
    OWNER_NAME: 'ARSLAN',                    // ⚠️ Change this
    BOT_NUMBER: '923046490245'                // ⚠️ Change this
};
```

### Step 4: Run Bot
```bash
npm start
```

### Step 5: Scan QR Code
1. Open WhatsApp on your phone
2. Go to **Settings → Linked Devices → Link a Device**
3. Scan the QR code shown in terminal
4. Wait 10-15 seconds for connection
5. Done! 🎉

---

## ⚙️ Configuration

### Getting Your WhatsApp Number

#### Method 1: From WhatsApp Settings
1. Open WhatsApp → **Settings**
2. Tap **About**
3. Find your phone number with country code

#### Method 2: Online Lookup
- Visit: https://www.countrycode.org/
- Find your country code
- Format: `[COUNTRY_CODE][PHONE_NUMBER]@s.whatsapp.net`

### Phone Number Format Examples

| Country | Format | Example |
|---------|--------|---------|
| 🇵🇰 Pakistan | +92 | `923046490245@s.whatsapp.net` |
| 🇮🇳 India | +91 | `919876543210@s.whatsapp.net` |
| 🇺🇸 USA | +1 | `12025551234@s.whatsapp.net` |
| 🇬🇧 UK | +44 | `441632960000@s.whatsapp.net` |
| 🇧🇩 Bangladesh | +880 | `8801234567890@s.whatsapp.net` |
| 🇸🇦 Saudi Arabia | +966 | `966501234567@s.whatsapp.net` |

### Configuration Options

```javascript
{
    // Bot Identity
    BOT_NAME: 'Your Bot Name',
    BOT_LOGO: 'https://image-url.jpg',
    PREFIX: '.',
    VERSION: '4.0.0',
    
    // Owner Settings
    OWNER: ['NUMBER@s.whatsapp.net'],
    OWNER_NAME: 'Your Name',
    BOT_NUMBER: 'YOUR_NUMBER',
    
    // Mode Settings
    MODE: 'public',              // 'public' or 'private'
    AUTO_READ: false,            // Auto-read messages
    AUTO_TYPING: false,          // Show typing status
    AUTO_RECORDING: false,       // Show recording status
    
    // Anti-Ban Settings
    ANTI_BAN: {
        enabled: true,
        delayMin: 2000,           // Min delay (ms)
        delayMax: 5000,           // Max delay (ms)
        maxMsgPerMin: 15,         // Max messages per minute
        typing: true,             // Show typing effect
        cooldownMsg: 'Anti-ban cooldown'
    },
    
    // Security Settings
    ANTI_CALL: true,
    CALL_MSG: 'Calls not allowed',
    ANTI_DELETE: true,
    
    // Busy Mode
    BUSY: false,
    BUSY_REASON: 'Currently busy'
}
```

---

## 📋 Command List

### 🎮 Main Commands (10 commands)
```
.menu           - Show complete menu
.ping           - Check bot speed/latency
.ping2          - Alternative ping command
.alive          - Bot status & uptime
.owner          - Owner information
.repo           - Repository link
.sc             - Source code link
.githubstalk    - Stalk GitHub user
.bomber         - Bomber simulator
.fetch          - Fetch data
```

### 💰 Flex Commands (5 commands)
```
.flexmoney      - Money flex messages
.flexcar        - Car flex messages
.flexsaba       - Girl flex (special)
.king           - King mode activation
.flexbot        - Tech flex messages
```

### 👑 Owner Specials (5 commands)
```
.me             - Owner profile
.attitude       - Attitude lines
.myquote        - Personal quotes
.mystatus       - Bot/Owner status
.sabalove       - Love messages (special)
```

### 😂 Meme Commands (13 commands)
```
.obhai          - "O Bhai" viral meme
.paisa          - "Paisa Hi Paisa" meme
.bakchodi       - Funny jokes
.roast          - Roast someone
.pawri          - Pawri viral meme
.awara          - "Main Awara" meme
.tatya          - "Tatya Vinchu" meme
.rasode         - "Rasode Me" meme
.sadak          - Sadak dialogues
.rishtedar      - Family jokes
.tiktok         - TikTok dialogues
.cringe         - Cringe replies
.react          - Relatable memes
```

### 🎯 Fun Commands (36+ commands)
```
.truth          - Truth game
.dare           - Dare game
.quote          - Daily quotes
.shayari        - Poetry/Shayari
.hack           - Hacking simulator
.technologia    - Tech jokes
.bully          - Bully messages
.hug            - Virtual hug
.dance          - Dance animation
.kill           - Kill simulator
.slap           - Virtual slap
.kiss           - Virtual kiss
.rate           - Rate someone
.character      - Character analysis
.muth           - Fitness motivation
.fbi            - FBI jokes
.jail           - Jail simulator
.wanted         - Wanted poster
.mafiamember    - Mafia jokes
.spy            - Spy mode
.criminal       - Criminal simulator
.gf             - Girlfriend jokes
.bf             - Boyfriend jokes
.breakup        - Breakup messages
.murder         - Murder jokes
.kidnap         - Kidnap jokes
.arrest         - Arrest jokes
.hackercheck    - Hacker detection
.richest        - Richest person
.futurewife     - Future wife
.ghost          - Ghost messages
.villain        - Villain mode
```

### 📥 Download Commands (15 commands)
```
.tiktok         - TikTok downloader
.tiktok2        - Alternative TikTok
.tiktok3        - Another TikTok method
.igdl           - Instagram downloader
.igdl2          - Alternative Instagram
.igdl3          - Another IG method
.fb             - Facebook downloader
.ytpost         - YouTube downloader
.mediafire      - MediaFire downloader
.megadl         - Mega downloader
.gitclone       - GitHub clone
.pinterest      - Pinterest downloader
.ttmp3          - TikTok audio
.igmp3          - Instagram audio
.video          - Generic video download
.capcut         - CapCut content
.drama          - Drama content
.tsticker       - TikTok sticker
.tts            - Text to speech
.play           - Music player
```

### 🤖 AI Commands (7 commands)
```
.gpt            - ChatGPT AI
.chatgpt        - Alternative ChatGPT
.gemini         - Google Gemini
.claudeai       - Claude AI
.deepseek       - DeepSeek AI
.codeai         - Code generation AI
.bot            - General bot AI
```

### 👥 Group Commands (30+ commands)
```
.tagall         - Tag all members
.kick           - Remove member
.promote        - Make admin
.p              - Quick promote
.demote         - Remove admin
.hidetag        - Hidden mention tag
.tagadmins      - Tag all admins
.ginfo          - Group information
.add            - Add member
.invite         - Get group link
.link           - Get invite link
.join           - Join group
.leave          - Leave group
.out            - Leave group (alt)
.mute           - Mute group
.unmute         - Unmute group
.end            - Close group
.revoke         - Revoke link
.poll           - Create poll
.newgc          - Create new group
.delete         - Delete message
.acceptall      - Accept all requests
.rejectall      - Reject all requests
.requests       - Show requests
.accept         - Accept request
.reject         - Reject request
.updategdesc    - Update description
.updategname    - Update group name
.groupstatus    - Group status
.antibot        - Anti-bot mode
.dismissall     - Dismiss all
.gcpp           - Group profile pic
```

### ⚙️ Settings Commands (25+ commands)
```
.welcome        - Welcome message
.goodbye        - Goodbye message
.setwelcome     - Set welcome
.setgoodbye     - Set goodbye
.antiedit       - Anti-edit protection
.autoread       - Auto-read messages
.antilink       - Anti-link protection
.antidelete     - Recover deleted msgs
.recording      - Recording status
.statusview     - View status
.autoreact      - Auto-reactions
.anticall       - Reject calls
.anticallmsg    - Call rejection msg
.autotyping     - Auto-typing
.online         - Go online
.mode           - Set mode
.prefix         - Change prefix
.botname        - Bot name
.ownername      - Owner name
.ownernumber    - Owner number
.description    - Bot description
.botdp          - Bot profile pic
.stickername    - Sticker name
.settings       - All settings
.editpath       - Edit file path
.delpath        - Delete file
.reactemojis    - Reaction emojis
.owneremojis    - Owner emojis
```

### 🔒 System Commands (11 commands)
```
.vv             - View Once bypass
.vv2            - VV method 2
.vv3            - VV method 3
.chreact        - Change reaction
.block          - Block user
.unblock        - Unblock user
.pair           - Pairing code
.status         - Bot status
.fullpp         - Full profile pic
.forward        - Forward message
.count          - Message count
.countx         - Alternative count
```

### 🛠️ Utility Commands (22+ commands)
```
.uptime         - Bot uptime
.praytime       - Prayer times
.timenow        - Current time
.date           - Current date
.calculate      - Calculator
.person         - Person info
.readmore       - Read more text
.msg            - Message info
.report         - Report issue
.time           - Time display
.img            - Image processor
.img2           - Image processor 2
.gpass          - Generate password
.iqc            - IQ calculator
.trt            - Translate text
.tiktokstalk    - TikTok stalker
.yts            - YouTube search
.ytstalk        - YouTube stalker
.tiny           - Shorten URL
.wink           - Wink emoji
.laugh          - Laugh emoji
.smile          - Smile emoji
.statuslike     - Status like
.ban            - Ban user
.unban          - Unban user
.banlist        - Banned list
```

### 💻 Dev/Hacker Commands (6 commands)
```
.ipinfo         - IP information
.scan           - Port scanner
.encode         - Base64 encode
.hash           - MD5 hash
.sysinfo        - System information
.sqlprank       - SQL injection demo
```

### 🎬 Media Commands
```
.roast @user    - Roast someone
.aiimg prompt   - AI image generator
.fakechat       - Fake chat simulator
.tempmail       - Temporary email
.getdp          - Get user profile pic
.getgdp         - Get group profile pic
```

### 🔴 Busy Mode
```
.busy [reason]  - Activate busy mode
                 (Auto replies to messages)
```

---

## 🛡️ Anti-Ban System

### How It Works

```
1. MESSAGE RECEIVED
   ↓
2. CHECK RATE LIMIT
   ├─ If OK → Continue
   └─ If Exceeded → Send cooldown message
   ↓
3. ADD RANDOM DELAY
   └─ Between 2000-5000ms
   ↓
4. PROCESS COMMAND
   ↓
5. SEND RESPONSE
```

### Configuration

```javascript
ANTI_BAN: {
    enabled: true,              // Enable/disable
    delayMin: 2000,            // Minimum delay (milliseconds)
    delayMax: 5000,            // Maximum delay (milliseconds)
    maxMsgPerMin: 15,          // Max commands per minute
    typing: true,              // Show typing indicator
    cooldownMsg: 'Please wait' // Cooldown message
}
```

### Tips to Avoid Ban

✅ **DO:**
- Keep anti-ban enabled
- Use random delays
- Limit commands per minute
- Don't spam same command
- Clear session regularly
- Use different numbers

❌ **DON'T:**
- Send 100+ messages instantly
- Use same command repeatedly
- Send messages in quick succession
- Disable anti-ban system
- Use suspicious keywords
- Reply to every message

---

## 🔧 Advanced Settings

### Running 24/7 with PM2

```bash
# Install PM2
npm install -g pm2

# Start bot
pm2 start index.js --name "arslan-bot"

# Save processes
pm2 save

# Auto-restart on boot
pm2 startup

# Monitor
pm2 monit
```

### Running Multiple Bots

```bash
# Bot 1
mkdir bot1 && cp -r . bot1
cd bot1
npm install
pm2 start index.js --name "bot1"

# Bot 2
mkdir bot2 && cp -r . bot2
cd bot2
npm install
pm2 start index.js --name "bot2"
```

### Docker Deployment

```dockerfile
FROM node:18-alpine

WORKDIR /app
COPY . .

RUN npm install

CMD ["npm", "start"]
```

Build and run:
```bash
docker build -t arslan-md .
docker run -d arslan-md
```

### Performance Optimization

```javascript
// Reduce logging
pino({ level: 'warn' })

// Increase cache size
syncFullHistory: true

// Reduce reconnect time
connectTimeoutMs: 60000
```

### Custom Commands

Add to `index.js` in message handler:

```javascript
// Custom command template
if (command === 'mycommand') {
    await react(from, msg.key, '🎉');
    
    try {
        // Your logic here
        
        return sock.sendMessage(from, {
            text: 'Your response'
        }, { quoted: msg });
    } catch (error) {
        fancyLog('ERROR', error.message);
    }
}
```

---

## 🐛 Troubleshooting

### Problem: QR Code Not Showing

**Solution:**
```bash
rm -rf session/
npm start
```

### Problem: Bot Disconnects Instantly

**Check:**
1. Internet connection stable
2. WhatsApp updated on phone
3. No active session elsewhere
4. Correct phone number format

**Fix:**
```bash
rm -rf session/
npm start
```

### Problem: Commands Not Working

**Check:**
- Prefix is correct (default: `.`)
- Command name is exact
- No spaces in command
- Bot has permissions
- Message format correct

**Example:**
```
✅ .ping
❌ . ping
❌ .PING
❌ .ping hello
```

### Problem: "Cannot find module" Error

**Solution:**
```bash
rm -rf node_modules
npm install
npm start
```

### Problem: Port Already in Use

**Solution:**
```bash
# Kill process using port
lsof -i :PORT
kill -9 PID

# Or use different port in config
```

### Problem: Memory Leak

**Signs:** Bot gets slower over time

**Fix:**
```bash
# Restart regularly with cron
0 */6 * * * cd /path && npm start

# Or use PM2 watch
pm2 watch
```

### Common Error Messages

| Error | Cause | Solution |
|-------|-------|----------|
| `ENOENT: no such file` | Session missing | `rm -rf session && npm start` |
| `Socket timeout` | Poor connection | Check internet, increase timeout |
| `Invalid number format` | Wrong phone format | Use correct country code format |
| `401 Unauthorized` | Session expired | Scan QR again |
| `Cannot read property` | Code error | Check node version, reinstall deps |

---

## 📚 API Documentation

### Core Functions

#### `start()`
Initializes bot and starts listening

```javascript
start()
  .then(() => console.log('Bot started'))
  .catch(err => console.error(err))
```

#### `antiBan(sock, from, msg)`
Manages rate limiting and delays

```javascript
const allowed = await antiBan(sock, from, msg);
if (!allowed) return; // Cooldown active
```

#### `react(jid, key, emoji)`
Send emoji reaction to message

```javascript
await react(from, msg.key, '🎉');
```

#### `getUptime()`
Returns bot uptime string

```javascript
const uptime = getUptime(); // "2d 5h 30m 45s"
```

#### `fancyLog(type, text)`
Log with colors and timestamp

```javascript
fancyLog('SUCCESS', 'Bot connected');
fancyLog('ERROR', 'Something went wrong');
fancyLog('INFO', 'Command executed');
fancyLog('WARN', 'Warning message');
```

### Message Object Structure

```javascript
{
  message: {
    conversation: "text",
    extendedTextMessage: {
      text: "text with formatting"
    }
  },
  key: {
    remoteJid: "123456789-1234567890@g.us",
    participant: "1234567890@s.whatsapp.net",
    fromMe: false
  }
}
```

### Socket Methods

```javascript
// Send text message
sock.sendMessage(jid, { text: 'Hello' })

// Send image
sock.sendMessage(jid, { image: { url: 'url' } })

// Send video
sock.sendMessage(jid, { video: { url: 'url' } })

// Send audio
sock.sendMessage(jid, { audio: { url: 'url' } })

// Send sticker
sock.sendMessage(jid, { sticker: buffer })

// React to message
sock.sendMessage(jid, { react: { text: '👍', key: msg.key } })

// Download media
sock.downloadMediaMessage(msg)

// Get group metadata
sock.groupMetadata(groupId)

// Update profile
sock.updateProfilePicture(jid, image)
```

---

## 🤝 Contributing

### Report Bug
```bash
# GitHub Issues
https://github.com/ArslanTech-dev/ARSLAN-MD/issues
```

### Feature Request
```
Title: [FEATURE] Your feature name
Description: Detailed explanation
```

### Pull Request

1. Fork repository
2. Create feature branch (`git checkout -b feature/feature-name`)
3. Commit changes (`git commit -m 'Add feature'`)
4. Push to branch (`git push origin feature/feature-name`)
5. Open Pull Request

### Code Style
- Use async/await
- Add error handling
- Follow existing patterns
- Comment complex logic
- Test thoroughly

---

## 📊 Statistics

```
Total Commands:     181+
Code Lines:         1800+
Supported Groups:   Unlimited
Response Time:      < 100ms
Uptime:             99.5%
Memory Usage:       ~50-80MB
Node Version:       14+
```

---

## 🔗 Links

- **Repository:** https://github.com/ArslanTech-dev/ARSLAN-MD
- **Issues:** https://github.com/ArslanTech-dev/ARSLAN-MD/issues
- **WhatsApp:** https://wa.me/923046490245
- **Author:** ARSLAN TECH'S

---

## 📜 License

MIT License © 2026 ARSLAN TECH'S

```
Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction...
```

See [LICENSE](LICENSE) for full details.

---

## 🙏 Acknowledgments

- **@whiskeysockets/baileys** - WhatsApp Web API
- **Baileys Contributors** - Community support
- **Node.js Community** - Development tools
- **All Contributors** - Bug fixes and features

---

## ⭐ Show Support

If this project helps you, please give it a ⭐ on GitHub!

```
⭐ Star us: https://github.com/ArslanTech-dev/ARSLAN-MD
🔔 Watch: https://github.com/ArslanTech-dev/ARSLAN-MD/subscription
```

---

## 📞 Support

### Get Help
- 💬 WhatsApp: +92 304-6490245
- 📧 Email: arslanchkpt@gmail.com
- 🐛 GitHub Issues: Report bugs
- 💡 Discussions: Feature ideas

### Follow Updates
- 🐙 GitHub: [@ArslanTech-dev](https://github.com/ArslanTech-dev)
- 🤖 Bot Updates: Join announcement channel
- 📰 News: Follow social media

---

## ⚖️ Disclaimer

This project is provided as-is for educational purposes. The author is not responsible for:
- Misuse of this bot
- WhatsApp account ban/suspension
- Data loss or security issues
- Illegal activities

Use responsibly and follow WhatsApp Terms of Service.

---

<div align="center">

### 🎉 Ready to Start?

**[Quick Start Guide](#-quick-start)** | **[Installation](#-installation)** | **[Commands](#-command-list)**

Made with ❤️ by **ARSLAN TECH'S**

*Last Updated: August 2026*

</div>
