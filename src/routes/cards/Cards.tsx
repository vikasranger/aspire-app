import axios from "axios";
import {useState} from "react";
import {useEffect} from "react";
import getCardsAPI from "../../api/getCardsAPI.ts";
import {useAppDispatch} from "../../base/hooks/Hooks.ts";
import {px} from "../../base/theme/Theme.ts";
import {Theme} from "../../base/theme/Theme.ts";
import AspireDrawer from "../../components/composite/aside/AspireDrawer.tsx";
import LayoutFlexColumn from "../../components/raw/LayoutFlexColumn.tsx";
import LayoutFlexRow from "../../components/raw/LayoutFlexRow.tsx";
import RawFadeLoader from "../../components/raw/RawFadeLoader.tsx";
import {addCardList} from "../../store/slices/SliceCard.ts";
import {CardsMainContent} from "./CardsMainContent.tsx";
import CardsMainHeader from "./CardsMainHeader.tsx";

export default function Cards()
{
  const [error, setError] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const dispatch = useAppDispatch();

  const fetchCards = async() =>
  {
    try
    {
      setLoading(true);
      getCardsAPI.then((response) =>
      {
        const data = response.data;
        if(data)
        {
          dispatch(addCardList(data.cardList));
        }
        setLoading(false);
      });
    }
    catch(error)
    {
      if(axios.isAxiosError(error))
      {
        setError(error.message);
      }
      else
      {
        setError("An error occurred while fetching data");
      }
    }
  };

  useEffect(() =>
  {
    fetchCards();
  }, []);

  if(error)
  {
    return (
      <LayoutFlexRow
        width={"100%"}
        height={"100%"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <h1>{error}</h1>
      </LayoutFlexRow>
    );
  }

  return (
    <LayoutFlexRow
      width={"100%"}
      height={"100%"}
      alignItems={"flex-start"}
    >
      <AspireDrawer />
      {loading ?
        <LayoutFlexColumn width={"100%"} height={"100%"}>
          <RawFadeLoader />
        </LayoutFlexColumn>
        :
        <LayoutFlexColumn
          width={"100%"}
          padding={px(Theme.gap.x3Std)}
          justifyContent={"flex-start"}
        >
          <CardsMainHeader />
          <CardsMainContent />
        </LayoutFlexColumn>
      }
    </LayoutFlexRow>
  );
}

