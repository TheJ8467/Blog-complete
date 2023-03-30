const express = require('express')
const { spawn } = require('child_process')

const app = express()
const PORT = process.env.PORT || 8000

app.get('/', (req, res) => {
  const python = spawn('python', ['app.py'])

  python.stdout.on('data', (data) => {
    console.log(`stdout: ${data}`)
    res.write(data)
  })

  python.stderr.on('data', (data) => {
    console.error(`stderr: ${data}`)
  })

  python.on('close', (code) => {
    console.log(`child process exited with code ${code}`)
    res.end()
  })
})

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
