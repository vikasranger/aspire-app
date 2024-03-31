import {Button} from "@mui/material";
import {ButtonOwnProps} from "@mui/material/Button/Button";
import {Theme} from "../../base/theme/Theme.ts";
import {px} from "../../base/theme/Theme.ts";
import {getColor} from "../../base/theme/Theme.ts";
import {TypeColor} from "../../base/types/Types.ts";

export default function RawBubbleButton(props: {
  label: string,
  variant?: ButtonOwnProps["variant"],
  bgcolor?: TypeColor,
  color?: TypeColor,
  onClick: () => void,
  disabled?: boolean
})
{
  const {
    label,
    variant,
    bgcolor,
    color,
    disabled,
    onClick
  } = props;
  return (
    <Button
      sx={{
        bgcolor: bgcolor ? getColor(bgcolor) : undefined,
        color: color ? getColor(color) : undefined,
        fontSize: px(Theme.font.size.medium),
        textTransform: "none",
        borderRadius: "16px",
        fontWeight: "bold",
        ":hover": {
          backgroundColor: bgcolor ? getColor(bgcolor) : undefined,
          opacity: 0.9
        }
      }}
      color={"success"}
      onClick={onClick}
      variant={variant ?? "contained"}
      size={"large"}
      disabled={disabled}
    >
      {label}
    </Button>
  );

}
