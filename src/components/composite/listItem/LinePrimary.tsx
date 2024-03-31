import {px} from "../../../base/theme/Theme.ts";
import {Theme} from "../../../base/theme/Theme.ts";
import {ILinePrimary} from "../../../base/types/ListType.ts";
import LayoutFlexRow from "../../raw/LayoutFlexRow.tsx";
import RawIcon from "../../raw/RawIcon.tsx";
import RawLabel from "../../raw/RawLabel.tsx";

export default function LinePrimary(props: {
  primary: ILinePrimary,
  onClickCaption?: () => void,
  onClickIcon?: () => void,
})
{
  const {
    primary,
    onClickCaption,
    onClickIcon
  } = props;

  const gapQtr = px(Theme.gap.qtr);
  const gapHalf = px(Theme.gap.half);
  return (
    <LayoutFlexRow width={"100%"} justifyContent={"space-between"}>
      <RawLabel
        value={primary.text}
        color={primary.color}
        variant={primary.variant ?? "body2"}
      />
      <LayoutFlexRow>
        {primary?.caption?.text &&
          <RawLabel
            value={primary?.caption?.text}
            color={primary.caption.color}
            bold={primary.caption.bold}
            variant={primary.caption.variant ?? "caption"}
            onClick={onClickCaption}
          />}
        {primary.icon &&
          <RawIcon
            id={primary.icon}
            icon={primary.icon}
            padding={gapQtr}
            margin={`0 0 0 ${gapHalf}`}
            size={"smallest"}
            onClick={() => onClickIcon && onClickIcon()}
          />
        }
      </LayoutFlexRow>
    </LayoutFlexRow>
  );
}
