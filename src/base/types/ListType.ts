import {Variant} from "@mui/material/styles/createTypography";
import {TypeIcon} from "./Types.ts";
import {TypeColor} from "./Types.ts";

export interface ILinePrimary
{
  text: string;
  color?: TypeColor;
  variant: Variant;
  caption?: ILineCaption;
  icon?: TypeIcon;
}

export interface ILineSecondary
{
  text: string;
  color?: TypeColor;
  variant: Variant;
  caption?: ILineCaption;
}

export interface ILineCaption
{
  text: string;
  color?: TypeColor;
  variant?: Variant;
  bold?: boolean;
}

export interface IListItem
{
  primary: ILinePrimary;
  secondary: ILineSecondary;
  avatar: ILineAvatar;
  bottom?: ILineBottom;
}

export interface ILineBottom
{
  text: string;
  color?: TypeColor;
  variant: Variant;
  bgColor?: TypeColor;
  icon?: TypeIcon;
}

export interface ILineAvatar
{

  icon: TypeIcon;
  color: TypeColor;
}

export type TypeClick =
  | "text"
  | "caption"
  | "icon"
