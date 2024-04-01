import Account from "../../assets/Account.svg";
import AspireLogo from "../../assets/AspireLogo.svg";
import AspireDrawerLogo from "../../assets/AspireLogoBig.svg";
import Card from "../../assets/Card.svg";
import CardWhite from "../../assets/CardWhite.svg";
import Credit from "../../assets/Credit.svg";
import Delete from "../../assets/Delete.svg";
import FileStorage from "../../assets/FileStorage.svg";
import Finance from "../../assets/Finance.svg";
import Flight from "../../assets/Flights.svg";
import Freeze from "../../assets/Freeze.svg";
import GPay from "../../assets/GPay.svg";
import Group from "../../assets/Group.svg";
import Home from "../../assets/Home.svg";
import Limit from "../../assets/Limit.svg";
import MegaPhone from "../../assets/Megaphone.svg";
import Next from "../../assets/Next.svg";
import Payments from "../../assets/Payments.svg";
import Restart from "../../assets/Restart.svg";
import Visa from "../../assets/Visa.svg";

export type TypeIcon =
  | "Finance"
  | "Group"
  | "Freeze"
  | "Limit"
  | "GPay"
  | "Restart"
  | "Delete"
  | "Card"
  | "CardWhite"
  | "Aspire"
  | "AspireBig"
  | "Payments"
  | "User"
  | "Flight"
  | "MegaPhone"
  | "FileStorage"
  | "Settings"
  | "Visa"
  | "Next"
  | "Home"
  | "Credit";

export type TypeIconSize = "smallest" | "small" | "medium" | "large" | "xLarge" | "x2Large";
export type TypeButtonSize = "small" | "medium" | "large";

export type TypeColor =
  | "textPrimary"
  | "textSecondary"
  | "textTertiary"
  | "bgDrawer"
  | "shadow"
  | "success"
  | "error"
  | "waring"
  | "info"
  | "white"
  | "bg1"
  | "bg2"
  | "bg3"
  | "black"
  | "blue"
  | "green"
  | "orange"
  | "red";

export interface ISize
{
  width: number;
  height: number;
}

export interface IPageCtx
{
  isMobile(): boolean;

  isDesktop(): boolean;

  isSmallDesktop(): boolean;
}

export function getSize(size: TypeIconSize)
{
  switch(size)
  {
    case "smallest":
      return "12px";
    case "small":
      return "16px";
    case "medium":
      return "32px";
    case "large":
      return "48px";
    case "xLarge":
      return "56px";
    case "x2Large":
      return "80px";
  }
}

export function getIconPath(type: TypeIcon)
{
  return imagePathMap[type] ?? imagePathMap["Aspire"];
}

const imagePathMap: Record<TypeIcon, string> = {
  "Aspire": AspireLogo,
  "AspireBig": AspireDrawerLogo,
  "Delete": Delete,
  "Freeze": Freeze,
  "GPay": GPay,
  "Limit": Limit,
  "Restart": Restart,
  "Visa": Visa,
  "Group": Group,
  "Card": Card,
  "CardWhite": CardWhite,
  "Finance": Finance,
  "Payments": Payments,
  "User": Restart,
  "Flight": Flight,
  "MegaPhone": MegaPhone,
  "FileStorage": FileStorage,
  "Settings": Account,
  "Next": Next,
  "Home": Home,
  "Credit": Credit
};

