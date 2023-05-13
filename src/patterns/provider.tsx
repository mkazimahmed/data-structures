// https://codesandbox.io/embed/quirky-sun-9djpl

import { Button } from "@fluentui/react-components";
import React from "react";

const initialData = {
  theme: "light",
};

export const ThemeContext = React.createContext(initialData);

// HOC
function ThemeProvider({ children }) {
  const themes = {
    light: "#fff",
    dark: "#aaa",
  };

  const [theme, setTheme] = React.useState("light");

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const providerValue = {
    theme,
    toggleTheme,
  };

  return (
    <ThemeContext.Provider value={providerValue}>
      {children}
    </ThemeContext.Provider>
  );
}

function App() {
  return (
    <ThemeProvider>
      <SideBar />
    </ThemeProvider>
  );
}

// hooks
// In different file
// import { ThemeContext } from './provider'

const useThemeContext = () => {
  const context = React.useContext(ThemeContext);
  return context;
};

function SideBar() {
  const context = useThemeContext();

  return (
    <div>
      <Button onClick={context.toggleTheme}>Switch Theme</Button>
    </div>
  );
}

function MainContent() {
  const context = useThemeContext();

  return <div>{context.theme}</div>;
}

function HOC(Element, url) {
  return function (props: componentProps) {
    // do something
    return <Element {...props} />;
  };
}
