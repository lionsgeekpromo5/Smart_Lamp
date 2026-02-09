import { createContext, useState } from "react";

export const LampContext = createContext()


export const LampProvider = ({children}) => {
    const [darkMode, setDarkMode] = useState(false)
    const [lightOn, setLightOn] = useState(false)

    const all = {darkMode, setDarkMode, lightOn, setLightOn}

    return (
        <LampContext.Provider value={all}>
            {children}
        </LampContext.Provider>
    )
}
