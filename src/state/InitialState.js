import {
  ACTIVE_TAB,
  ACTIVE_TAB_STORED,
  DRAWER_OPEN,
  EMAIL,
  LOGGED_IN,
  OFFERING_DATA,
  REGISTER,
  SEEKING_DATA,
  SORT_BY,
  USER_ID,
  USERNAME
} from "../util/Consts";
import { boolean } from "yup";

/**
 * @file initial global state
 */
const initialState = {
  [ACTIVE_TAB]: parseInt(localStorage.getItem(ACTIVE_TAB_STORED) || 0),
  [DRAWER_OPEN]: false,
  [LOGGED_IN]: sessionStorage.getItem(LOGGED_IN),
  [USERNAME]: sessionStorage.getItem(USERNAME) || "John Doe",
  [EMAIL]: sessionStorage.getItem(EMAIL) || "john.doe@gmail.com",
  [USER_ID]: sessionStorage.getItem(USER_ID) || '',
  [REGISTER]: false,
  [SORT_BY]: '',
  [OFFERING_DATA]: {
    _id: "",
    topic: "",
    preferredContact: "",
    summary: "",
    skillToAdd: "",
    skillsList: [],
    hasSkill: boolean,
    softwareToAdd: "",
    softwareList: [],
    advisor: "",
    memberNameToAdd: "",
    memberEmailToAdd: "",
    memberContactToAdd: "",
    memberList: [],
    maximumMembers: 6
  },
  [SEEKING_DATA]: {
    _id: "",
    authorType: "Student",
    title: "",
    preferredContact: "",
    summary: "",
    memberNameToAdd: "",
    memberEmailToAdd: "",
    memberContactToAdd: "",
    memberList: []
  }
};

export default initialState;
