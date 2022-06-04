export const EN = {
    'ABOUT US': 'ABOUT US',
    'AUTH':'AUTH',
    'LOG OUT': 'LOG OUT',
    'LOGIN': 'LOGIN',
    'LOG IN': 'LOG IN',
    'PASSWORD': 'PASSWORD',
    'Aystex karox e linel dzer govazdy':'Aystex karox e linel dzer govazdy',
    armenian: 'Armenian',
    russian: 'Russian',
    english: 'English',
    //header_text:' ',
}
export const RU = {
    'ABOUT US':'О НАС',
    'AUTH':'ВХОД',
    'LOG OUT': 'ВЫЙТИ',
    'LOGIN': 'ЛОГИН',
    'LOG IN': 'ВОЙТИ',
    'PASSWORD': 'ПАРОЛЬ',
    'Aystex karox e linel dzer govazdy':'Здесь может быть Ваша реклама',
    armenian: 'Армянский',
    russian: 'Русский',
    english: 'Английский',
    //header_text:' ',
}
export const AM = {
    'ABOUT US': 'Մեր մասին',
    'AUTH':'ՄՈՒՏՔ',
    'LOG OUT': 'ԴՈՒՐՍ ԳԱԼ',
    'LOGIN': 'ՄՈՒՏՔԱՆՈՒՆ',
    'LOG IN': 'ՄՏՆԵԼ',
    'PASSWORD': 'ԳԱՂՏՆԱԲԱՌ',
    'Aystex karox e linel dzer govazdy':'Այստեղ կարող է լինել Ձեր գոցազդը',
    armenian: 'Հայերեն',
    russian: 'Ռուսերեն',
    english: 'Անգլերեն',
    //header_text:' ',
}

const languages = {
    AM,
    RU,
    EN
}

export const getLanguage = lang => languages[lang]

