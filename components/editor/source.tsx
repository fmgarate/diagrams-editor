import { FC, useContext, useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { FaWindowClose, FaWindowMaximize } from 'react-icons/fa'
import { EditorContext } from '@/lib/context'
import Controls from './controls'
import styles from './source.module.css'

// TODO: set content type from options
const sourceType = 'sequenceDiagram'

interface Inputs {
  source: string
}

const Source: FC = () => {
  const [visible, setVisible] = useState<boolean>(true)
  const { source, dispatch } = useContext(EditorContext)
  const { register, watch, getValues } = useForm<Inputs>({
    defaultValues: { source },
  })

  useEffect(() => {
    const source = getValues('source')
    if (dispatch && source.length)
      dispatch({ type: 'update', payload: `${sourceType} \n${source}` })
  }, [watch('source')])

  return (
    <div
      className={styles.root}
      style={{
        height: visible ? 320 : 'auto',
      }}
    >
      <div className={styles.inner}>
        <Controls
          items={[
            {
              label: visible ? <FaWindowClose /> : <FaWindowMaximize />,
              onClick: () => setVisible(!visible),
            },
          ]}
        />
        {visible && (
          <textarea {...register('source', { required: true })}></textarea>
        )}
      </div>
    </div>
  )
}

export default Source
