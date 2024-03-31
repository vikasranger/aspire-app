import {Box} from "@mui/material";
import {px} from "../../base/theme/Theme.ts";
import {Theme} from "../../base/theme/Theme.ts";
import {getColor} from "../../base/theme/Theme.ts";
import {TypeColor} from "../../base/types/Types.ts";

export default function RawChip(props: {
  label: string,
  bgcolor?: TypeColor,
  color?: TypeColor,
})
{
  const {
    label,
    bgcolor,
    color
  } = props;
  return (
    <Box
      sx={{
        bgcolor: bgcolor ? getColor(bgcolor) : undefined,
        color: color ? getColor(color) : undefined,
        fontSize: px(Theme.font.size.small),
        borderRadius: px(Theme.gap.qtr),
        padding: `${px(Theme.gap.qtr)} ${px(Theme.gap.std)}`,
        fontWeight: "bold"
      }}
    >
      {label}
    </Box>
  );
}
