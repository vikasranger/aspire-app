import {VisibilityOffRounded} from "@mui/icons-material";
import {VisibilityRounded} from "@mui/icons-material";
import {List} from "@mui/material";
import {Stack} from "@mui/material";
import {useState} from "react";
import {useAppDispatch} from "../../base/hooks/Hooks.ts";
import {useAppSelector} from "../../base/hooks/Hooks.ts";
import {Theme} from "../../base/theme/Theme.ts";
import {px} from "../../base/theme/Theme.ts";
import {minWidth} from "../../base/utils/constants.ts";
import {getListItems} from "../../base/utils/DummyData.ts";
import CardCarousel from "../../components/composite/CardCarousel.tsx";
import DebitCard from "../../components/composite/DebitCard.tsx";
import HeaderAccordion from "../../components/composite/HeaderAccordion.tsx";
import IconButtonList from "../../components/composite/IconButtonList.tsx";
import ListItemPS from "../../components/composite/listItem/ListItemPS.tsx";
import TabList from "../../components/composite/TabList.tsx";
import {ITab} from "../../components/composite/TabList.tsx";
import LayoutFlexColumn from "../../components/raw/LayoutFlexColumn.tsx";
import LayoutFlexRow from "../../components/raw/LayoutFlexRow.tsx";
import RawButton from "../../components/raw/RawButton.tsx";
import RawGap from "../../components/raw/RawGap.tsx";
import {IPropsRawIcon} from "../../components/raw/RawIcon.tsx";
import {RawShadowCard} from "../../components/raw/RawShadowCard.tsx";
import {usePageCtx} from "../../ctx/CtxPage.tsx";
import {setCardFreeze} from "../../store/slices/SliceCard.ts";
import {setCardNumberVisible} from "../../store/slices/SliceCard.ts";
import {selectCard} from "../../store/slices/SliceCard.ts";

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
  const pageCtx = usePageCtx();
  const isMobile = pageCtx.isMobile();
  const selectedCard = useAppSelector((state) =>
  {
    return state.cards.cardList.find((card) => card.cardNumber === state.cards.selectedCard);
  });
  const cards = useAppSelector((state) => state.cards.cardList);
  const [activeStep, setActiveStep] = useState(() =>
  {
    if(selectedCard)
    {
      return cards.findIndex((card) => card.cardNumber === selectedCard.cardNumber);
    }
    return 0;
  });

  const dispatch = useAppDispatch();

  const iconList: IPropsRawIcon[] = [
    {
      id: "freeze",
      type: "Freeze",
      label: selectedCard?.cardFreeze ? "UnFreeze card" : "Freeze card"
    },
    {
      id: "limit",
      type: "Limit",
      label: "Set spend limit"
    },
    {
      id: "gpay",
      type: "GPay",
      label: "Add to GPay"
    },
    {
      id: "restart",
      type: "Restart",
      label: "Replace card"
    },
    {
      id: "delete",
      type: "Delete",
      label: "Cancel card"
    }
  ];
  const handleClick = (id: string) =>
  {
    if(id === "freeze" && selectedCard)
    {
      dispatch(setCardFreeze({
        cardNumber: selectedCard.cardNumber,
        freeze: !selectedCard.cardFreeze
      }));
    }
  };

  const handleSelectCard = (index: number) =>
  {
    setActiveStep(index);
    const card = cards[index];
    dispatch(selectCard(card.cardNumber));
  };

  const gapXstd = px(Theme.gap.xStd);

  const handleShowCardNumber = () =>
  {
    if(selectedCard)
    {
      dispatch(setCardNumberVisible({
        cardNumber: selectedCard.cardNumber,
        visible: !selectedCard.cardNumberVisible
      }));
    }
  };

  if(!selectedCard)
  {
    return (
      <RawShadowCard width={"100%"} height={"100%"}>
        <p>"Nothing"</p>
      </RawShadowCard>
    );
  }

  return (
    <RawShadowCard width={"100%"} height={"100%"}>
      <Stack
        spacing={gapXstd}
        padding={gapXstd}
        direction={isMobile ? "column" : "row"}
      >
        <LayoutFlexColumn width={"45%"} justifyContent={"flex-start"} minWidth={minWidth}>
          <LayoutFlexRow justifyContent={"flex-end"} width={"100%"}>
            <RawButton
              label={"Show card number"}
              color={selectedCard.cardColor}
              variant={"text"}
              onClick={() => handleShowCardNumber()}
              icon={selectedCard?.cardNumberVisible ? <VisibilityOffRounded /> : <VisibilityRounded />}
            />
          </LayoutFlexRow>

          <CardCarousel
            activeStep={activeStep}
            setActiveStep={handleSelectCard}
            totalSteps={cards.length}
            width={"100%"}
          >
            <DebitCard
              key={selectedCard.cardNumber}
              name={selectedCard.nameOnCard}
              cardNumber={selectedCard.cardNumber}
              cardNumberVisible={selectedCard.cardNumberVisible}
              cardValidThru={selectedCard.cardValidThru}
              cardCVV={selectedCard.cardCVV}
              bgcolor={selectedCard.cardColor}
              freeze={selectedCard.cardFreeze}
            />
          </CardCarousel>
          <IconButtonList
            iconList={iconList}
            bgcolor={Theme.color.cardBg}
            onClick={handleClick}
          />
        </LayoutFlexColumn>
        <LayoutFlexColumn width={"55%"} justifyContent={"flex-start"} minWidth={minWidth} padding={`${gapXstd} 0 0 0`}>
          <HeaderAccordion
            icon={"Group"}
            label={"Card details"}
            bgColor={Theme.color.accordionBg}
          >
            <LayoutFlexColumn width={"100%"} alignItems={"flex-start"} padding={gapXstd}>
              <p>Currency : {selectedCard.currencyUnits}</p>
              <p>Limit : {selectedCard.weeklySpendingLimit}</p>
              <p>LimitExhausted : {selectedCard.weeklySpendingLimitExhausted ? "Yes" : "No"}</p>
            </LayoutFlexColumn>

          </HeaderAccordion>
          <RawGap size={"small"} />
          <HeaderAccordion
            icon={"Group"}
            label={"Recent transactions"}
            bgColor={Theme.color.accordionBg}
          >
            <List
              sx={{
                padding: px(Theme.gap.half),
                height: "300px",
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
        </LayoutFlexColumn>
      </Stack>
    </RawShadowCard>
  );
}

