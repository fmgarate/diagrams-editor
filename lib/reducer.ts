export interface State {
  source: string
}

export interface Action {
  type: 'update' | 'reset'
  payload: string
}

export const editor = (state: State, action: Action): State => {
  switch (action.type) {
    case 'update':
      return { ...state, source: action.payload }
    case 'reset':
      return { ...state, source: '' }
    default:
      return state
  }
}
