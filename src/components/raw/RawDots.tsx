import {Stack} from "@mui/material";
import {px} from "../../base/theme/Theme.ts";

export default function RawDots(props: {
  size: number,
  color: string,
  count: number,
  spacing: number,
  direction?: "row" | "column"
})
{
  const {
    size,
    color,
    count,
    direction,
    spacing
  } = props;
  return (
    <Stack
      direction={direction ?? "row"}
      spacing={px(spacing)}
    >
      {[...Array(count)].map((_, index) =>
      {
        return (
          <div
            key={index}
            style={{
              width: px(size),
              height: px(size),
              borderRadius: "50%",
              backgroundColor: color
            }}
          />
        );
      })}
    </Stack>
  );
}
