import AspireDrawer from "../../components/composite/aside/AspireDrawer.tsx";
import LayoutFlexColumn from "../../components/raw/LayoutFlexColumn.tsx";
import LayoutFlexRow from "../../components/raw/LayoutFlexRow.tsx";

export default function Settings()
{
  return (
    <LayoutFlexRow fullSize>
      <AspireDrawer />
      <LayoutFlexColumn fullSize>
        <h1>Manage Settings</h1>
        <p>Welcome to the manage settings page</p>
      </LayoutFlexColumn>
    </LayoutFlexRow>
  );
}
