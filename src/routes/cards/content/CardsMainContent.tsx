import "../../../style/main.css";
import TabList from "../../../components/composite/TabList.tsx";
import {ITab} from "../../../components/composite/TabList.tsx";
import {RawShadowCard} from "../../../components/raw/RawShadowCard.tsx";
import RawStack from "../../../components/raw/RawStack.tsx";
import {usePageContext} from "../../../context/pageContext.tsx";
import CardsMainContentLeft from "./CardsMainContentLeft.tsx";
import CardsMainColumnRight from "./CardsMainContentRight.tsx";

export function CardsMainContent()
{
  const tabList: ITab[] = [
    {
      id: "one",
      label: "My debit cards",
      content: (
        <DebitCardContent />
      )
    },
    {
      id: "two",
      label: "All company cards",
      content: (
        <DebitCardContent />
      )
    }
  ];

  return (
    <TabList tabList={tabList} />
  );
}

function DebitCardContent()
{
  const pageContext = usePageContext();
  const isSmall = pageContext.isSmallDesktop();

  return (
    <RawShadowCard>
      <RawStack
        direction={isSmall ? "column" : "row"}
      >
        <CardsMainContentLeft isSmall={isSmall} />
        <CardsMainColumnRight isSmall={isSmall} />
      </RawStack>
    </RawShadowCard>
  );
}

