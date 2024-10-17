import React from 'react'
import { AppProvider } from './context/AppContext'
import Layout from './components/layout/Layout'

const App = () => {
  return (
    <AppProvider>
      <Layout/>
    </AppProvider>
  )
}

export default App