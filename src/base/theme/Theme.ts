import {TypeColor} from "../types/Types.ts";

export const Theme = {
  color: {
    white: "#ffffff",
    black: "#000000",
    green: "#01d167",
    cardBg: "#edf3ff",
    accordionBg: "#f5f9ff",
    border: "#f5f5f5",
    shadow: "#0000000a"
  },
  icon: {
    size: {
      small: 16,
      medium: 24,
      large: 32,
      extraLarge: 48
    }
  },
  font: {
    family: {
      primary: "Arial, sans-serif",
      secondary: "Arial, sans-serif",
      tertiary: "Arial, sans-serif"
    },
    size: {
      small: 12,
      medium: 16,
      large: 20,
      extraLarge: 24
    },
    weight: {
      light: 300,
      normal: 400,
      bold: 700
    }
  },
  gap: {
    x3Std: 48,
    x2Std: 32,
    xStd: 24,
    std: 16,
    half: 8,
    qtr: 4
  },
  border: {
    radius: {
      small: 4,
      medium: 8,
      large: 12,
      extraLarge: 16
    },
    width: {
      small: 1,
      medium: 2,
      large: 3,
      extraLarge: 4
    }
  },
  shadow: {
    small: "0px 4px 8px rgba(0, 0, 0, 0.1)",
    medium: "0px 8px 16px rgba(0, 0, 0, 0.1)",
    large: "0px 12px 24px rgba(0, 0, 0, 0.1)",
    extraLarge: "0px 16px 32px rgba(0, 0, 0, 0.1)"
  }
};

export function px(value?: number | string): string | undefined
{
  return typeof value === "number" ? `${value}px` : value;
}

export function getColor(color: TypeColor): string
{
  return typeColorMap[color];
}

const typeColorMap: Record<TypeColor, string> = {
  textPrimary: "#222222",
  textSecondary: "#aaaaaa",
  textTertiary: "#325baf",
  bgDrawer: "#0c365a",
  success: "#01d167",
  error: "#d32f2f",
  waring: "#ed6c02",
  info: "blue",
  white: "#ffffff",
  bg1: "#009dff1a",
  bg2: "#00d6b51a",
  bg3: "#f251951a",
  shadow: "#00000014",
  black: "#000000",
  blue: "#2b3784",
  green: "#01d167",
  orange: "#ff4d04",
  red: "#d32f2f"
};

export function getCardColor(color?: TypeColor): string
{
  if(!color) return "#01d167";
  return getColor(color);
}
