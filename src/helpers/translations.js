export const EN = {
    movies:'MOVIES',
    aboutus: 'ABOUT US',
    auth:'AUTH',
    logout: 'LOG OUT',
    login: 'LOGIN',
    password: 'PASSWORD',
    'Aystex karox e linel dzer govazdy':'Aystex karox e linel dzer govazdy',
    armenian: 'Armenian',
    russian: 'Russian',
    english: 'English',
    header_text:' ',
}
export const RU = {
    movies:'ФИЛЬМЫ',
    aboutus:'О НАС',
    auth:'ВХОД',
    logout: 'ВЫЙТИ',
    login: 'ЛОГИН',
    password: 'ПАРОЛЬ',
    'Aystex karox e linel dzer govazdy':'Здесь может быть Ваша реклама',
    armenian: 'Армянский',
    russian: 'Русский',
    english: 'Английский',
    header_text:' ',
}
export const AM = {
    movies:'ՖԻԼՄԵՐ',
    aboutus: 'Մեր մասին',
    auth:'ՄՈՒՏՔ',
    logout: 'ԴՈՒՐՍ ԳԱԼ',
    login: 'ՄՈՒՏՔԱՆՈՒՆ',
    password: 'ԳԱՂՏՆԱԲԱՌ',
    'Aystex karox e linel dzer govazdy':'Այստեղ կարող է լինել Ձեր գոցազդը',
    armenian: 'Հայերեն',
    russian: 'Ռուսերեն',
    english: 'Անգլերեն',
    header_text:' ',
}

const languages = {
    AM,
    RU,
    EN
}

export const getLanguage = lang => languages[lang]

