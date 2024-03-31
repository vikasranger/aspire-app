import {Avatar} from "@mui/material";
import {IconButton} from "@mui/material";
import {Collapse} from "@mui/material";
import React, {useState} from "react";
import ExpandLess from "../../assets/Less.svg";
import ExpandMore from "../../assets/More.svg";
import {px} from "../../base/theme/Theme.ts";
import {Theme} from "../../base/theme/Theme.ts";
import {getIconPath} from "../../base/types/Types.ts";
import {TypeIcon} from "../../base/types/Types.ts";
import LayoutFlexColumn from "../raw/LayoutFlexColumn.tsx";
import LayoutFlexRow from "../raw/LayoutFlexRow.tsx";
import RawImage from "../raw/RawImage.tsx";
import RawLabel from "../raw/RawLabel.tsx";

export default function HeaderAccordion(props: {
  label: string,
  icon?: TypeIcon,
  children: React.ReactNode,
  bgColor?: string,
  isFixed?: boolean,
  defaultOpen?: boolean
})
{
  const {
    icon,
    label,
    children,
    isFixed,
    bgColor,
    defaultOpen
  } = props;

  const [open, setOpen] = useState(Boolean(defaultOpen));
  return (
    <LayoutFlexColumn
      width={"100%"}
      borderRadius={px(Theme.gap.half)}
    >
      <LayoutFlexRow
        width={"100%"}
        justifyContent={"space-between"}
        boxShadow={`0 0 ${px(Theme.gap.half)} ${Theme.color.shadow}`}
        padding={px(Theme.gap.std)}
        bgcolor={bgColor}
        border={`1px solid ${Theme.color.border}`}
        borderRadius={px(Theme.gap.half)}
      >
        <LayoutFlexRow>
          {icon &&
            <Avatar
              src={getIconPath(icon)}
              alt={"avatar"}
              sx={{
                height: px(Theme.icon.size.medium),
                width: px(Theme.icon.size.medium),
                marginRight: px(Theme.gap.half)
              }}
            />
          }
          <RawLabel value={label} variant={"subtitle2"} />
        </LayoutFlexRow>

        {!isFixed &&
          <IconButton disableRipple onClick={() => setOpen(open => !open)} size={"small"}>
            {open ?
              <RawImage src={ExpandLess} alt={"less"} size={"medium"} /> :
              <RawImage src={ExpandMore} alt={"more"} size={"medium"} />}
          </IconButton>
        }
      </LayoutFlexRow>

      <Collapse
        in={open}
        timeout="auto"
        unmountOnExit
        sx={{
          width: "100%"
        }}
      >
        {children}
      </Collapse>
    </LayoutFlexColumn>
  );
}
