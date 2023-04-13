import * as React from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

import "./App.css";
import LandingPage from "./Components/LandingPage";
import Footer from "./Components/Footer";
import NavBar from "./Components/NavBar";
import Discover from "./Components/Discover";
import Job from "./Components/Jobs";
import Learning from "./Components/Learning";
import People from "./Components/People";
import { Routes, Route } from "react-router-dom";
import JoinNow from "./Components/JoinNow";
import SignIn from "./Components/SignIn";
import { Switch } from '@mui/material';

function App() {
  const [themeMode, setThemeMode] = React.useState('light');

  const toggleTheme = () => {
    setThemeMode(prevMode => (prevMode === 'light' ? 'dark' : 'light'));
  };

  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode: themeMode === 'dark' ? 'dark' : 'light',
          text: {
            primary: themeMode === 'dark' ? '#ffffff' : '#000000',
            secondary: themeMode === 'light' ? '#ffffff' : '#555555',
          },
          background: {
            default: themeMode === 'dark' ? '#333333' : '#ffffff',
          },
        },
      }),
    [themeMode],
  );

  const darkMode = themeMode === 'dark';

  React.useEffect(() => {
    setThemeMode(prefersDarkMode ? 'dark' : 'light');
  }, [prefersDarkMode]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="App">
        <header>
          <NavBar />
        </header>
        <body>
          <Routes>
            <Route exact path='/' element={<LandingPage />} />
            <Route path='discover' element={<Discover />} />
            <Route path='job' element={<Job />} />
            <Route path='learning' element={<Learning />} />
            <Route path='people' element={<People />} />
            <Route path='join' element={<JoinNow />} />
            <Route path='signin' element={<SignIn />} />
          </Routes>
        </body>
        <footer className='darkMode'>
          <div className='darkModeToggle'>
            <Switch onClick={toggleTheme} />
            <span>{darkMode ? 'Dark Mode' : 'Light Mode'}</span>
          </div>
          <div className="names">
            <p>Jeffrey Zheng</p>
            <p>|</p>
            <p>Chris Artrip</p>
          </div>
        </footer>
      </div>
    </ThemeProvider>
  );
}

export default App;