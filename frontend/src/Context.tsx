import {SetStateAction, createContext} from "react";

export interface AppContextType {
  isLoading: boolean
  setIsLoading: React.Dispatch<SetStateAction<boolean>>
}

export const AppContext = createContext<AppContextType>(null as unknown as AppContextType);