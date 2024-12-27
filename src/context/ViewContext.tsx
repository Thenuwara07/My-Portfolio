
import { createContext, useContext, useState } from 'react'

interface ViewContextType {
  isAboutOnly: boolean
  setIsAboutOnly: (value: boolean) => void
}

const ViewContext = createContext<ViewContextType | undefined>(undefined)

export function ViewProvider({ children }: { children: React.ReactNode }) {
  const [isAboutOnly, setIsAboutOnly] = useState(false)

  return (
    <ViewContext.Provider value={{ isAboutOnly, setIsAboutOnly }}>
      {children}
    </ViewContext.Provider>
  )
}

export function useView() {
  const context = useContext(ViewContext)
  if (context === undefined) {
    throw new Error('useView must be used within a ViewProvider')
  }
  return context
}

