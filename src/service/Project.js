import axios from "axios";

/**
 * query team members
 * @param projectId
 * @returns {Promise<any>}
 */
export const getTeamMembers = async (projectId) =>

  (await axios.post('/user', {
    firstName: 'Fred',
    lastName: 'Flintstone'
  })).data

