const HOST = '127.0.0.1';
const PORT = '3000'

import express from 'express'
import http from "http"
import cors from "cors"
import bodyParser from "body-parser"

const app = express()
const httpServer = http.createServer(app)

app.use(cors(), bodyParser.json())
await new Promise((resolve) => httpServer.listen({ port: PORT }, resolve))
console.log(`APP IS RUNING ON PORT ${PORT} 🌈`);