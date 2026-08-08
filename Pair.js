import express from 'express';
import { default as makeWASocket, useMultiFileAuthState } from '@whiskeysockets/baileys';
import pino from 'pino';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));

let tempCode = null;

// 1. WEB PAGE
app.get('/', (req, res) => {
    res.send(`
    <!DOCTYPE html>
    <html>
    <head>
      <title>ARSLAN MD ULTRA - PAIR</title>
      <style>
        body{background:#0a0a0a;color:#00ff88;text-align:center;padding:40px;font-family:'Courier New',monospace}
        .box{border:2px solid #00ff88;padding:30px;border-radius:15px;display:inline-block;background:#111;max-width:500px}
        input{padding:12px;width:250px;background:#000;color:#0f0;border:1px solid #0f0;border-radius:8px;font-size:18px}
        button{padding:12px 20px;background:#0f0;color:#000;border:none;border-radius:8px;font-weight:bold;cursor:pointer;margin-top:10px}
        .code{font-size:35px;color:#fff;background:#000;padding:15px;border-radius:10px;letter-spacing:5px;margin:20px 0}
      </style>
    </head>
    <body>
      <div class="box">
        <h1>ARSLAN MD ULTRA 🔥</h1>
        <form method="POST" action="/code">
          <p>Number +92 ke sath likho</p>
          <input type="text" name="number" placeholder="923001234567" required>
          <br><button type="submit">GET PAIRING CODE</button>
        </form>
        ${tempCode ? `<p>Apka Pairing Code:</p><div class="code">${tempCode}</div><p style="color:yellow">20 sec me use karo</p>` : ''}
      </div>
    </body>
    </html>
    `)
});

// 2. CODE GENERATE ROUTE - FIXED
app.post('/code', async (req, res) => {
    const number = req.body.number.replace(/[^0-9]/g, '');
    if(!number) return res.redirect('/');
    
    try {
        // Sirf code ke liye temporary socket
        const { state } = await useMultiFileAuthState('session');
        const tempSock = makeWASocket({
            auth: state,
            logger: pino({ level: 'silent' }),
            browser: ['ARSLAN MD ULTRA', 'Chrome', '1.0.0']
        });

        tempCode = await tempSock.requestPairingCode(number);
        
        // 20 sec baad code hide
        setTimeout(() => { tempCode = null }, 20000);
        
        // socket band
        await tempSock.ws.close();
        
        return res.redirect('/');

    } catch(e) {
        tempCode = null;
        return res.redirect('/');
    }
});

app.listen(PORT, () => {
    console.log(`Pair Server on ${PORT}`);
});
