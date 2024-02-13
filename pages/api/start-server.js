// pages/api/start-server.js
import { exec } from 'child_process';

export default async function handler(req, res) {
  try {
    exec('node server.js', (error, stdout, stderr) => {
      if (error) {
        console.error(`Error starting server: ${error.message}`);
        res.status(500).end();
        return;
      }
      if (stderr) {
        console.error(`stderr: ${stderr}`);
      }
      console.log(`stdout: ${stdout}`);
      res.status(200).end();
    });
  } catch (error) {
    console.error('Error starting server:', error);
    res.status(500).end();
  }
}
