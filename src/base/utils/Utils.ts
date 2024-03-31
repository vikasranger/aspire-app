import {ICard} from "../../store/slices/SliceCard.ts";
import {TypeCardColor} from "../types/Types.ts";

export function getNewCardDetails(name: string, purpose: string, limit: number): ICard
{
  return {
    cardNumber: generateCardNumber(),
    cardNumberVisible: false,
    cardFreeze: false,
    cardValidThru: generateCardValidThru(),
    cardCVV: generateRandomCVV(),
    nameOnCard: name,
    purpose: purpose,
    cardColor: getRandomCardColor(),
    availableBalance: 0,
    currencyUnits: "USD",
    weeklySpendingLimit: limit,
    weeklySpendingLimitExhausted: false
  };
}

function getRandomCardColor(): TypeCardColor
{
  const colors: TypeCardColor[] = ["black", "blue", "green", "orange", "red"];
  return colors[Math.floor(Math.random() * colors.length)];

}

function generateRandomCVV(): number
{
  return Math.floor(100 + Math.random() * 900);
}

function generateCardValidThru(): string
{
  const month = Math.floor(1 + Math.random() * 12);
  const year = Math.floor(20 + Math.random() * 10);
  return `${month}/${year}`;
}

function generateCardNumber(): string
{
  let cardNumber = "";
  for(let i = 0; i < 16; i++)
  {
    cardNumber += Math.floor(Math.random() * 10);
  }
  return cardNumber;
}

export function getDisplayCardNumber(cardNumber: string): string
{
  return cardNumber.replace(/(.{4})/g, "$1 ");
}
