import React, { createContext } from 'react'

interface IOpenDocumentContext {
  data: string
  updateData: React.Dispatch<React.SetStateAction<string>>
}

// eslint-disable-next-line import/prefer-default-export
export const OpenDocumentContext = createContext<IOpenDocumentContext>({
  data: '',
  updateData: () => {}
})
