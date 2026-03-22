import { BaseComponent } from "@src/theme/BaseComponent"  

interface ImageProps {
  src: string;
  alt: string;
  styleSheet?: StyleSheet;
}
export default function Image({ src, alt, ...props }:ImageProps) {
  return (
    <BaseComponent
        as="img"
      src={src}
      alt={alt}
      {...props}
    />
  )
}   