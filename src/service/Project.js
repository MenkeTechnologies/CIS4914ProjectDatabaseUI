import axios from "axios";

export const getTeamMembers = async (projectId) =>

  (await axios.post('/user', {
    firstName: 'Fred',
    lastName: 'Flintstone'
  })).data

