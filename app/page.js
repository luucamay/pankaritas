import Image from 'next/image'
import styles from './page.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <main className={styles.main}>
      <ul>
        <li>
          <Link href='cinco'>Cinco Siglos</Link>
        </li>
        <li>
          <Link href='flor'>Flor de cactus</Link>
        </li>
        <li>
          <Link href='jachaj'>Jacha Jardin</Link>
        </li>
        <li>
          <Link href='jachau'>Jacha Uru</Link>
        </li>
        <li>
          <Link href='siempre'>Siempre Vivas</Link>
        </li>
        <li>
          <Link href="bartolina">Bartolina</Link>
        </li>
      </ul>
    </main>
  )
}
