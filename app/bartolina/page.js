import Image from 'next/image'
import styles from './page.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <Image
      src="/bartolina.jpg"
      fill={true}
      alt='music'
    />
  )
}
