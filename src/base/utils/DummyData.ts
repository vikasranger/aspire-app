import {IPropsRawIcon} from "../../components/raw/RawIcon.tsx";
import {IListItem} from "../types/ListType.ts";
import {TypeIcon} from "../types/Types.ts";

interface IListItemAPI
{
  title: string,
  date: string,
  avatar: TypeIcon,
  amount: string,
  isDebit: boolean,
}

const items: IListItemAPI[] = [
  {
    title: "Hamleys",
    date: "20 May 2020",
    avatar: "FileStorage",
    amount: "S$ 150",
    isDebit: false
  },
  {
    title: "Puma",
    date: "22 June 2020",
    avatar: "Flight",
    amount: "S$ 200",
    isDebit: true
  },
  {
    title: "Adidas",
    date: "25 June 2020",
    avatar: "FileStorage",
    amount: "S$ 250",
    isDebit: false
  },
  {
    title: "Nike",
    date: "28 June 2020",
    avatar: "MegaPhone",
    amount: "S$ 300",
    isDebit: true
  },
  {
    title: "Reebok",
    date: "30 June 2020",
    avatar: "FileStorage",
    amount: "S$ 350",
    isDebit: false
  },
  {
    title: "Under Armour",
    date: "2 July 2020",
    avatar: "Flight",
    amount: "S$ 400",
    isDebit: true
  },
  {
    title: "Burger king",
    date: "5 July 2020",
    avatar: "FileStorage",
    amount: "S$ 450",
    isDebit: true
  },
  {
    title: "KFC",
    date: "10 July 2020",
    avatar: "MegaPhone",
    amount: "S$ 500",
    isDebit: false
  },
  {
    title: "McDonalds",
    date: "15 July 2020",
    avatar: "FileStorage",
    amount: "S$ 550",
    isDebit: true
  },
  {
    title: "Subway",
    date: "20 July 2020",
    avatar: "Flight",
    amount: "S$ 600",
    isDebit: false
  },
  {
    title: "Pizza Hut",
    date: "25 July 2020",
    avatar: "FileStorage",
    amount: "S$ 650",
    isDebit: true
  },
  {
    title: "Domino's",
    date: "30 July 2020",
    avatar: "MegaPhone",
    amount: "S$ 700",
    isDebit: false
  },
  {
    title: "Starbucks",
    date: "5 August 2020",
    avatar: "FileStorage",
    amount: "S$ 750",
    isDebit: true
  },
  {
    title: "Costa Coffee",
    date: "10 August 2020",
    avatar: "Flight",
    amount: "S$ 800",
    isDebit: false
  },
  {
    title: "Barista",
    date: "15 August 2020",
    avatar: "FileStorage",
    amount: "S$ 850",
    isDebit: true
  },
  {
    title: "Cafe Coffee Day",
    date: "20 August 2020",
    avatar: "MegaPhone",
    amount: "S$ 900",
    isDebit: false
  },
  {
    title: "Dunkin Donuts",
    date: "25 August 2020",
    avatar: "FileStorage",
    amount: "S$ 950",
    isDebit: true
  },
  {
    title: "Krispy Kreme",
    date: "30 August 2020",
    avatar: "Flight",
    amount: "S$ 1000",
    isDebit: false
  }
];

export function getListItems(): IListItem[]
{
  return items.map((item) =>
  {
    return {
      primary: {
        text: item.title,
        color: "textPrimary",
        variant: "subtitle2",
        caption: {
          text: (item.isDebit ? "- " : "+ ") + item.amount,
          color: item.isDebit ? "error" : "success",
          variant: "caption",
          bold: true
        },
        icon: "Next"
      },
      secondary: {
        text: item.date,
        color: "textSecondary",
        variant: "subtitle2"
      },
      avatar: {
        icon: item.avatar,
        color: "bg1"
      },
      bottom: {
        text: item.isDebit ? "Refund on debit card" : "Refund on credit card",
        variant: "caption",
        icon: "Restart"
      }
    };
  });
}

export const listItem: IListItem = {
  primary: {
    text: "Hamleys",
    color: "textPrimary",
    variant: "subtitle2",
    caption: {
      text: "+ S$ 150",
      color: "success",
      variant: "caption",
      bold: true
    },
    icon: "Next"
  },
  secondary: {
    text: "20 May 2020",
    color: "textSecondary",
    variant: "subtitle2"
  },
  avatar: {
    icon: "FileStorage",
    color: "bg1"
  },
  bottom: {
    text: "Refund on debit card",
    variant: "caption",
    icon: "Restart"
  }
};
export const iconList: IPropsRawIcon[] = [
  {
    id: "freeze",
    type: "Freeze",
    label: "Freeze card"
  },
  {
    id: "gpay",
    type: "GPay",
    label: "Add to GPay"
  },
  {
    id: "limit",
    type: "Limit",
    label: "Set spend limit"
  },
  {
    id: "restart",
    type: "Restart",
    label: "Replace card"
  },
  {
    id: "delete",
    type: "Delete",
    label: "Cancel card"
  }
];
