import {Box} from "@mui/material";
import {Property} from "csstype";
import {px} from "../../base/theme/Theme.ts";
import {Theme} from "../../base/theme/Theme.ts";
import {getColor} from "../../base/theme/Theme.ts";
import {TypeColor} from "../../base/types/Types.ts";

export function RawShadowCard(props: {
  children: React.ReactNode,
  bgColor?: TypeColor,
  width?: Property.Width,
  height?: Property.Height,
  fullSize?: boolean
})
{
  const {
    children,
    bgColor,
    width,
    height,
    fullSize
  } = props;
  return (
    <Box
      sx={{
        width: fullSize ? "100%" : width,
        height: fullSize ? "100%" : height,
        bgcolor: getColor(bgColor ?? "white"),
        borderRadius: px(Theme.gap.half),
        overflow: "auto",
        flexGrow: 1,
        boxShadow: `0 0 10px 0 ${getColor("shadow")}`
      }}
    >
      {children}
    </Box>
  );
}
