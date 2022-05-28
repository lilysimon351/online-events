export const EN = {
    movies:'MOVIES',
    aboutus: 'ABOUT US',
    auth:'AUTH',
    logOut: 'LOG OUT',
    login: 'LOGIN',
    password: 'PASSWORD',
    armenian: 'Armenian',
    russian: 'Russian',
    english: 'English',
}
export const RU = {
    movies:'ФИЛЬМЫ',
    aboutus: 'О НАС',
    auth:'ВХОД',
    logOut: 'ВЫЙТИ',
    login: 'ЛОГИН',
    password: 'ПАРОЛЬ',
    armenian: 'Армянский',
    russian: 'Русский',
    english: 'Английский'
}
export const AM = {
    movies:'ՖԻԼՄԵՐ',
    aboutus: 'Մեր մասին',
    auth:'ՄՈՒՏՔ',
    logOut: 'ԴՈՒՐՍ ԳԱԼ',
    login: 'ՄՈՒՏՔԱՆՈՒՆ',
    password: 'ԳԱՂՏՆԱԲԱՌ',
    armenian: 'Հայերեն',
    russian: 'Ռուսերեն',
    english: 'Անգլերեն'
}

const languages = {
    AM,
    RU,
    EN
}

export const getLanguage = lang => languages[lang]
