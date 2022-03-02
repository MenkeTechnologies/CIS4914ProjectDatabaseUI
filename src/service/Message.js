import axios from "axios";
import { getApiUrl, MESSAGE } from "../util/Consts";

export const getMessages = async () =>
  (await axios.get(getApiUrl(MESSAGE))).data

export const createMessage = async (message, username) =>
  (await axios.post(getApiUrl(MESSAGE), {
    senderId: username,
    recipientId: message.recipientId,
    subject: message.subject,
    body: message.body,
    date: Date.now()
  })).data

