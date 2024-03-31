import {px} from "../../../base/theme/Theme.ts";
import {Theme} from "../../../base/theme/Theme.ts";
import {IListItem} from "../../../base/types/ListType.ts";
import LayoutFlexColumn from "../../raw/LayoutFlexColumn.tsx";
import LayoutFlexRow from "../../raw/LayoutFlexRow.tsx";
import ImageLabel from "../ImageLabel.tsx";
import BoxPS from "./BoxPS.tsx";
import ListItemAvatarPS from "./ListItemAvatarPS.tsx";

export default function ListItemPS(props: IListItem)
{
  const {
    primary,
    secondary,
    avatar,
    bottom
  } = props;
  return (
    <LayoutFlexColumn width={"100%"} border={`1px solid ${Theme.color.border}`} borderRadius={px(Theme.gap.qtr)}>
      <LayoutFlexRow
        width={"100%"}
        padding={`${px(Theme.gap.qtr)} ${px(Theme.gap.half)}`}
      >

        <ListItemAvatarPS
          avatar={avatar}
          alt={avatar.icon}
          size={"small"}
          mr={Theme.gap.half}
        />

        <BoxPS
          primary={primary}
          secondary={secondary}
        />

      </LayoutFlexRow>
      {bottom &&
        <ImageLabel
          value={bottom.text}
          variant={bottom.variant}
          icon={bottom.icon}
          iconSize={"small"}
        />}
    </LayoutFlexColumn>
  );
}
