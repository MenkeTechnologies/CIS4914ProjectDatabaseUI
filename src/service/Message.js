import axios from "axios";
import { getApiUrl, MESSAGE } from "../util/Consts";

export const getMessages = () =>
  axios.get(getApiUrl(MESSAGE))
    .then(res => {
      return res.data;
    })
    .catch(err => {
      console.error(err);
    })

export const createMessage = (message, username) =>
  axios.post(getApiUrl(MESSAGE), {
    senderId: username,
    recipientId: message.recipientId,
    subject: message.subject,
    body: message.body,
    date: Date.now()
  })
    .then(res => {
      return res.data;
    })
    .catch(err => {
      console.error(err);
    })

