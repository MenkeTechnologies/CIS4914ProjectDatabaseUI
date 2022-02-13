import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";

export const LEFT = 'left';
export const TITLE = 'Senior Project App';
export const SEEKING = 'seeking';
export const OFFERING = 'offering';
export const POST_TYPE = "postType"
export const STUDENT = 'Student';
export const FACULTY = 'Faculty';
export const WHITE = "#fff";
export const KEYDOWN = 'KEYDOWN';
export const TAB = 'Tab';
export const SHIFT = 'Shift';

export const Item = styled(Paper)(({theme}) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));
