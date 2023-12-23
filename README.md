
# Context API README
This README provides an overview of the Context API concepts learned during the development process. The Context API in React allows you to manage global state and share values between components without prop drilling.

# Table of Contents
## Introduction
## Context Definition
## ThemeProvider
## useTheme Hook
# Usage in Application
1. Introduction
The Context API in React is a mechanism for sharing values like themes, authentication status, or any other global state across the component tree without passing them explicitly as props.

2. Context Definition
The createContext function is used to create a context object. In this example, a ThemeContext is created with initial values for the theme mode, and functions to toggle between light and dark themes.

```javascript

import { createContext, useContext } from "react";

export const ThemeContext = createContext({
    thememode: "Light",
    darktheme: () => {},
    lighttheme: () => {},
});
```
3. ThemeProvider
The ThemeProvider component is used to wrap your application components and provide the context values to them. In this case, it is aliased as ThemeContext.Provider.

```javascript

export const ThemeProvider = ThemeContext.Provider;
4. useTheme Hook
The useTheme custom hook is created to conveniently access the values from the ThemeContext. This hook is then used within components to access the theme mode and theme toggle functions.

javascript
Copy code
import { useContext } from 'react';
import { ThemeContext } from './path-to-context';

export default function useTheme() {
    return useContext(ThemeContext);
}
```
5. Usage in Application
In your application, you can use the ThemeProvider to wrap your components and utilize the useTheme hook to access and update the theme state.

```javascript

import { useState } from 'react';
import { ThemeProvider } from './context/theme';
import { useEffect } from 'react';
import ThemeBtn from './component/ThemeBtn';
import Card from './component/Card';
import useTheme from './path-to-useTheme-hook';

function App() {
  const [themeMode, setThemeMode] = useState('light');
  const { lightTheme, darkTheme } = useTheme();

  useEffect(() => {
    const htmlElement = document.querySelector('html');
    htmlElement.classList.remove('light', 'dark');
    htmlElement.classList.add(themeMode);
  }, [themeMode]);

  return (
    <ThemeProvider
      value={{
        themeMode,
        lightTheme,
        darkTheme,
      }}
    >
      {/* Your application components */}
    </ThemeProvider>
  );
}
```
Feel free to explore additional Context API features and consult the official documentation for in-depth information: React Context Documentation.

#Images

![Screenshot 2023-12-23 144358](https://github.com/ManavRastogi03/LearnAbout-context-Api/assets/133610007/914a3d0f-f157-42c9-ae66-9d66d6294e35)
![Screenshot 2023-12-23 144411](https://github.com/ManavRastogi03/LearnAbout-context-Api/assets/133610007/ac42959a-0e1b-4e85-aeaa-4c8662e6c70a)
