import { createContext,useContext } from "react";
export const Themecontext=createContext({
    thememode:"Light",
    darktheme:()=>{},
    lighttheme:()=>{},
});

export const ThemeProvider=Themecontext.Provider

export default function useTheme(){
    return useContext(Themecontext)
}
