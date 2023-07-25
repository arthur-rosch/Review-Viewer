import { createContext, ReactNode, useState } from 'react'

export interface ReviewViewerContextType {
  itemId: string
  shopeId: string
  handleSetItemId: (itemId: string) => void
  handleSetShopeId: (shopeId: string) => void
}

interface ReviewViewerContextProviderProps {
  children: ReactNode
}

export const ReviewViewerContext = createContext({} as ReviewViewerContextType)

export function ReviewViewerContextProvider({
  children,
}: ReviewViewerContextProviderProps) {
  const [itemId, setItemId] = useState('')
  const [shopeId, setShopeId] = useState('')

  function handleSetItemId(itemId: string) {
    setItemId(itemId)
  }
  function handleSetShopeId(shopeId: string) {
    setShopeId(shopeId)
  }

  return (
    <ReviewViewerContext.Provider
      value={{ itemId, shopeId, handleSetItemId, handleSetShopeId }}
    >
      {children}
    </ReviewViewerContext.Provider>
  )
}
