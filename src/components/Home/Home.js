
import MovieListing from '../MovieListing/MovieListing';
import { LANGUAGES } from "../../helpers/constants";
import {useTranslate} from "../../context/LanguageProvider"


function Home({ movie }) {
  const {t, changeLanguage} = useTranslate()
 
  return (
      <div>
    <MovieListing movie ={t(movie)}/>
    </div>
    
  )
}

export default Home
