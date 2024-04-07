import {Stack} from "@mui/material";
import {px} from "../../base/theme/Theme.ts";
import {Theme} from "../../base/theme/Theme.ts";

export default function RawStack(props: {
  children: React.ReactNode,
  direction: "row" | "column",
})
{
  return (
    <Stack
      padding={px(Theme.gap.xStd)}
      spacing={px(Theme.gap.x2Std)}
      direction={props.direction}
      justifyContent={"space-around"}
    >
      {props.children}
    </Stack>
  );
}
