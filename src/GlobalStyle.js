import { createStyles, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) =>
  createStyles({
    appBar: {
      position: 'relative',
      zIndex: theme.zIndex.drawer + 1
    }
  })
);

const GlobalStyles = () => {
  useStyles();
  return null;
};

export default GlobalStyles;
