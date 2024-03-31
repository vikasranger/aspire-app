import {Box} from "@mui/material";
import {getColor} from "../../../base/theme/Theme.ts";
import {px} from "../../../base/theme/Theme.ts";
import {Theme} from "../../../base/theme/Theme.ts";
import {ILineAvatar} from "../../../base/types/ListType.ts";
import {getIconPath} from "../../../base/types/Types.ts";
import {getSize} from "../../../base/types/Types.ts";
import {TypeColor} from "../../../base/types/Types.ts";
import {TypeIconSize} from "../../../base/types/Types.ts";
import RawImage from "../../raw/RawImage.tsx";

export default function ListItemAvatarPS(props: {
  avatar: ILineAvatar,
  alt: string,
  size?: TypeIconSize,
  bgcolor?: TypeColor,
  ml?: number,
  mr?: number,
  mt?: number,
  mb?: number
})
{
  const {
    avatar,
    alt,
    size,
    ml,
    mb,
    mt,
    mr
  } = props;
  return (
    <Box
      sx={{
        padding: px(Theme.gap.half),
        borderRadius: "50%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        bgcolor: getColor(avatar.color),
        width: getSize("medium"),
        height: getSize("medium"),
        marginLeft: px(ml),
        marginRight: px(mr),
        marginTop: px(mt),
        marginBottom: px(mb)
      }}
    >
      <RawImage
        src={getIconPath(avatar.icon)}
        alt={alt}
        size={size}
      />
    </Box>
  );
}
