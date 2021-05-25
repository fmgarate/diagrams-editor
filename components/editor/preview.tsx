import { FC, useContext, useState } from 'react'
import dynamic from 'next/dynamic'
import { FaFileDownload } from 'react-icons/fa'
import { EditorContext } from '@/lib/context'
import Controls from './controls'
import styles from './preview.module.css'

const Mermaid = dynamic(() => import('@/components/editor/mermaid'), {
  ssr: false,
})

interface Props {
  base64SVG: string
}

const Download: FC<Props> = ({ base64SVG }) => (
  <a href={`data:image/svg+xml;base64,${base64SVG}`} download="diagram.svg">
    <FaFileDownload />
  </a>
)

const Preview: FC = () => {
  const { source } = useContext(EditorContext)
  const [base64SVG, setBase64SVG] = useState<string | null>(null)

  return (
    <div className={styles.root}>
      <Controls
        items={base64SVG ? [{ label: <Download base64SVG={base64SVG} /> }] : []}
      />
      <Mermaid
        source={source}
        onEncoded={(base64SVG) => setBase64SVG(base64SVG)}
      />
    </div>
  )
}

export default Preview
