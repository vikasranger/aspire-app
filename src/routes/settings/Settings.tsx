import AspireDrawer from "../../components/composite/aside/AspireDrawer.tsx";
import LayoutFlexColumn from "../../components/raw/LayoutFlexColumn.tsx";
import LayoutFlexRow from "../../components/raw/LayoutFlexRow.tsx";

export default function Settings()
{
  return (
    <LayoutFlexRow width={"100%"} height={"100%"}>
      <AspireDrawer />
      <LayoutFlexColumn width={"100%"} height={"100%"}>
        <h1>Manage Settings</h1>
        <p>Welcome to the manage settings page</p>
      </LayoutFlexColumn>
    </LayoutFlexRow>
  );
}
