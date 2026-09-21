import { app } from './app.js';
import './config/database.js';

const port = Number(process.env.PORT) || 8000;
const codespaceName = process.env.CODESPACE_NAME;
const apiBaseUrl = codespaceName
  ? `https://${codespaceName}-8000.app.github.dev`
  : `http://localhost:${port}`;

app.listen(port, () => {
  console.log(`OctoFit API listening on ${apiBaseUrl}`);
});