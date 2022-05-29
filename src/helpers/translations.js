export const EN = {
    movies:'MOVIES',
    aboutus: 'ABOUT US',
    auth:'AUTH',
    logOut: 'LOG OUT',
    login: 'LOGIN',
    password: 'PASSWORD',
    'Aystex karox e linel dzer govazdy':'Aystex karox e linel dzer govazdy',
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
    'Aystex karox e linel dzer govazdy':'Здесь может быть Ваша реклама',
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
    'Aystex karox e linel dzer govazdy':'Այստեղ կարող է լինել Ձեր գոցազդը',
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
