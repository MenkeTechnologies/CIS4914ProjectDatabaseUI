import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import React from "react";

const TabPanel = ({children, value, index, ...other}) =>
  <div
    role="tabpanel"
    hidden={value !== index}
    id={`simple-tabpanel-${index}`}
    aria-labelledby={`simple-tab-${index}`}
    {...other}
  >
    {value === index && <Box sx={{p: 3}}>
      <Typography>{children}</Typography>
    </Box>
    }
  </div>


export default TabPanel;
