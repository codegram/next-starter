import { ReactElement } from 'react'
import Image from 'next/image'
import styles from './index.module.scss'
import prideImage from '../public/pride.jpg'

export default function Home(): ReactElement {
  return (
    <div className={styles.container}>
      <Image src={prideImage} alt="Pride" />
    </div>
  )
}
