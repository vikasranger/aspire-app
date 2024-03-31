import {Stack} from "@mui/material";
import {px} from "../../base/theme/Theme.ts";
import {Theme} from "../../base/theme/Theme.ts";
import ActionButton from "./ActionButton.tsx";
import {IActionButton} from "./ActionButton.tsx";

export default function ActionButtonList(props: {
  actionList: IActionButton[],
  onClick: (icon: string) => void
})
{
  const {
    actionList,
    onClick
  } = props;
  return (
    <Stack
      paddingTop={px(Theme.gap.x3Std)}
      spacing={px(Theme.gap.x2Std)}
      justifyContent={"space-between"}
      alignItems={"flex-start"}
    >
      {actionList.map((action) => (
        <ActionButton
          key={action.id}
          onClick={() => onClick(action.id)}
          label={action.label}
          icon={action.icon}
          isActive={action.isActive}
        />
      ))}
    </Stack>
  );
}
