const { spawn } = require('child_process');
const path = require('path');
const port = process.env.PORT || 8000;
const pythonExecutable = '/usr/bin/python3';

const server = spawn(pythonExecutable, [path.join(__dirname, 'main.py')], {
  env: {
    ...process.env,
    APP_PORT: port,
  },
});

server.stdout.on('data', (data) => {
  console.log(`stdout: ${data}`);
});

server.stderr.on('data', (data) => {
  console.error(`stderr: ${data}`);
});

server.on('close', (code) => {
  console.log(`Server exited with code ${code}`);
});
