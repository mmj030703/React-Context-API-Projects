import { useEffect, useState } from 'react';
import './App.css'
import Card from './components/Card'
import { ThemeContextProvider } from './context/themeContext';

function App() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const html = document.querySelector('html');
    html.classList.remove('light', 'dark');
    
    html.classList.add(theme);
  }, [theme]);

  return (
    <ThemeContextProvider value={{ currentThemeVal: theme, themeToggler: setTheme }}>
      <div className='h-dvh -translate-y-20 flex justify-center items-center'>
        <Card />
      </div>
    </ThemeContextProvider>
  )
}

export default App;
