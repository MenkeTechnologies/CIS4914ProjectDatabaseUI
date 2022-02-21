import axios from "axios";
import { getApiUrl } from "../util/Consts";

export const getPosts = () => {

  axios.post('/user', {
    firstName: 'Fred',
    lastName: 'Flintstone'
  })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
}

export const getSeekingPost = () => {

  axios.post('/user', {
    firstName: 'Fred',
    lastName: 'Flintstone'
  })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
}

export const getOfferingPost = () => {

  axios.post('/user', {
    firstName: 'Fred',
    lastName: 'Flintstone'
  })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
}

export const createSeekingPost = (uid) => {

  axios.post('/user', {
    firstName: 'Fred',
    lastName: 'Flintstone'
  })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
}

export const createOfferingPost = (uid) => {

  axios.post('/user', {
    firstName: 'Fred',
    lastName: 'Flintstone'
  })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
}
