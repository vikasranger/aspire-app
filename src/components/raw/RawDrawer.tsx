import {ArrowBackRounded} from "@mui/icons-material";
import {Drawer} from "@mui/material";
import {makeStyles} from "@mui/styles";
import {getColor} from "../../base/theme/Theme.ts";
import {Theme} from "../../base/theme/Theme.ts";
import {px} from "../../base/theme/Theme.ts";
import {TypeColor} from "../../base/types/Types.ts";
import {usePageContext} from "../../context/pageContext.tsx";
import LayoutFlexColumn from "./LayoutFlexColumn.tsx";
import LayoutFlexRow from "./LayoutFlexRow.tsx";
import RawButton from "./RawButton.tsx";

export type TypeSide = "top" | "left" | "bottom" | "right";

const gapStd = px(Theme.gap.std);

const useStyles = makeStyles({
  drawerPaper: {
    borderRadius: `${gapStd} 0 0 ${gapStd}`,
    width: "30%"
  },
  drawerPaperMobile: {
    borderRadius: `${gapStd} 0 0 ${gapStd}`,
    width: "100%"
  }
});

export default function RawDrawer(props: {
  children: React.ReactNode,
  side: TypeSide,
  open: boolean,
  bgColor?: TypeColor,
  onClose: () => void
})
{
  const {
    children,
    open,
    side,
    bgColor,
    onClose
  } = props;

  const pageContext = usePageContext();
  const isSmall = pageContext.isSmallDesktop();

  const classes = useStyles();

  return (
    <Drawer
      anchor={side}
      open={open}
      onClose={(_event, reason) =>
      {
        if(reason === "backdropClick")
        {
          return;
        }
        onClose();
      }}
      ModalProps={{
        disableEscapeKeyDown: true
      }}
      classes={{paper: isSmall ? classes.drawerPaperMobile : classes.drawerPaper}}
    >
      <LayoutFlexColumn
        bgColor={bgColor ? getColor(bgColor) : undefined}
        flexGrow={1}
        justifyContent={"flex-start"
        }
      >
        <LayoutFlexRow
          width={"100%"}
          justifyContent={"flex-start"}
          padding={gapStd}
        >
          <RawButton
            color={"success"}
            variant={"text"}
            label={"Back"}
            onClick={onClose}
            icon={<ArrowBackRounded />}
          />
        </LayoutFlexRow>

        {children}
      </LayoutFlexColumn>
    </Drawer>
  );
}

