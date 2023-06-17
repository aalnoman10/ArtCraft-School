import { createContext, useEffect, useState } from "react";

export const Theme = createContext()

const ThemeProvider = ({ children }) => {
    const [themeDark, setThemeDark] = useState(false);

    useEffect(() => {
        const strTheme = localStorage.getItem("theme");
        setThemeDark(strTheme == "true" ? true : false)
    }, [themeDark])

    const handleTheme = () => {
        setThemeDark(!themeDark)
        localStorage.setItem("theme", `${!themeDark}`);
    }

    const theme = {
        themeDark,
        setThemeDark,
        handleTheme
    }

    return (
        <Theme.Provider value={theme}>
            {children}
        </Theme.Provider>
    );
};

export default ThemeProvider;