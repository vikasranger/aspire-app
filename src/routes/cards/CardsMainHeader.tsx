import {AddCircleRounded} from "@mui/icons-material";
import {Checkbox} from "@mui/material";
import {useCallback} from "react";
import {useMemo} from "react";
import {useState} from "react";
import {FieldValues} from "react-hook-form";
import {useAppSelector} from "../../base/hooks/Hooks.ts";
import {useAppDispatch} from "../../base/hooks/Hooks.ts";
import {Theme} from "../../base/theme/Theme.ts";
import {px} from "../../base/theme/Theme.ts";
import {TypeColor} from "../../base/types/Types.ts";
import {ADD_CARD_DESCRIPTION} from "../../base/utils/constants.ts";
import {ADD_CARD_TITLE_MSG} from "../../base/utils/constants.ts";
import {getNewCardDetails} from "../../base/utils/Utils.ts";
import ColorBox from "../../components/composite/ColorBox.tsx";
import Form from "../../components/composite/form/Form.tsx";
import {IFormRef} from "../../components/composite/form/Form.tsx";
import HeaderAccordion from "../../components/composite/HeaderAccordion.tsx";
import LayoutFlexColumn from "../../components/raw/LayoutFlexColumn.tsx";
import LayoutFlexRow from "../../components/raw/LayoutFlexRow.tsx";
import RawBubbleButton from "../../components/raw/RawBubbleButton.tsx";
import RawButton from "../../components/raw/RawButton.tsx";
import RawChip from "../../components/raw/RawChip.tsx";
import RawDrawer from "../../components/raw/RawDrawer.tsx";
import RawGap from "../../components/raw/RawGap.tsx";
import RawLabel from "../../components/raw/RawLabel.tsx";
import {RawShadowCard} from "../../components/raw/RawShadowCard.tsx";
import {addCard} from "../../store/slices/SliceCard.ts";

export default function CardsMainHeader()
{
  const [open, setOpen] = useState(false);
  const cbRef = useMemo(() => ({} as IFormRef), []);
  const [submitEnable, setSubmitEnable] = useState(false);
  const [cardColor, setCardColor] = useState<TypeColor>("green");
  const selectedCard = useAppSelector((state) =>
  {
    return state.cards.cardList.find((card) => card.cardNumber === state.cards.selectedCard);
  });
  const dispatch = useAppDispatch();

  const onSubmit = (values: FieldValues) =>
  {
    console.log(values);
    const card = getNewCardDetails(values["name"], values["purpose"], values["limit"]);
    card.cardColor = cardColor;
    card.availableBalance = card.weeklySpendingLimit;
    dispatch(addCard(card));
    setOpen(false);
  };

  const onSubmitEnable = useCallback((enable: boolean): void =>
  {
    setSubmitEnable(enable);
  }, []);

  const gapStd = px(Theme.gap.std);
  console.log("cbRef", cbRef);

  return (
    <LayoutFlexColumn width={"100%"} alignItems={"flex-start"}>
      <RawLabel value={"Available balance"} variant={"subtitle2"} />
      <LayoutFlexRow width={"100%"} justifyContent={"space-between"}>
        <LayoutFlexRow>
          <RawChip
            label="$$"
            bgcolor={selectedCard?.cardColor ?? "success"}
            color={"white"}
          />
          <RawLabel
            value={selectedCard ? selectedCard.availableBalance.toString() : "0"}
            variant={"h5"}
            bold={true}
            ml={Theme.gap.std}
          />
        </LayoutFlexRow>
        <RawButton
          label={"New card"}
          icon={<AddCircleRounded fontSize={"small"} />}
          onClick={() => setOpen(true)}
          bgcolor={"textTertiary"}
        />
        <RawDrawer
          side={"right"}
          open={open}
          bgcolor="bgDrawer"
          onClose={() => setOpen(false)}
        >
          <LayoutFlexColumn flexGrow={1}>
            <LayoutFlexColumn
              width={"100%"}
              alignItems={"flex-start"}
              padding={`0 ${gapStd} ${gapStd} ${gapStd}`}
            >
              <RawLabel
                value={ADD_CARD_TITLE_MSG}
                variant={"h5"}
                bold={true}
                color={"white"}

              />
              <RawLabel
                value={ADD_CARD_DESCRIPTION}
                variant={"caption"}
                color={"white"}
                opacity={.8}
                mt={Theme.gap.std}

              />
            </LayoutFlexColumn>
            <LayoutFlexColumn
              width={"100%"}
              bgcolor={"white"}
              borderRadius={gapStd}
              padding={px(Theme.gap.xStd)}
              flexGrow={1}
            >
              <LayoutFlexColumn
                width={"100%"}
                justifyContent={"flex-start"}
                padding={gapStd}
                flexGrow={1}
              >
                <HeaderAccordion
                  label={"Details"}
                  bgColor={Theme.color.accordionBg}
                  isFixed={true}
                  defaultOpen={true}
                >
                  <Form
                    cbRef={cbRef}
                    onSubmit={onSubmit}
                    onSubmitEnable={onSubmitEnable}
                  />

                </HeaderAccordion>

                <ColorBox selectedColor={cardColor} onColorSelect={(color) => setCardColor(color)} />

                <RawGap size={"small"} />
                <RawShadowCard width={"100%"}>
                  <LayoutFlexRow justifyContent={"space-between"} padding={gapStd}>
                    <RawLabel value={"Notify me for all transactions"} />
                    <Checkbox defaultChecked />
                  </LayoutFlexRow>
                </RawShadowCard>
              </LayoutFlexColumn>

              <RawBubbleButton
                bgcolor={"success"}
                color={"white"}
                label={"Submit"}
                onClick={() => cbRef.remoteSubmit()}
                disabled={!submitEnable}
              />
              <RawGap size={"small"} />
            </LayoutFlexColumn>
          </LayoutFlexColumn>
        </RawDrawer>
      </LayoutFlexRow>
    </LayoutFlexColumn>
  );
}
