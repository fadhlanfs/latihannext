import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from './page.module.css'
import bootstrap from './layout'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main>
        <div>
            <Link href="/tambah">
                <button className="btn btn-primary border-0 shadow-sm mb-3">ADD</button>
            </Link>
        </div>
      <div className={styles.center}>
        
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>NAME</th>
                    <th>EMAIL</th>
                    <th>GENDER</th>
                    <th>STATUS</th>
                    <th>ACTION</th>
                </tr>
            </thead>
        </table>
      </div>
    </main>
  )
}
