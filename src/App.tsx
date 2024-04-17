import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import '@mantine/charts/styles.css';
import './App.css'
import { AppShell, MantineProvider } from '@mantine/core';
import theme from './assets/script/theme';
import Router from "./router/router";
import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';
import { GlobalContext } from './assets/script/globalContext';
import { useLocalStorage } from '@mantine/hooks';

function App() {
  const [colorScheme, setColorScheme] = useLocalStorage<'light' | 'dark'>({ key: 'colorScheme', defaultValue: "dark" })

  return (
    <GlobalContext.Provider value={{ colorScheme }}>
      <MantineProvider theme={theme}>
        <Router>
          <AppShell>
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
