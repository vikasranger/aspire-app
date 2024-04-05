import {Variant} from "@mui/material/styles/createTypography";
import {Theme} from "../../base/theme/Theme.ts";
import {TypeColor} from "../../base/types/Types.ts";
import {getIconPath} from "../../base/types/Types.ts";
import {TypeIconSize} from "../../base/types/Types.ts";
import {TypeIcon} from "../../base/types/Types.ts";
import LayoutFlexRow from "../raw/LayoutFlexRow.tsx";
import RawImage from "../raw/RawImage.tsx";
import RawLabel from "../raw/RawLabel.tsx";

export default function ImageLabel(props: {
  value: string,
  color?: TypeColor,
  bgcolor?: string,
  tooltip?: string,
  variant?: Variant,
  bold?: boolean,
  icon?: TypeIcon,
  iconSize?: TypeIconSize,
  ml?: number,
  mr?: number,
  mt?: number,
  mb?: number
})
{
  const {
    value,
    color,
    bgcolor,
    tooltip,
    variant,
    bold,
    ml,
    mr,
    mt,
    mb,
    icon,
    iconSize
  } = props;

  return (
    <LayoutFlexRow
      bgColor={bgcolor}
    >
      {icon &&
        <RawImage
          src={getIconPath(icon)}
          alt={icon}
          size={iconSize}
          mr={Theme.gap.half}
        />}
      <RawLabel
        value={value}
        color={color}
        bgcolor={bgcolor}
        tooltip={tooltip}
        variant={variant}
        bold={bold}
        ml={ml}
        mr={mr}
        mt={mt}
        mb={mb}
      />
    </LayoutFlexRow>
  );
}
