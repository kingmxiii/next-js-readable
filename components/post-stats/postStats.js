import React from 'react'

const postStats = ({ commentsCount, votes }) => {
  return (
    <div
      data-test="post-stats-component"
      className="d-flex flex-row justify-content-end"
    >
      <div className="mr-3">
        <i className="far fa-comments mr-1" />
        <span data-test="comments-count">{commentsCount}</span>
      </div>
      <div>
        <i className="far fa-thumbs-up mr-1" />
        <span data-test="votes-count">{votes}</span>
      </div>
    </div>
  )
}

export default postStats
