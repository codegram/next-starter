import { ReactElement } from 'react'
import Image from 'next/image'

export default function Home(): ReactElement {
  return (
    <Image
      src="/pride.jpg"
      alt="Pride"
      width={1024}
      height={800}
      layout="responsive"
    />
  )
}
