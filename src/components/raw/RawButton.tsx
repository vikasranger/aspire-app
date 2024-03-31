import {Button} from "@mui/material";
import {ButtonOwnProps} from "@mui/material/Button/Button";
import {Theme} from "../../base/theme/Theme.ts";
import {px} from "../../base/theme/Theme.ts";
import {getColor} from "../../base/theme/Theme.ts";
import {TypeColor} from "../../base/types/Types.ts";

export default function RawButton(props: {
  label: string,
  variant?: ButtonOwnProps["variant"],
  bgcolor?: TypeColor,
  icon?: React.ReactNode,
  color?: TypeColor,
  size?: "small" | "medium" | "large",
  onClick?: () => void
})
{
  const {
    label,
    variant,
    bgcolor,
    size,
    color,
    onClick,
    icon
  } = props;
  return (
    <Button
      sx={{
        bgcolor: bgcolor ? getColor(bgcolor) : undefined,
        color: color ? getColor(color) : undefined,
        fontSize: px(Theme.font.size.small),
        textTransform: "none",
        fontWeight: "bold",
        pointerEvents: onClick ? "auto" : "none"
      }}
      onClick={onClick}
      variant={variant ?? "contained"}
      size={size ?? "small"}
      startIcon={icon}
    >
      {label}
    </Button>
  );

}
