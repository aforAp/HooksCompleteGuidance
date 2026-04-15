import express from 'express';
import { promises as fs } from 'fs';

const app = express();

app.use(express.json());

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

app.post('/post', async (req, res) => {
  try {
    const data = req.body;


    await fs.writeFile(
      './data/userData.json',
      JSON.stringify(data, null, 2)
    );

    console.log("Saved:", data);

    res.status(201).json({ message: 'Data received!' });
  } catch (error) {
    console.error(error); // 👈 ADD THIS
    res.status(500).json({ message: 'Error saving data' });
  }
});

app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});