import AspireDrawer from "../../components/composite/aside/AspireDrawer.tsx";
import LayoutFlexColumn from "../../components/raw/LayoutFlexColumn.tsx";
import LayoutFlexRow from "../../components/raw/LayoutFlexRow.tsx";

export default function SignIn()
{
  return (
    <LayoutFlexRow fullSize>
      <AspireDrawer />
      <LayoutFlexColumn fullSize>
        <h1>SignIn Page</h1>
        <p>Welcome to the SignIn page</p>
      </LayoutFlexColumn>
    </LayoutFlexRow>
  );
}
