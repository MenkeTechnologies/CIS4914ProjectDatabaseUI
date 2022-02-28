import axios from "axios";
import { getApiUrl, MESSAGE } from "../util/Consts";

export const getMessages = () => {

  axios.get(getApiUrl(MESSAGE))
    .then(res => {
      console.log(res);
    })
    .catch(err => {
      console.log(err);
    });
}

export const createMessage = (message) => {

  axios.post(getApiUrl(MESSAGE), {
    sender: 'John Doe', // TODO get username from state
    recepient: message.recepient,
    subject: message.subject,
    body: message.body,
    date: Date.now()
  })
    .then(res => {
      console.log(res);
    })
    .catch(err => {
      console.log(err);
    });
}

