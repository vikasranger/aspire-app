import {AddCircleRounded} from "@mui/icons-material";
import {useState} from "react";
import {useAppSelector} from "../../../base/hooks/Hooks.ts";
import {Theme} from "../../../base/theme/Theme.ts";
import LayoutFlexColumn from "../../../components/raw/LayoutFlexColumn.tsx";
import LayoutFlexRow from "../../../components/raw/LayoutFlexRow.tsx";
import RawButton from "../../../components/raw/RawButton.tsx";
import RawChip from "../../../components/raw/RawChip.tsx";
import RawLabel from "../../../components/raw/RawLabel.tsx";
import AddCardAside from "../aside/AddCardAside.tsx";

export default function CardsMainHeader()
{
  const [open, setOpen] = useState(false);

  const selectedCard = useAppSelector((state) =>
  {
    return state.cards.cardList.find((card) => card.cardNumber === state.cards.selectedCard);
  });

  return (
    <LayoutFlexColumn fullWidth alignItems={"flex-start"}>
      <RawLabel value={"Available balance"} variant={"subtitle2"} />
      <LayoutFlexRow fullWidth justifyContent={"space-between"}>
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
        <AddCardAside open={open} onClose={() => setOpen(false)} />
      </LayoutFlexRow>
    </LayoutFlexColumn>
  );
}
