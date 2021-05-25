import { FC } from 'react'
import styles from './error.module.css'

interface Props {
  message: string
}

const Error: FC<Props> = ({ message }) => (
  <div className={styles.root}>{message}</div>
)

export default Error
