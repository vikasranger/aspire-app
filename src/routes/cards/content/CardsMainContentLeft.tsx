import {VisibilityRounded} from "@mui/icons-material";
import {VisibilityOffRounded} from "@mui/icons-material";
import {useState} from "react";
import {useAppDispatch} from "../../../base/hooks/Hooks.ts";
import {useAppSelector} from "../../../base/hooks/Hooks.ts";
import {Theme} from "../../../base/theme/Theme.ts";
import CardCarousel from "../../../components/composite/CardCarousel.tsx";
import DebitCard from "../../../components/composite/DebitCard.tsx";
import IconButtonList from "../../../components/composite/IconButtonList.tsx";
import LayoutFlexRow from "../../../components/raw/LayoutFlexRow.tsx";
import RawButton from "../../../components/raw/RawButton.tsx";
import RawGap from "../../../components/raw/RawGap.tsx";
import {IPropsRawIcon} from "../../../components/raw/RawIcon.tsx";
import RawStackSmall from "../../../components/raw/RawStackSmall.tsx";
import {setCardNumberVisible} from "../../../store/slices/SliceCard.ts";
import {selectCard} from "../../../store/slices/SliceCard.ts";
import {setCardFreeze} from "../../../store/slices/SliceCard.ts";

export default function CardsMainContentLeft()
{
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
      label: "Spend limit"
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

  if(!selectedCard) return null;
  return (
    <RawStackSmall>
      <LayoutFlexRow justifyContent={"flex-end"} fullWidth>
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
        <DebitCard card={selectedCard} />
      </CardCarousel>
      <RawGap size={"small"} />
      <IconButtonList
        iconList={iconList}
        bgColor={Theme.color.cardBg}
        onClick={handleClick}
      />
    </RawStackSmall>);
}
