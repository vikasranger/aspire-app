import {Theme} from "../../base/theme/Theme.ts";
import {px} from "../../base/theme/Theme.ts";
import {TypeIcon} from "../../base/types/Types.ts";
import LayoutFlexRow from "../raw/LayoutFlexRow.tsx";
import RawIcon from "../raw/RawIcon.tsx";
import RawLabel from "../raw/RawLabel.tsx";

export interface IActionButton
{
  id: string,
  label: string,
  icon: TypeIcon,
  isActive?: boolean
}

export default function ActionButton(props: {
  onClick: () => void,
  label: string,
  icon: TypeIcon,
  isActive?: boolean
})
{
  const {
    label,
    icon,
    onClick,
    isActive
  } = props;
  const gapHalf = px(Theme.gap.half);
  return (
    <LayoutFlexRow
      onClick={onClick}
      padding={`0 ${gapHalf} 0 0`}
      borderRadius={gapHalf}
      hoverbgcolor={"#0e3d65"}
    >
      <RawIcon
        id={icon}
        icon={icon}
        size={"small"}
      />
      <RawLabel
        value={label}
        color={isActive ? "success" : "white"}
        variant={"subtitle2"}
        bold={true}
      />
    </LayoutFlexRow>
  );
}
