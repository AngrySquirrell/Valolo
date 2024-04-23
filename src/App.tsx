import '@mantine/charts/styles.css';
import './App.css'
import { AppShell, MantineProvider } from '@mantine/core';
import theme from './script/theme';
import Router from "./router/router";
import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';
import { GlobalContext, contextModel } from './script/globalContext';
import '@mantine/core/styles.css';
import { useValorantAPI } from './script/hooks/useValorantAPI';
import { useEffect } from 'react';

function App() {

  const defaultContext: Partial<contextModel> = {
    colorScheme: 'dark',
    language: "en-US",
  }
  // let { data, invalidate } = useValorantAPI({ root: "agents" })
  // useEffect(() => {
  //   console.log('Datashboard', data)
  // }, [data])

  return (
    <GlobalContext.Provider value={defaultContext}>
      <MantineProvider theme={theme}>
        <Router>
          <AppShell
            navbar={{ width: 192, breakpoint: "100vw" }}
          // w={"calc(100vw - 144px)"}
          >
            <AppShell.Navbar>
              <Navbar />
            </AppShell.Navbar>
            <AppShell.Main>
              <Outlet />
            </AppShell.Main>
          </AppShell>
        </Router>
      </MantineProvider>
    </GlobalContext.Provider>
  )
}

export default App
