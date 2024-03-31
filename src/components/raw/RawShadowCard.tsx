import {Box} from "@mui/material";
import {Property} from "csstype";
import {px} from "../../base/theme/Theme.ts";
import {Theme} from "../../base/theme/Theme.ts";
import {getColor} from "../../base/theme/Theme.ts";
import {TypeColor} from "../../base/types/Types.ts";

export function RawShadowCard(props: {
  children: React.ReactNode,
  bgcolor?: TypeColor,
  width?: Property.Width,
  height?: Property.Height,
})
{
  const {
    children,
    bgcolor,
    width,
    height
  } = props;
  return (
    <Box
      sx={{
        width: width,
        height: height,
        bgcolor: getColor(bgcolor ?? "white"),
        borderRadius: px(Theme.gap.half),
        boxShadow: `0 0 10px 0 ${getColor("shadow")}`
      }}
    >
      {children}
    </Box>
  );
}
