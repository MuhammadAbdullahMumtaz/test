const express = require('express');
const sql = require('mssql');
const cors = require('cors');

const app = express();
app.use(cors()); // Allow requests from your frontend

const config = {
  user: 'sa',
  password: 'MumTaz03006664122!@#$%^&*(',
  server: '124.109.62.138\\sql2014', 
  port: 1433,
  database: 'FiveStarOnLine23-24-1-7-2024',
  options: {
    encrypt: false,
    trustServerCertificate: true
  }
};

// API endpoint to fetch data
app.get('/api/contracts', async (req, res) => {
  try {
    await sql.connect(config);
    const result = await sql.query`SELECT TOP 2 * FROM Yarn_Contract`;
    res.json(result.recordset);
  } catch (err) {
    console.error(err);
    res.status(500).send('Database error');
  }
});

app.listen(3000, () => console.log('API running on port 3000'));
