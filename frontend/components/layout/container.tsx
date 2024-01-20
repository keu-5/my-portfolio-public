//NOTE: 横幅を整えるレイアウトコンポーネント
import styles from '@/styles/layout/container.module.css'
import { ReactNode } from 'react';

export default function Container({ children, large = false }: { children: ReactNode, large?: boolean }) { //NOTE: 引数の書き方
    return ( //NOTE: if文でcssのどれを使うか指定=> tsxの引数にこの引数を書くとtrueになる
        <div className={large ? styles.large : styles.default}> 
            {children}
        </div>
    );
}