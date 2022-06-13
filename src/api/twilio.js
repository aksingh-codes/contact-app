import axios from "axios";

const twilio = axios.create({
  baseURL: process.env.REACT_APP_TWILIO_SERVER_URL,
});

export default twilio;
