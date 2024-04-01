import {Checkbox} from "@mui/material";
import {useState} from "react";
import {useCallback} from "react";
import {useMemo} from "react";
import {FieldValues} from "react-hook-form";
import {useAppDispatch} from "../../base/hooks/Hooks.ts";
import {px} from "../../base/theme/Theme.ts";
import {Theme} from "../../base/theme/Theme.ts";
import {TypeColor} from "../../base/types/Types.ts";
import {ADD_CARD_DESCRIPTION} from "../../base/utils/constants.ts";
import {ADD_CARD_TITLE_MSG} from "../../base/utils/constants.ts";
import {getNewCardDetails} from "../../base/utils/Utils.ts";
import ColorBox from "../../components/composite/ColorBox.tsx";
import {IFormRef} from "../../components/composite/form/Form.tsx";
import AddCardForm from "../../components/composite/form/Form.tsx";
import HeaderAccordion from "../../components/composite/HeaderAccordion.tsx";
import LayoutFlexColumn from "../../components/raw/LayoutFlexColumn.tsx";
import LayoutFlexRow from "../../components/raw/LayoutFlexRow.tsx";
import RawBubbleButton from "../../components/raw/RawBubbleButton.tsx";
import RawDrawer from "../../components/raw/RawDrawer.tsx";
import RawGap from "../../components/raw/RawGap.tsx";
import RawLabel from "../../components/raw/RawLabel.tsx";
import {RawShadowCard} from "../../components/raw/RawShadowCard.tsx";
import {addCard} from "../../store/slices/SliceCard.ts";

export default function AddCardAside(props: {
  open: boolean,
  onClose: () => void
})
{
  const cbRef = useMemo(() => ({} as IFormRef), []);
  const [submitEnable, setSubmitEnable] = useState(false);
  const [cardColor, setCardColor] = useState<TypeColor>("green");
  const gapStd = px(Theme.gap.std);
  const dispatch = useAppDispatch();
  const {
    open,
    onClose
  } = props;

  const onSubmit = (values: FieldValues) =>
  {
    const card = getNewCardDetails(values["name"], values["purpose"], values["limit"]);
    card.cardColor = cardColor;
    card.availableBalance = card.weeklySpendingLimit;
    dispatch(addCard(card));
    onClose();
  };

  const onSubmitEnable = useCallback((enable: boolean): void =>
  {
    setSubmitEnable(enable);
  }, []);
  return (
    <RawDrawer
      side={"right"}
      open={open}
      bgcolor="bgDrawer"
      onClose={onClose}
    >
      <LayoutFlexColumn flexGrow={1} width={"100%"}>
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
              <AddCardForm
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
  )
    ;
}
