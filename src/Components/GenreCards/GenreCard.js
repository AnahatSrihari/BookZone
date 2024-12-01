import React from 'react'
import './GenreCard.css'
import { useProductAvailable } from "../../Context/product-context"
import { useGenre } from '../../Context/genre-context'
import { FaBookOpen, FaSkull, FaLaptopCode, FaBrain, FaHeart, FaBookReader } from 'react-icons/fa'

function GenreCard({ genretype }) {

  const {
    setFictionCategoryCheckbox,
    setThrillerCategoryCheckbox,
    setTechCategoryCheckbox,
    setPhilosophyCategoryCheckbox,
    setRomanceCategoryCheckbox,
    setMangaCategoryCheckbox, 
  } = useGenre()

  const { dispatchProductFilterOptions } = useProductAvailable()

  function selectOnlyThatFilter()
  {
    switch(genretype)
    {
      case "Fiction" :   
        setFictionCategoryCheckbox(true)
        setThrillerCategoryCheckbox(false)
        setTechCategoryCheckbox(false)
        setPhilosophyCategoryCheckbox(false)
        setRomanceCategoryCheckbox(false)
        setMangaCategoryCheckbox(false)
        dispatchProductFilterOptions({type:"SELECT_ONLY_FICTION_FILTER"})
        break;

      case "Thriller" : 
        setFictionCategoryCheckbox(false)
        setThrillerCategoryCheckbox(true)
        setTechCategoryCheckbox(false)
        setPhilosophyCategoryCheckbox(false)
        setRomanceCategoryCheckbox(false)
        setMangaCategoryCheckbox(false)
        dispatchProductFilterOptions({type:"SELECT_ONLY_THRILLER_FILTER"})
        break;

      case "Tech" : 
        setFictionCategoryCheckbox(false)
        setThrillerCategoryCheckbox(false)
        setTechCategoryCheckbox(true)
        setPhilosophyCategoryCheckbox(false)
        setRomanceCategoryCheckbox(false)
        setMangaCategoryCheckbox(false)
        dispatchProductFilterOptions({type:"SELECT_ONLY_TECH_FILTER"})
        break;

      case "Philosophy" : 
        setFictionCategoryCheckbox(false)
        setThrillerCategoryCheckbox(false)
        setTechCategoryCheckbox(false)
        setPhilosophyCategoryCheckbox(true)
        setRomanceCategoryCheckbox(false)
        setMangaCategoryCheckbox(false)
        dispatchProductFilterOptions({type:"SELECT_ONLY_PHILOSOPHY_FILTER"})
        break;

      case "Romance" : 
        setFictionCategoryCheckbox(false)
        setThrillerCategoryCheckbox(false)
        setTechCategoryCheckbox(false)
        setPhilosophyCategoryCheckbox(false)
        setRomanceCategoryCheckbox(true)
        setMangaCategoryCheckbox(false)
        dispatchProductFilterOptions({type:"SELECT_ONLY_ROMANCE_FILTER"})
        break;

      case "Manga" : 
        setFictionCategoryCheckbox(false)
        setThrillerCategoryCheckbox(false)
        setTechCategoryCheckbox(false)
        setPhilosophyCategoryCheckbox(false)
        setRomanceCategoryCheckbox(false)
        setMangaCategoryCheckbox(true)
        dispatchProductFilterOptions({type:"SELECT_ONLY_MANGA_FILTER"})
        break;

      default :    
        setFictionCategoryCheckbox(true)
        setThrillerCategoryCheckbox(true)
        setTechCategoryCheckbox(true)
        setPhilosophyCategoryCheckbox(true)
        setRomanceCategoryCheckbox(true)
        setMangaCategoryCheckbox(true)
        break;
    }  
  }

  const getIcon = (type) => {
    switch(type) {
      case "Fiction":
        return <FaBookOpen className="genre-icon" />;
      case "Thriller":
        return <FaSkull className="genre-icon" />;
      case "Tech":
        return <FaLaptopCode className="genre-icon" />;
      case "Philosophy":
        return <FaBrain className="genre-icon" />;
      case "Romance":
        return <FaHeart className="genre-icon" />;
      case "Manga":
        return <FaBookReader className="genre-icon" />;
      default:
        return null;
    }
  }

  return (
    <div onClick={selectOnlyThatFilter} className='genre-card'>
      {getIcon(genretype)}
      <p className="genre-text">{genretype}</p>
    </div>
  )
}

export { GenreCard }