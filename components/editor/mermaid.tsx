import { FC, useState, useEffect } from 'react'
// @ts-ignore
import { mermaidAPI } from 'mermaid'
import { encode } from 'js-base64'
import Error from './error'

interface Props {
  source: string
  onEncoded?: (text: string | null) => void
}

const Mermaid: FC<Props> = ({ source, onEncoded }) => {
  const [output, setOutput] = useState<string | null>(null)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    mermaidAPI.initialize({
      startOnLoad: false,
      sequence: {
        diagramMarginX: 5,
        diagramMarginY: 15,
      },
    })
  }, [])

  useEffect(() => {
    try {
      mermaidAPI.parse(source)
      mermaidAPI.render('mermaid-diagram', source, (svg: string) => {
        setOutput(svg)
        setError(null)
        if (onEncoded) onEncoded(encode(svg))
      })
    } catch (error) {
      setError(error.str || 'Syntax error')
      if (onEncoded) onEncoded(null)
    }
  }, [source])

  return (
    <>
      {error && <Error message={error} />}
      <div dangerouslySetInnerHTML={{ __html: output ? output : '' }}></div>
    </>
  )
}

export default Mermaid
