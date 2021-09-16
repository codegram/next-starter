import Image, { ImageProps } from 'next/image'

function CustomImage(props: ImageProps): JSX.Element {
  // eslint-disable-next-line jsx-a11y/alt-text, react/jsx-props-no-spreading
  return <Image unoptimized {...props} />
}

export default CustomImage
