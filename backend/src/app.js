const express = require('express');
const cors = require('cors');
const { errorHandler } = require('./middlewares/errorHandler');
const clientRouter = require('./modules/clients/client.router');

const app = express();
app.use(cors());
app.use(express.json());

app.get('/health', (_req, res) => res.json({ ok: true }));
app.use('/api/clients', clientRouter);

app.use(errorHandler);

module.exports = app;
