import PropTypes from 'prop-types'
import PostStats from '../post-stats/postStats'

const post = ({ post }) => {
  return (
    <div data-test="post-component" className="card border-succes mb-3">
      <div className="card-body">
        <h5 className="card-title">{post.title}</h5>
      </div>
      <div className="card-footer">
        <PostStats
          commentsCount={Object.values(post.comments).length}
          votes={post.voteScore}
        />
      </div>
    </div>
  )
}

export default post
