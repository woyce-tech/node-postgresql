const express = require('express');

const pgsqlRouter = express.Router();

const { apiResponse } = require('../../utils/common');
const { addStudent } = require('./student');

pgsqlRouter.get('/', (req, res) => res.status(200).json({ health: 'ok' }));

pgsqlRouter.post(
  'addStudent',
  async (req, res) => apiResponse(await addStudent(req.body), res),
);

module.exports = pgsqlRouter;
