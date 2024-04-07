import {List} from "@mui/material";
import {useAppSelector} from "../../../base/hooks/Hooks.ts";
import {Theme} from "../../../base/theme/Theme.ts";
import {px} from "../../../base/theme/Theme.ts";
import {getListItems} from "../../../base/utils/DummyData.ts";
import HeaderAccordion from "../../../components/composite/HeaderAccordion.tsx";
import ListItemPS from "../../../components/composite/listItem/ListItemPS.tsx";
import RawGap from "../../../components/raw/RawGap.tsx";
import RawStackSmall from "../../../components/raw/RawStackSmall.tsx";

export default function CardsMainColumnRight()
{
  const selectedCard = useAppSelector((state) =>
  {
    return state.cards.cardList.find((card) => card.cardNumber === state.cards.selectedCard);
  });

  if(!selectedCard) return null;

  const gapXStd = px(Theme.gap.xStd);
  return (
    <RawStackSmall pt={gapXStd}>
      <HeaderAccordion
        icon={"Group"}
        label={"Card details"}
        bgColor={Theme.color.accordionBg}
        isFixed={true}
      />
      <RawGap size={"small"} />
      <HeaderAccordion
        icon={"Group"}
        label={"Recent transactions"}
        bgColor={Theme.color.accordionBg}
      >
        <List
          sx={{
            padding: px(Theme.gap.half),
            overflow: "auto"
          }}
        >
          {getListItems().map((item) =>
          {
            return (
              <ListItemPS
                key={item.primary.text}
                primary={item.primary}
                secondary={item.secondary}
                avatar={item.avatar}
                bottom={item.bottom}
              />
            );
          })}
        </List>
      </HeaderAccordion>
    </RawStackSmall>);
}
