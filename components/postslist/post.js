import PropTypes from 'prop-types'

const post = ({ post }) => {
  return (
    <div data-test="post-component" className="card border-succes mb-3">
      <div className="card-body">
        <h5 className="card-title">{post.title}</h5>
      </div>
    </div>
  )
}

export default post
