import { FC, ReactNode } from 'react'
import styles from './controls.module.css'

interface ControlItem {
  label: string | ReactNode
  onClick?: () => void
}

interface Props {
  items?: ControlItem[]
}

const Controls: FC<Props> = ({ items }) => (
  <div className={styles.root}>
    {items?.map(({ label, onClick }, index) => (
      <button key={index} onClick={() => (onClick ? onClick() : null)}>
        {label}
      </button>
    ))}
  </div>
)

export default Controls
