import {Box} from "@mui/material";
import RawFadeLoader from "../raw/RawFadeLoader.tsx";

export default function FadeLoader()
{
  return (
    <Box
      width="100%"
      display="flex"
      justifyContent="center"
    >
      <RawFadeLoader />
    </Box>
  );
}
