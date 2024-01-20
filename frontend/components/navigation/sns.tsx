import styles from '@/styles/navigation/sns.module.css'
import Image from "next/legacy/image"
import note from '@/images/icon.svg'
import qiita from '@/images/favicon.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faInstagram,
    faGithub,
    
} from '@fortawesome/free-brands-svg-icons'

export default function Sns() {
    return (
        <ul className={styles.list}>
            <li>
                <a href="https://github.com/keu-5" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faGithub} />
                    <span className='sr-only'>Github</span>
                </a>
            </li>
            <li>
                <a href="https://note.com/keu5" target="_blank" rel="noopener noreferrer">
                    <Image src={note} alt="note" width={30} height={30} />
                    <span className='sr-only'>note</span>
                </a>
            </li>
            <li>
                <a href="https://qiita.com/keu5" target="_blank" rel="noopener noreferrer">
                    <Image src={qiita} alt="Qiita" width={30} height={30} />
                    <span className='sr-only'>Qiita</span>
                </a>
            </li>
        </ul>
    )
}