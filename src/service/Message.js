import axios from "axios";
import { getApiUrl, MESSAGE } from "../util/Consts";

export const getMessages = async () =>
  (await axios.get(getApiUrl(MESSAGE))).data

export const getMsgs = async () => await getMessages();

/**
 * create message
 * @param message
 * @param userId
 * @returns {Promise<AxiosResponse<any>>}
 */
export const createMessage = async (message, userId) =>
  (await axios.post(getApiUrl(MESSAGE), {
    sender: userId,
    recipient: message.recipientId,
    subject: message.subject,
    body: message.body,
    date: Date.now()
  }))

