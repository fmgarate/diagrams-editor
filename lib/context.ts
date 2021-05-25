import { createContext } from 'react'
import { Action } from './reducer'

interface Context {
  source: string
  dispatch?: (action: Action) => void
}

export const EditorContext = createContext<Context>({
  source: '',
})
