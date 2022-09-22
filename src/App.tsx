import React, { useMemo, useState } from 'react'
import './App.scss'
import MainView from './components/main-view/MainView'
import { OpenDocumentContext } from './contexts/document'

const App = () => {
  const [data, updateData] = useState('')
  const value = useMemo(
    () => ({
      data,
      updateData
    }),
    [data, updateData]
  )
  return (
    <OpenDocumentContext.Provider value={value}>
      <MainView />
    </OpenDocumentContext.Provider>
  )
}

export default App
