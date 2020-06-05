import postsContext from '../../contexts/postsContext'
import Post from './post'
import Loadable from '../../hoc/loadable/loadable'

const postsList = () => {
  const [postsState, dispatch] = postsContext.usePosts()

  const postItems = Object.values(postsState.posts).map((p) => (
    <Post key={p.id} post={p} />
  ))

  return (
    <div data-test="posts-list-component">
      <Loadable loading={postsState.loading}>
        <h1>Posts</h1>
        <div data-test="posts-list-section" className="posts-list-section">
          {postItems}
        </div>
      </Loadable>
    </div>
  )
}

export default postsList
