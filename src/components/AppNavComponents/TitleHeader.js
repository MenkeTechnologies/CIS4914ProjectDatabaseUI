import { TITLE } from "../../util/Consts"
import { Grid, Box, Typography } from "@mui/material"

const TitleHeader = ({usingDesktopSize}) => {
  return <Grid item xs={4}>
    <Grid container justifyContent={usingDesktopSize ? "flex-start" : "center"} flexWrap={"nowrap"}>
      <Grid item>
        <Box component="img"
             sx={{
               height: 35,
               width: 35,
               marginRight: "15px"
             }}
             src={require("../../img/logo-sar-try.png")}>
        </Box>
      </Grid>
      <Grid item>
        <Typography variant="h6" color="inherit" noWrap>
          {TITLE}
        </Typography>
      </Grid>
    </Grid>
  </Grid>
}

export default TitleHeader;
