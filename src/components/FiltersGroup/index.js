import {BsSearch} from 'react-icons/bs'
import './index.css'

const FiltersGroup = props => {
  const {searchForInputItem, clearFiltersApplied} = props

  const searchForItem = event => {
    const valueInput = event.target.value
    if (event.key === 'Enter') {
      searchForInputItem(valueInput)
    }
  }

  const clearAllFilters = () => {
    clearFiltersApplied()
  }

  const renderCategoryList = () => {
    const {categoryOptions, onClickSelectCategory} = props

    return (
      <div className="category-container">
        <h1 className="category-heading">Category</h1>
        {categoryOptions.map(eachCategory => {
          const selectCategory = () => {
            onClickSelectCategory(eachCategory.categoryId)
          }

          return (
            <p
              key={eachCategory.categoryId}
              className="list-category-item"
              onClick={selectCategory}
            >
              {eachCategory.name}
            </p>
          )
        })}
      </div>
    )
  }

  const renderRatingList = () => {
    const {ratingsList, onClickSelectRating} = props
    return (
      <ul className="rating-list-container">
        <h1 className="rating-heading">Rating</h1>
        {ratingsList.map(eachRating => {
          const selectedRating = () => {
            onClickSelectRating(eachRating.ratingId)
          }

          return (
            <li
              className="list-rating-item"
              key={eachRating.ratingId}
              onClick={selectedRating}
            >
              <img
                src={eachRating.imageUrl}
                alt={`rating ${eachRating.ratingId}`}
                className="rating-image"
              />
              <p className="rating-up">& up</p>
            </li>
          )
        })}
      </ul>
    )
  }

  return (
    <div className="filters-group-container">
      <div className="search-bar-container">
        <input
          type="search"
          placeholder="Search"
          className="search-bar"
          onKeyDown={searchForItem}
        />
        <BsSearch className="search-icon" />
      </div>
      {renderCategoryList()}
      {renderRatingList()}
      <button
        className="clear-filters-button"
        type="button"
        onClick={clearAllFilters}
      >
        Clear Filters
      </button>
    </div>
  )
}

export default FiltersGroup
