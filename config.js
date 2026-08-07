module.exports = {
    // Bot Configuration
    BOT_NAME: 'ARSLAN MD ULTRA',
    BOT_LOGO: 'https://files.catbox.moe/94rltt.jpg',
    BOT_NUMBER: '923046490245',
    PREFIX: '.',
    VERSION: '4.0.0',

    // Owner Configuration
    OWNER: ['923046490245@s.whatsapp.net'],
    OWNER_NAME: 'ARSLAN',

    // Settings
    MODE: 'public',
    AUTO_READ: false,
    AUTO_TYPING: false,
    AUTO_RECORDING: false,

    // Anti-Ban Settings
    ANTI_BAN: {
        enabled: true,
        delayMin: 2000,
        delayMax: 5000,
        maxMsgPerMin: 15,
        typing: true,
        cooldownMsg: '🛡️ *ANTI-BAN ACTIVE*\nZyada fast msg ki wajah se 1 min cooldown.'
    },

    // Call Settings
    ANTI_CALL: true,
    CALL_MSG: 'Calls allowed nahi hain bhai. Chat karo na! 😊',

    // Delete Settings
    ANTI_DELETE: true,

    // Busy Mode
    BUSY: false,
    BUSY_REASON: 'Abhi busy hoon, baad me reply karunga!'
};