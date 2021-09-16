import Image, { ImageProps } from 'next/image'

const loader = ({ src }) => {
  return `${process.env.basePath}/${src}`
}

function CustomImage(props: ImageProps): JSX.Element {
  const { src } = props
  let url = src

  if (typeof src === 'object' && 'src' in src) {
    url = {
      ...src,
      src: `${process.env.basePath || ''}${src.src}`,
    }
  }

  // eslint-disable-next-line jsx-a11y/alt-text, react/jsx-props-no-spreading
  return <Image unoptimized {...props} loader={loader} src={url} />
}

export default CustomImage
