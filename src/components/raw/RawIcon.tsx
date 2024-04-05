import {IconButton} from "@mui/material";
import {Variant} from "@mui/material/styles/createTypography";
import {Property} from "csstype";
import {getIconPath} from "../../base/types/Types.ts";
import {TypeIconSize} from "../../base/types/Types.ts";
import {TypeIcon} from "../../base/types/Types.ts";
import LayoutFlexColumn from "./LayoutFlexColumn.tsx";
import RawImage from "./RawImage.tsx";
import RawLabel from "./RawLabel.tsx";

export interface IPropsRawIcon
{
  id: string,
  type: TypeIcon,
  label?: string,
  size?: TypeIconSize,
}

export default function RawIcon(props: {
  id: string,
  icon: TypeIcon,
  label?: string,
  size?: TypeIconSize,
  labelVariant?: Variant,
  padding?: Property.Padding,
  margin?: Property.Margin,
  onClick?: (id: string) => void
})
{
  const {
    id,
    icon,
    size,
    label,
    padding,
    margin,
    labelVariant,
    onClick
  } = props;
  const path = getIconPath(icon);

  return (
    <LayoutFlexColumn flexShrink={1}>
      <IconButton
        onClick={() => onClick && onClick(id)}
        disableRipple={!onClick}
        sx={{
          padding: padding,
          margin: margin
        }}
      >
        <RawImage
          src={path}
          alt={icon}
          size={size}
        />
      </IconButton>

      {label &&
        <RawLabel
          value={label}
          variant={labelVariant ?? "caption"}
          center
        />}
    </LayoutFlexColumn>
  );
}
