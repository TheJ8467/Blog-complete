const { spawn } = require('child_process');
const path = require('path');
const port = process.env.PORT || 8000;
const pythonExecutable = 'python3'; // Change this to 'python3' if you're using Python 3.x

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
