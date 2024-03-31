import {Box} from "@mui/material";
import {Typography} from "@mui/material";
import {Variant} from "@mui/material/styles/createTypography";
import {getColor} from "../../base/theme/Theme.ts";
import {px} from "../../base/theme/Theme.ts";
import {TypeColor} from "../../base/types/Types.ts";
import RawTooltip from "./RawTooltip.tsx";

export default function RawLabel(props: {
  value: string,
  color?: TypeColor,
  bgcolor?: TypeColor,
  tooltip?: string,
  variant?: Variant,
  onClick?: () => void,
  bold?: boolean,
  ml?: number,
  mr?: number,
  mt?: number,
  mb?: number,
  center?: boolean,
  opacity?: number
})
{
  const {
    value,
    color,
    bgcolor,
    tooltip,
    variant,
    opacity,
    onClick,
    center,
    bold,
    ml,
    mr,
    mt,
    mb
  } = props;
  return (
    <RawTooltip title={tooltip} placement="top">
      <Box
        sx={center ? {
          display: "inline-flex",
          flexDirection: "column",
          textAlign: "center"
        } : {}}
        onClick={onClick}
      >
        <Typography
          variant={variant ?? "body1"}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            letterSpacing: "1px",
            opacity: opacity,
            color: getColor(color ?? "textPrimary"),
            bgcolor: bgcolor ? getColor(bgcolor) : undefined,
            fontWeight: bold ? "bold" : undefined,
            ml: px(ml),
            mr: px(mr),
            mt: px(mt),
            mb: px(mb)
          }}
        >
          {value}
        </Typography>
      </Box>

    </RawTooltip>
  );
}
