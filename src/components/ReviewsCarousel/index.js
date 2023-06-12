// Write your code here
import {Component} from 'react'

import './index.css'

class reviewApp extends Component {
  state = {reviewObjectIndex: 0}

  onClickingRightArrow = () => {
    const {reviewObjectIndex} = this.state
    const {reviewsList} = this.props
    if (reviewObjectIndex < reviewsList.length - 1) {
      this.setState(prevState => ({
        reviewObjectIndex: prevState.reviewObjectIndex + 1,
      }))
    }
  }

  onClickingLeftArrow = () => {
    const {reviewObjectIndex} = this.state
    if (reviewObjectIndex > 0) {
      this.setState(prevState => ({
        reviewObjectIndex: prevState.reviewObjectIndex - 1,
      }))
    }
  }

  filterTheObject = () => {
    const {reviewsList} = this.props
    const {reviewObjectIndex} = this.state
    const resultObject = reviewsList[reviewObjectIndex]
    return resultObject
  }

  render() {
    const {imgUrl, username, companyName, description} = this.filterTheObject()

    return (
      <div className="background-container">
        <h1 className="heading">Reviews</h1>
        <img src={imgUrl} className="profile-image" alt={username} />
        <div className="review-container">
          <button
            className="button"
            type="submit"
            data-testid="leftArrow"
            onClick={this.onClickingLeftArrow}
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
              alt="left arrow"
              className="arrows"
            />
          </button>
          <p className="user-name">{username}</p>
          <button
            className="button"
            type="submit"
            data-testid="rightArrow"
            onClick={this.onClickingRightArrow}
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
              alt="right arrow"
              className="arrows"
            />
          </button>
        </div>
        <p className="company-name">{companyName}</p>
        <p className="description">{description}</p>
      </div>
    )
  }
}

export default reviewApp
