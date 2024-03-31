import {px} from "../../base/theme/Theme.ts";
import {getSize} from "../../base/types/Types.ts";
import {TypeIconSize} from "../../base/types/Types.ts";

export default function RawImage(props: {
  src: string,
  alt: string,
  size?: TypeIconSize,
  width?: number,
  height?: number,
  ml?: number,
  mr?: number,
  mt?: number,
  mb?: number
})
{
  const {
    src,
    alt,
    size,
    width,
    height
  } = props;
  return (
    <img
      src={src}
      alt={alt}
      width={getRealDimension(width, size)}
      height={getRealDimension(height, size)}
      style={{
        marginLeft: px(props.ml),
        marginRight: px(props.mr),
        marginTop: px(props.mt),
        marginBottom: px(props.mb)
      }}
    />
  );
}

function getRealDimension(length?: number, size?: TypeIconSize): string | undefined
{
  if(length)
  {
    return px(length) ?? "auto";
  }
  else
  {
    if(!size) return "auto";
    return px(getSize(size));
  }
}
