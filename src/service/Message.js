import axios from "axios";
import { getApiUrl, MESSAGE } from "../util/Consts";

export const getMessages = async () =>
  (await axios.get(getApiUrl(MESSAGE))).data

export const getMsgs = async () => await getMessages();

export const createMessage = async (message, userId) =>
  (await axios.post(getApiUrl(MESSAGE), {
    sender: userId,
    recipient: message.recipientId,
    subject: message.subject,
    body: message.body,
    date: Date.now()
  })).data

