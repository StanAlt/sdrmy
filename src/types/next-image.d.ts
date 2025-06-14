// next-image.d.ts
import type { StaticImageData } from 'next/image'

declare module 'next/image' {
  export default function Image(props: {
    src: string | StaticImageData
    alt: string
    fill?: boolean
    width?: number
    height?: number
    style?: React.CSSProperties
    priority?: boolean
    className?: string
    [key: string]: any
  }): JSX.Element
}
