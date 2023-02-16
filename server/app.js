const express = require("express")
const http = require("http");
const cors = require("cors");
const bodyParser = require("body-parser");
const fs = require("fs");
const { SpeechClient } = require("@google-cloud/speech");
const { Translate } = require("@google-cloud/translate").v2;
const axios = require('axios')
const { ZOOM_API_TOKEN } = require('./config');

const app = express();
const httpServer = http.createServer(app);
const speechClient = new SpeechClient();
const translate = new Translate()
const zoomMeeting = {
  meetingNumber: "meeting_number",
};
const zoom = axios.create({
  baseURL: "https://api.zoom.us/v2",
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${process.env.ZOOM_API_TOKEN}`,
  },
});

app.use(cors(), bodyParser.json());

// get formData
app.post("/zoominfo", (req, res) => {
  const { apiKey, apiSecret, meetingNumber, hostId } = req.body;
  console.log(apiKey);
  const updatedFormData = {
    apiKey: apiKey,
    apiSecret: apiSecret,
    meetingNumber: meetingNumber,
    hostId: hostId,
  };
  console.log(updatedFormData);
  res.status(200).json(updatedFormData);
});


// Get the recording file ID for the specified Zoom meeting
// zoom.get(`/meetings/${zoomMeeting.meetingId}/recordings?type=past`)

httpServer.listen(3000, () => {
  console.log(`App is running on port 3000 🌈`);
});
