import {useNavigate} from "react-router-dom";
import AspireDrawer from "../../components/composite/aside/AspireDrawer.tsx";
import LayoutFlexColumn from "../../components/raw/LayoutFlexColumn.tsx";
import LayoutFlexRow from "../../components/raw/LayoutFlexRow.tsx";
import RawButton from "../../components/raw/RawButton.tsx";
import {ROUTE_CARDS} from "../Routes.ts";

export default function Home()
{
  const navigate = useNavigate();
  return (
    <LayoutFlexRow width={"100%"} height={"100%"}>
      <AspireDrawer />
      <LayoutFlexColumn width={"100%"} height={"100%"}>
        <h1>Check out cards page</h1>
        <RawButton label={"Check Cards"} onClick={() => navigate(ROUTE_CARDS)} />
      </LayoutFlexColumn>
    </LayoutFlexRow>
  );
}
