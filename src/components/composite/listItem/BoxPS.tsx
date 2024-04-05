import {ILinePrimary} from "../../../base/types/ListType.ts";
import {ILineSecondary} from "../../../base/types/ListType.ts";
import LayoutFlexColumn from "../../raw/LayoutFlexColumn.tsx";
import LinePrimary from "./LinePrimary.tsx";
import LineSecondary from "./LineSeconday.tsx";

export default function BoxPS(props: {
  primary: ILinePrimary,
  secondary: ILineSecondary,

})
{
  const {
    primary,
    secondary
  } = props;
  return (
    <LayoutFlexColumn flexGrow={1}>
      <LinePrimary primary={primary} />
      <LineSecondary secondary={secondary} />
    </LayoutFlexColumn>
  );
}
