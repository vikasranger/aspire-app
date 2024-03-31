import {Stack} from "@mui/material";
import {px} from "../../base/theme/Theme.ts";

export default function RawStars(props: {
  size: number,
  color: string,
  count: number,
  spacing: number,
  direction?: "row" | "column",
  ml?: number,
})
{
  const {
    size,
    color,
    count,
    direction,
    spacing,
    ml
  } = props;
  return (
    <Stack
      direction={direction ?? "row"}
      spacing={px(spacing)}
      alignItems={"center"}
      ml={px(ml)}
    >
      {[...Array(count)].map((_, index) =>
      {
        return (
          <span
            key={index}
            style={{
              color: color,
              fontSize: px(size)
            }}
          >
            &#9733;
          </span>
        );
      })}
    </Stack>
  );
}
