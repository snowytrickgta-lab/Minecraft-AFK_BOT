const mineflayer = require('mineflayer');

const botOptions = {
  host: 'ElPuebleteMono.aternos.me', 
  port: 24696,                      
  username: 'El_Primas777',         
  // Al ser un servidor de Aternos (No-Premium), no necesita parámetro de auth
};

let bot;

function startBot() {
  console.log('Intentando conectar a ElPuebleteMono.aternos.me...');
  bot = mineflayer.createBot(botOptions);

  bot.on('spawn', () => {
    console.log('¡ÉXITO TOTAL! El_Primas777 ha entrado al servidor.');
  });

  bot.on('error', (err) => {
    console.log('--- ERROR DETECTADO ---');
    console.log('Detalle del problema:', err.message);
    console.log('-----------------------');
  });

  bot.on('kicked', (reason) => {
    console.log('El bot fue expulsado. Razón:', reason);
  });

  // Si el servidor de Aternos se apaga o reinicia, el bot esperará para reintentar
  bot.on('end', () => {
    console.log('Conexión finalizada. Reintentando conectar en 30 segundos...');
    setTimeout(startBot, 30000);
  });
}

startBot();
