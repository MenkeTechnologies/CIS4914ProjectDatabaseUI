import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";

export const DRAWER_OPEN = 'drawerOpen';
export const LEFT = 'left';
export const STATE = 'state';
export const SORT_BY = 'sortBy';
export const ACTIVE_TAB = 'activeTab';
export const TITLE = 'Senior Project App';
export const SEEKING = 'seeking';
export const OFFERING = 'offering';
export const POST_TYPE = "postType"
export const STUDENT = 'Student';
export const FACULTY = 'Faculty';
export const WHITE = "#FFF";
export const GRAY = "#CCC";
export const KEYDOWN = 'keydown';
export const TAB = 'Tab';
export const SHIFT = 'Shift';
export const DATE_POSTED = "Date_Posted";
export const AVAILABILITY = "Availability";
export const ADVISOR_READY = "Advisor_ready";
export const PROJECT_LOOKING = "Project_Looking";

export const Item = styled(Paper)(({theme}) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));
