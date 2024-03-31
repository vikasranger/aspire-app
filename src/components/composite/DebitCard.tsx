import AspireLogoWhite from "../../assets/AspireLogoWhite.svg";
import VisaLogo from "../../assets/Visa.svg";
import {getCardColor} from "../../base/theme/Theme.ts";
import {px} from "../../base/theme/Theme.ts";
import {Theme} from "../../base/theme/Theme.ts";
import {TypeColor} from "../../base/types/Types.ts";
import {minWidth} from "../../base/utils/constants.ts";
import {minHeight} from "../../base/utils/constants.ts";
import {asipireIconHeight} from "../../base/utils/constants.ts";
import {asipireIconWidth} from "../../base/utils/constants.ts";
import {getDisplayCardNumber} from "../../base/utils/Utils.ts";
import LayoutFlexColumn from "../raw/LayoutFlexColumn.tsx";
import LayoutFlexRow from "../raw/LayoutFlexRow.tsx";
import RawDots from "../raw/RawDots.tsx";
import RawGap from "../raw/RawGap.tsx";
import RawImage from "../raw/RawImage.tsx";
import RawLabel from "../raw/RawLabel.tsx";
import RawStars from "../raw/RawStars.tsx";

export default function DebitCard(props: {
  name: string,
  cardNumber: string,
  cardNumberVisible: boolean,
  cardValidThru: string,
  cardCVV: number,
  bgcolor?: TypeColor,
  freeze?: boolean
})
{
  const {
    name,
    cardNumber,
    cardNumberVisible,
    cardValidThru,
    cardCVV,
    bgcolor,
    freeze
  } = props;

  const cardPadding = "28px";

  const gapStd = Theme.gap.std;
  return (
    <LayoutFlexColumn
      minHeight={minHeight}
      minWidth={minWidth}
      width={"100%"}
      bgcolor={getCardColor(bgcolor)}
      borderRadius={px(Theme.gap.half)}
      // width={width}
      padding={cardPadding}
      // height={height}
      justifyContent={"space-between"}
      opacity={freeze ? 0.5 : 1}
    >
      <LayoutFlexRow justifyContent={"flex-end"} width={"100%"}>
        <RawImage
          src={AspireLogoWhite}
          alt={"aspire-logo"}
          width={asipireIconWidth}
          height={asipireIconHeight}
        />
      </LayoutFlexRow>
      <RawGap size={"small"} />

      <LayoutFlexColumn width={"100%"}>
        <LayoutFlexRow
          justifyContent={"flex-start"}
          margin={`0 0 ${Theme.gap.qtr} 0`}
          width={"100%"}
        >
          <RawLabel
            value={name}
            variant={"h5"}
            bold={true}
            color={"white"}
          />
        </LayoutFlexRow>

        <LayoutFlexRow
          justifyContent={"flex-start"}
          padding={`${px(gapStd)} 0`}
          width={"100%"}
        >
          <CardNumber
            cardNumber={cardNumber}
            cardNumberVisible={cardNumberVisible}
          />
        </LayoutFlexRow>

        <LayoutFlexRow justifyContent={"flex-start"} width={"100%"}>
          <RawLabel
            value={"Thru: " + cardValidThru}
            variant={"caption"}
            mr={gapStd}
            color={"white"}
          />
          <LayoutFlexRow>
            <RawLabel
              value={"CVV:"}
              variant={"caption"}
              ml={gapStd}
              color={"white"}
            />
            {cardNumberVisible ?
              <RawLabel
                value={cardCVV.toString()}
                variant={"caption"}
                ml={Theme.gap.qtr}
                color={"white"}
              />
              :
              <RawStars
                ml={Theme.gap.qtr}
                size={8}
                color={"white"}
                count={3}
                spacing={4}
              />
            }
          </LayoutFlexRow>

        </LayoutFlexRow>
      </LayoutFlexColumn>
      <RawGap size={"small"} />

      <LayoutFlexRow justifyContent={"flex-end"} width={"100%"}>
        <img src={VisaLogo} alt={"visa-logo"} />
      </LayoutFlexRow>
    </LayoutFlexColumn>
  );
}

function CardNumber(props: {
  cardNumber: string,
  cardNumberVisible: boolean
})
{
  const {
    cardNumber,
    cardNumberVisible
  } = props;

  const numberSplits = getDisplayCardNumber(cardNumber).split(" ");

  if(cardNumberVisible)
  {
    return (
      <LayoutFlexRow justifyContent={"space-between"} width={"75%"}>
        <RawLabel value={numberSplits[0]} variant={"subtitle2"} color={"white"} />
        <RawLabel value={numberSplits[1]} variant={"subtitle2"} color={"white"} />
        <RawLabel value={numberSplits[2]} variant={"subtitle2"} color={"white"} />
        <RawLabel value={numberSplits[3]} variant={"subtitle2"} color={"white"} />
      </LayoutFlexRow>
    );
  }

  return (
    <LayoutFlexRow justifyContent={"space-between"} width={"75%"}>
      <RawDots size={8} color={"white"} count={4} spacing={4} />
      <RawDots size={8} color={"white"} count={4} spacing={4} />
      <RawDots size={8} color={"white"} count={4} spacing={4} />
      <RawLabel value={numberSplits[3]} variant={"subtitle2"} color={"white"} />
    </LayoutFlexRow>
  );
}
