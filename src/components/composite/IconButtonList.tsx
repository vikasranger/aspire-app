import {Stack} from "@mui/material";
import {px} from "../../base/theme/Theme.ts";
import {Theme} from "../../base/theme/Theme.ts";
import RawIcon from "../raw/RawIcon.tsx";
import {IPropsRawIcon} from "../raw/RawIcon.tsx";

export default function IconButtonList(props: {
  iconList: IPropsRawIcon[],
  bgColor?: string,
  onClick: (id: string) => void
})
{
  const {
    iconList,
    bgColor,
    onClick
  } = props;
  return (
    <Stack
      width={"100%"}
      boxSizing={"border-box"}
      bgcolor={bgColor}
      direction={"row"}
      justifyContent={"space-between"}
      spacing={px(Theme.gap.half)}
      alignItems={"center"}
      padding={px(Theme.gap.std)}
      borderRadius={px(Theme.gap.std)}
    >
      {iconList.map((icon) => (
        <RawIcon
          id={icon.id}
          key={icon.label}
          label={icon.label}
          icon={icon.type}
          size={icon.size ?? "medium"}
          onClick={onClick}
        />
      ))}
    </Stack>
  );

}
