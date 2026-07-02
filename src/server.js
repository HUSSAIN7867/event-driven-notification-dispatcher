require('dotenv').config();

const app = require('./app');
const { initSchema } = require('./db/database');

const PORT = process.env.PORT || 3000;

initSchema();

app.listen(PORT, () => {
  console.log(`Event-Driven Notification Dispatcher listening on port ${PORT}`);
});
