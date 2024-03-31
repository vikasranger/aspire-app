import {Box} from "@mui/material";
import {getSize} from "../../base/types/Types.ts";
import {TypeIconSize} from "../../base/types/Types.ts";

export default function RawGap(props: {
  size: TypeIconSize,
  direction?: "row" | "column",
})
{
  const {
    size,
    direction
  } = props;

  const gap = getSize(size);
  return (
    <Box
      width={gap}
      height={gap}
      display={"flex"}
      flexDirection={direction}
    />
  );

}
