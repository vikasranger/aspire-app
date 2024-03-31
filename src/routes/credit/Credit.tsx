import AspireDrawer from "../../components/composite/aside/AspireDrawer.tsx";
import LayoutFlexColumn from "../../components/raw/LayoutFlexColumn.tsx";
import LayoutFlexRow from "../../components/raw/LayoutFlexRow.tsx";

export default function Credit()
{
  return (
    <LayoutFlexRow width={"100%"} height={"100%"}>
      <AspireDrawer />
      <LayoutFlexColumn width={"100%"} height={"100%"}>
        <h1>Credit</h1>
        <p>Welcome to the Credit page</p>
      </LayoutFlexColumn>
    </LayoutFlexRow>
  );
}
