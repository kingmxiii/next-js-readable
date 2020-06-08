import { shallow } from 'enzyme'
import PostStats from './postStats'

describe('PostStats', () => {
  let props
  let wrapper

  beforeEach(() => {
    props = { commentsCount: 2, votes: 7 }
    wrapper = shallow(<PostStats {...props} />)
  })

  it('renders without a problem', () => {
    const component = wrapper.find('[data-test="post-stats-component"]')
    expect(component.length).toBe(1)
  })

  it('renders tthe right comments amount', () => {
    const commentCount = wrapper.find("[data-test='comments-count']")
    expect(commentCount.text()).toBe(props.commentsCount.toString())
  })

  it('renders the right votes amount', () => {
    const votesCount = wrapper.find("[data-test='votes-count']")
    expect(votesCount.text()).toBe(props.votes.toString())
  })
})
