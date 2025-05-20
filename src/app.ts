import express, { Request, Response } from 'express';
import { RESPONSES, SYSTEMS } from './constants';
import { generateHTML } from './utils';

const app = express();
const port = process.env.PORT || 3000;

let pickedSystem: (typeof SYSTEMS)[number];

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/status', (req: Request, res: Response) => {
  pickedSystem = SYSTEMS[Math.floor(Math.random() * SYSTEMS.length)];

  res.json({ damaged_system: pickedSystem });
});

app.get('/repair-bay', (req: Request, res: Response) => {
  const html = generateHTML(RESPONSES[pickedSystem]);
  res.send(html);
});

app.post('/teapot', (req: Request, res: Response) => {
  res.status(418).send();
});

// Start server
app.listen(Number(port), '0.0.0.0', () => {
  console.log(`Server is running on port ${port}`);
});
