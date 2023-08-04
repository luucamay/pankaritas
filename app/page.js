import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <label htmlFor="userText">What is the text for this audio:</label>
      <textarea id="userText" name="userText" rows="33" cols="66" />
      <button>Generate audio</button>
    </main>
  )
}
