import {BsSearch} from 'react-icons/bs'

import './index.css'

const FiltersGroup = props => {
  const renderCategoryOptions = () => {
    const {categoryOptions} = props
    return categoryOptions.map(category => {
      const {activeCategoryId, onChangeCategory} = props
      const onClickCategoryOption = () => onChangeCategory(category.categoryId)
      const isActive = activeCategoryId === category.categoryId
      const ClassName = isActive ? 'category-option special' : 'category-option'

      return (
        <li
          className="category"
          key={category.categoryId}
          onClick={onClickCategoryOption}
        >
          <p className={ClassName}>{category.name}</p>
        </li>
      )
    })
  }

  const renderRatingList = () => {
    const {ratingsList} = props
    return ratingsList.map(rating => {
      const {onChangeRating, activeRatingId} = props
      const onClickRating = () => onChangeRating(rating.ratingId)
      const isActive = activeRatingId === rating.ratingId
      const className = isActive ? 'star special' : 'start'
      return (
        <li className="rater" key={rating.ratingId} onClick={onClickRating}>
          <img
            className="rating-logo"
            src={rating.imageUrl}
            alt={`rating ${rating.ratingId}`}
          />
          <p className={className}>& up</p>
        </li>
      )
    })
  }

  const renderCategoryProductionList = () => (
    <>
      <h1>Category</h1>
      <ul className="category-list-container">{renderCategoryOptions()}</ul>
    </>
  )

  const renderRatingProductionList = () => (
    <>
      <h1>Rating</h1>
      <ul className="rating-list-container">{renderRatingList()}</ul>
    </>
  )

  const onEnterSearchInputResult = event => {
    const {onEnterKey} = props
    if (event.key === 'Enter') {
      onEnterKey()
    }
  }

  const onChangeUserSearchResult = event => {
    const {onSearchInput} = props
    onSearchInput(event.target.value)
  }

  const renderSearchInput = () => {
    const {searchInput} = props

    return (
      <div className="search-bar-container">
        <input
          className="input-ele"
          placeholder="Search"
          type="search"
          value={searchInput}
          onChange={onChangeUserSearchResult}
          onKeyDown={onEnterSearchInputResult}
        />
        <BsSearch className="BsSearch" />
      </div>
    )
  }
  const {clearInput} = props
  return (
    <div className="filters-group-container">
      {renderSearchInput()}
      {renderCategoryProductionList()}
      {renderRatingProductionList()}
      <button className="btn-clear" type="button" onClick={clearInput}>
        Clear Filters
      </button>
    </div>
  )
}

export default FiltersGroup
