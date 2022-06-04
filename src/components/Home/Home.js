
import MovieListing from '../MovieListing/MovieListing';
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
