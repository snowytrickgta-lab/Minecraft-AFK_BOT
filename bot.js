const mineflayer = require('mineflayer');

// Configuración de la conexión del bot
const bot = mineflayer.createBot({
  host: 'ElPuebleteMono.aternos.me', // <-- REEMPLAZA ESTO POR LA IP DE TU SERVIDOR DE MINECRAFT
  port: 24696,               // Puerto por defecto (cámbialo si tu server usa otro)
  username: 'El_Primas777',   // El nombre que llevará el bot dentro del juego
  // version: '1.20.1'       // Opcional: Descomenta si necesitas forzar una versión
});

// Registrar eventos en la consola para saber qué pasa
bot.on('spawn', () => {
  console.log('¡Éxito! El NPC se ha conectado al servidor de Minecraft.');
});

bot.on('error', (err) => {
  console.error('Error de conexión:', err);
});

bot.on('kicked', (reason) => {
  console.log('El bot fue expulsado del servidor debido a:', reason);
});
