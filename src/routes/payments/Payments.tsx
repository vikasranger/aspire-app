import AspireDrawer from "../../components/composite/aside/AspireDrawer.tsx";
import LayoutFlexColumn from "../../components/raw/LayoutFlexColumn.tsx";
import LayoutFlexRow from "../../components/raw/LayoutFlexRow.tsx";

export default function Payments()
{
  return (
    <LayoutFlexRow fullSize>
      <AspireDrawer />
      <LayoutFlexColumn fullSize>
        <h1>Manage Payments</h1>
        <p>Welcome to the manage payment page</p>
      </LayoutFlexColumn>
    </LayoutFlexRow>
  );
}
