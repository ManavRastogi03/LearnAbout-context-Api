# Context API README
This README provides an overview of the Context API concepts and implementation details learned during the development process. The Context API in React is a powerful tool for managing state across components without prop drilling.

# Table of Contents
## Introduction
## Context Configuration
## Theme Provider
## Custom Hook
## Application Integration
## GitHub Data Fetching
### 1. Introduction
The Context API in React allows you to share values, such as state or functions, across components without passing them explicitly through props. This can greatly simplify the management of global or shared state within your application.

### 2. Context Configuration
In your application, create a context using createContext from React. Define the context's initial state and associated functions.

```javascript
import { createContext, useContext } from "react";

export const Themecontext = createContext({
    thememode: "Light",
    darktheme: () => {},
    lighttheme: () => {},
});

export const ThemeProvider = Themecontext.Provider;

export default function useTheme() {
    return useContext(Themecontext);
}
```
### 3. Theme Provider
Utilize the ThemeProvider component to wrap your application with the configured context provider. This makes the theme-related context available to all components within its scope.

```javascript

import { ThemeProvider } from './context/theme';

function App() {
    // ... existing code
    return (
        <ThemeProvider value={{ thememode, darktheme, lighttheme }}>
            {/* Your application components */}
        </ThemeProvider>
    );
}
```
### 4. Custom Hook
Create a custom hook, in this case, useTheme, using the useContext hook. This hook can be used within components to access the shared theme context.

### 5. Application Integration
Integrate the theme-related context into your application components, such as the ThemeBtn and Card components. Use the useTheme hook to access the context and update the theme mode.

```javascript

import useTheme from './context/theme';

function ThemeBtn() {
    const { darktheme, lighttheme } = useTheme();
    // ... existing code
}

function Card() {
    const { thememode } = useTheme();
    // ... existing code
}
```
### 6. GitHub Data Fetching
Extend the use of the Context API to manage global state related to GitHub data fetching. In the example, the Github component fetches data from the GitHub API and displays the follower count and profile picture.

```javascript

import React, { useState, useEffect } from 'react';

function Github() {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('https://api.github.com/users/ManavRastogi03')
            .then(response => response.json())
            .then(data => {
                console.log(data);
                setData(data);
            });
    }, []);

    return (
        <div className='text-center m-4 bg-grey-700 text-black p-4 text-3xl '>
            Github Follower: {data.followers}
            <br />
            <img src={data.avatar_url} alt="Git-Picture" />
        </div>
    );
```
Feel free to explore additional Context API features and consult the official documentation for in-depth information: React Context Documentation.

#Images

![Screenshot 2023-12-23 144358](https://github.com/ManavRastogi03/LearnAbout-context-Api/assets/133610007/914a3d0f-f157-42c9-ae66-9d66d6294e35)
![Screenshot 2023-12-23 144411](https://github.com/ManavRastogi03/LearnAbout-context-Api/assets/133610007/ac42959a-0e1b-4e85-aeaa-4c8662e6c70a)
