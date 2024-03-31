import {ILineSecondary} from "../../../base/types/ListType.ts";
import LayoutFlexRow from "../../raw/LayoutFlexRow.tsx";
import RawLabel from "../../raw/RawLabel.tsx";

export default function LineSecondary(props: {
  secondary: ILineSecondary,
  onClickCaption?: () => void,
  onClickIcon?: () => void,
})
{
  const {
    secondary,
    onClickCaption
  } = props;

  return (
    <LayoutFlexRow
      width={"100%"}
      justifyContent={"space-between"}
    >
      <RawLabel
        value={secondary.text}
        color={secondary.color}
        variant={secondary.variant ?? "body2"}
      />
      <LayoutFlexRow>
        {secondary?.caption?.text &&
          <RawLabel
            value={secondary?.caption?.text}
            color={secondary.caption.color}
            variant={secondary.caption.variant ?? "caption"}
            onClick={onClickCaption}
          />}
      </LayoutFlexRow>
    </LayoutFlexRow>
  );
}
