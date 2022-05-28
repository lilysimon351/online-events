import {createContext, useCallback, useContext, useState} from "react";
import {LANGUAGES} from "../helpers/constants";
import {getLanguage} from "../helpers/translations";

const LanguageContext = createContext(null)

const LanguageProvider = ({children}) => {
    const [activeLanguage, setActiveLanguage] = useState(
        getLanguage(localStorage.getItem('language') || LANGUAGES[0])
    )

    const changeLanguage = useCallback(lang => {
        setActiveLanguage(getLanguage(lang))
        localStorage.setItem('language', lang.toString())
    }, [])

    const t = useCallback(word => {
        return activeLanguage[word] || word
    }, [activeLanguage])

    return <LanguageContext.Provider value={{activeLanguage, changeLanguage, t}}>
        {children}
    </LanguageContext.Provider>
}

export const useTranslate = () => useContext(LanguageContext)

export default LanguageProvider
