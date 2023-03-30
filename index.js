const { spawn } = require('child_process');
const port = process.env.PORT || 8000;

const server = spawn('waitress-serve', ['--port', port, 'main:app']);

server.stdout.on('data', data => {
  console.log(`stdout: ${data}`);
});

server.stderr.on('data', data => {
  console.error(`stderr: ${data}`);
});

server.on('close', code => {
  console.log(`Server exited with code ${code}`);
});
