import {Box} from "@mui/material";
import {getColor} from "../../base/theme/Theme.ts";
import {Theme} from "../../base/theme/Theme.ts";
import {px} from "../../base/theme/Theme.ts";
import {TypeColor} from "../../base/types/Types.ts";
import LayoutFlexRow from "../raw/LayoutFlexRow.tsx";
import RawLabel from "../raw/RawLabel.tsx";

export default function ColorBox(props: {
  selectedColor: TypeColor,
  onColorSelect: (color: TypeColor) => void
})
{
  const colors: TypeColor[] = ["red", "green", "blue", "black", "orange"];
  return (
    <Box
      padding={px(Theme.gap.std)}
      borderRadius={px(Theme.gap.half)}
      boxShadow={`0 0 10px 0 ${getColor("shadow")}`}
    >
      <RawLabel value={"Pick a card color"} />
      <LayoutFlexRow>
        {
          colors.map((color: TypeColor) =>
          {
            return (
              <Box
                key={color}
                borderRadius={"50%"}
                width={"50px"}
                height={"50px"}
                bgcolor={color}
                border={color === props.selectedColor ? `3px solid pink` : undefined}
                sx={{
                  cursor: "pointer",
                  boxSizing: "border-box"
                }}
                onClick={() => props.onColorSelect(color)}
              ></Box>
            );
          })
        }
      </LayoutFlexRow>
    </Box>
  )
    ;
}
