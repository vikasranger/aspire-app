import {Drawer} from "@mui/material";
import {useNavigate} from "react-router-dom";
import {useLocation} from "react-router-dom";
import AspireLogo from "../../../assets/AspireLogo.svg";
import {px} from "../../../base/theme/Theme.ts";
import {Theme} from "../../../base/theme/Theme.ts";
import {getColor} from "../../../base/theme/Theme.ts";
import {usePageContext} from "../../../context/pageContext.tsx";
import {ROUTE_SETTING} from "../../../routes/Routes.ts";
import {ROUTE_CREDIT} from "../../../routes/Routes.ts";
import {ROUTE_PAYMENTS} from "../../../routes/Routes.ts";
import {ROUTE_CARDS} from "../../../routes/Routes.ts";
import {ROUTE_HOME} from "../../../routes/Routes.ts";
import LayoutFlexColumn from "../../raw/LayoutFlexColumn.tsx";
import LayoutFlexRow from "../../raw/LayoutFlexRow.tsx";
import RawLabel from "../../raw/RawLabel.tsx";
import {IActionButton} from "../ActionButton.tsx";
import ActionButtonList from "../ActionButtonList.tsx";

export default function AspireDrawer()
{
  const aspireSlogan = "Trusted way of banking for 3,000+ SMEs and startups in Singapore";
  const gapX2 = px(Theme.gap.x3Std);
  const gapX = px(Theme.gap.xStd);
  const pageContext = usePageContext();

  const isMobile = pageContext.isMobile();

  const navigate = useNavigate();
  const location = useLocation();
  const path = location.pathname;
  const actionButtonList: IActionButton[] = [
    {
      id: ROUTE_HOME,
      icon: "Home",
      label: isMobile ? "" : "Home",
      isActive: isActive(path, ROUTE_HOME)
    },
    {
      id: ROUTE_CARDS,
      icon: "CardWhite",
      label: isMobile ? "" : "Cards",
      isActive: isActive(path, ROUTE_CARDS)
    },
    {
      id: ROUTE_PAYMENTS,
      icon: "Payments",
      label: isMobile ? "" : "Payments",
      isActive: isActive(path, ROUTE_PAYMENTS)
    },
    {
      id: ROUTE_CREDIT,
      icon: "Credit",
      label: isMobile ? "" : "Credit",
      isActive: isActive(path, ROUTE_CREDIT)
    },
    {
      id: ROUTE_SETTING,
      icon: "Settings",
      label: isMobile ? "" : "Settings",
      isActive: isActive(path, ROUTE_SETTING)
    }
  ];

  const handleClick = (path: string) => navigate(path);

  if(isMobile)
  {
    return (
      <Drawer
        variant="persistent"
        open={true}
        anchor="bottom"
        sx={{
          flexShrink: 1,
          height: "45px",
          "& .MuiDrawer-paper": {
            height: "45px",
            boxSizing: "border-box"
          }
        }}
      >
        <LayoutFlexRow bgColor={getColor("bgDrawer")} height={"100%"}>
          <ActionButtonList
            actionList={actionButtonList}
            onClick={handleClick}
            direction={"row"}
            noPadding
          />
        </LayoutFlexRow>
      </Drawer>
    );
  }

  return (
    <Drawer
      variant="permanent"
      anchor="left"
      sx={{
        width: "20%",
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: "20%",
          boxSizing: "border-box"
        }
      }}
    >
      <LayoutFlexColumn
        width={"100%"}
        flexGrow={1}
        padding={`0 ${gapX}`}
        justifyContent={"flex-start"}
        alignItems={"flex-start"}
        bgColor={getColor("bgDrawer")}
      >
        <LayoutFlexRow
          justifyContent={"flex-start"}
          margin={`${gapX2} 0 ${gapX} 0`}
        >
          <img src={AspireLogo} alt={"aspire"} />
        </LayoutFlexRow>
        <RawLabel
          value={aspireSlogan}
          variant={"caption"}
          color={"white"}
          opacity={.3}
        />

        <ActionButtonList
          actionList={actionButtonList}
          onClick={handleClick}
        />
      </LayoutFlexColumn>
    </Drawer>
  );
}

function isActive(path: string, route: string)
{
  return path === route;
}
