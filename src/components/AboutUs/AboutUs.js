import { LANGUAGES } from "../../helpers/constants";
import { useTranslate } from "../../context/LanguageProvider"

const AboutUs = () => {
  const {t, changeLanguage} = useTranslate()
  
{/* <div className={classes.userLogo}>
        <img src="https://png.pngtree.com/png-vector/20190710/ourmid/pngtree-user-vector-avatar-png-image_1541962.jpg" alt="#"/>
      </div> */}

  return (
    <div>
      <h1>{t('Aystex karox e linel dzer govazdy')}</h1>
    </div>
  )
}

export default AboutUs
