import { Link } from 'react-router-dom'


function SearchFavorite({category, state}) {
  
  return (
    <div>
      {category?.map((item, index)=> (
      <Link to = {state==='hotel'? `/location/${item}` :`/search/${item}`} key={item}>
          <li  className='my-3.5 hover:text-primary'><span className='mr-3.5 text-primary font-extrabold text-sm'>{index + 1}</span>{item}</li>
      </Link>
      ))}
      
    </div>
  )
}

export default SearchFavorite


export function SearchFavoriteSecond({category, state}) {
  
  return (
    <div>
      {category?.map((item, index)=> (
      <Link to = {state==='hotel'? `/location/${item}` :`/search/${item}`} key={item}>
          <li  className='my-3.5 hover:text-primary'><span className='mr-3.5 text-primary font-extrabold text-sm'>{index + 5}</span>{item}</li>
      </Link>
      ))}
      
    </div>
  )
}
