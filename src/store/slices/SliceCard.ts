import {createSlice} from "@reduxjs/toolkit";
import {PayloadAction} from "@reduxjs/toolkit";
import {TypeColor} from "../../base/types/Types.ts";

interface ICardSliceState
{
  cardList: ICard[];
  selectedCard?: string;
}

export interface ICard
{
  cardNumber: string;
  cardNumberVisible: boolean,
  cardValidThru: string,
  cardCVV: number,
  nameOnCard: string,
  purpose: string,
  cardColor: TypeColor,
  availableBalance: number,
  currencyUnits: string,
  weeklySpendingLimit: number,
  weeklySpendingLimitExhausted: boolean,
  cardFreeze: boolean,
}

const initialState: ICardSliceState = {
  cardList: []
};

export const sliceCard = createSlice({
  name: "cards",
  initialState,
  reducers: {
    addCard: (state, action: PayloadAction<ICard>) =>
    {
      const card = action.payload;
      state.cardList.push(card);
      if(state.cardList.length === 1)
      {
        state.selectedCard = card.cardNumber;
      }
    },
    addCardList: (state, action: PayloadAction<ICard[]>) =>
    {
      state.cardList = action.payload;
      if(state.cardList.length > 0)
      {
        state.selectedCard = state.cardList[0].cardNumber;
      }
    },
    removeCard: (state, action: PayloadAction<string>) =>
    {
      state.cardList = state.cardList.filter(card => card.cardNumber !== action.payload);
    },
    selectCard: (state, action: PayloadAction<string>) =>
    {
      state.selectedCard = action.payload;
    },
    setCardNumberVisible: (state, action: PayloadAction<{cardNumber: string, visible: boolean}>) =>
    {
      const {
        cardNumber,
        visible
      } = action.payload;
      const card = state.cardList.find(card => card.cardNumber === cardNumber);
      if(card)
      {
        card.cardNumberVisible = visible;
      }
    },
    setCardFreeze: (state, action: PayloadAction<{cardNumber: string, freeze: boolean}>) =>
    {
      const {
        cardNumber,
        freeze
      } = action.payload;
      const card = state.cardList.find(card => card.cardNumber === cardNumber);
      if(card)
      {
        card.cardFreeze = freeze;
      }
    }
  }
});

export const {
  addCard,
  removeCard,
  selectCard,
  setCardNumberVisible,
  setCardFreeze,
  addCardList
} = sliceCard.actions;
