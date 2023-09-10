import Button from './Button'




function LocationSideButtonList({category}) {
  return (
    <>
    <ul className='flex  flex-col  flex-grow '>
      {category.map((item)=>{
        return(
        <li key={item} aria-label={item}><Button  type='button' className='hover:text-black w-[100%] text-gray2 font-[0.7rem] px-4 py-7 text-[0.9rem] border-b-[0.1rem] border-[#E1E1E1]'>{item}</Button></li>
        )
      })}
    </ul>
    </>
  )
}

export default LocationSideButtonList

