import {CircularProgress} from "@mui/material";
import {Fade} from "@mui/material";
import {getColor} from "../../base/theme/Theme.ts";

export default function RawFadeLoader()
{
  const durationLoader = 300;
  return (
    <Fade
      in={true}
      style={{
        transitionDelay: durationLoader + "ms"
      }}
      unmountOnExit
    >
      <CircularProgress sx={{color: getColor("bgDrawer")}} />
    </Fade>
  );
}
