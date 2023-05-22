import {useCallback, useEffect, useState} from 'react';
import './App.css';
import {AppContext, AppContextType} from './Context';
import Home from './Home';

function App() {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const lockScroll = useCallback(() => {
    document.body.style.overflow = 'hidden';
  }, [])

  const unlockScroll = useCallback(() => {
    document.body.style.overflow = '';
  }, [])

  useEffect(() => {
    if (isLoading) {
      lockScroll();
    } else {
      unlockScroll();
    }
  }, [isLoading, lockScroll, unlockScroll]);

  const appContext: AppContextType = {
    isLoading,
    setIsLoading
  }

  return (
    <AppContext.Provider value={appContext}>
      <Home />
    </AppContext.Provider>
  )
}

export default App
