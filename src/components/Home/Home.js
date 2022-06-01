
import MovieListing from '../MovieListing/MovieListing'

function Home({movies}) {
   console.log(movies)
  return (
      <div>
    <MovieListing movies={movies}/>
    
    </div>
    
  )
}

export default Home
