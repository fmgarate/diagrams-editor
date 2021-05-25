import { FC, useReducer } from 'react'
import styles from './editor.module.css'
import Preview from './preview'
import Source from './source'
import { EditorContext } from '@/lib/context'
import { editor } from '@/lib/reducer'

interface Props {
  source?: string
}

const Editor: FC<Props> = ({ source: initialSource }) => {
  const [{ source }, dispatch] = useReducer(editor, {
    source: initialSource || '',
  })

  return (
    <EditorContext.Provider value={{ source, dispatch }}>
      <div className={styles.root}>
        <Preview />
        <Source />
      </div>
    </EditorContext.Provider>
  )
}

export default Editor
