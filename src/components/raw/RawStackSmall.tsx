import LayoutFlexColumn from "./LayoutFlexColumn.tsx";

export default function RawStackSmall(props: {
  children: React.ReactNode,
  pt?: string
})
{
  return (
    <LayoutFlexColumn
      maxWidth={"500px"}
      fullWidth
      justifyContent={"flex-start"}
      flexShrink={1}
      pt={props.pt}
    >
      {props.children}
    </LayoutFlexColumn>
  );
}
