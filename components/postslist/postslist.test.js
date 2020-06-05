import { shallow } from 'enzyme'
import postsContext from '../../contexts/postsContext'

import PostsList from './postslist'
import { interopDefault } from 'next/dist/next-server/server/load-components'

const setup = (postsState = { loading: false, posts: {} }) => {
  const mockUsePosts = jest.fn().mockReturnValue([postsState, jest.fn()])
  postsContext.usePosts = mockUsePosts
  return shallow(<PostsList />)
}

describe('if loading is true', () => {
  let wrapper
  beforeEach(() => {
    wrapper = setup({ loading: true, posts: {} })
  })

  it('renders without erros', () => {
    let postsListComponent = wrapper.find('[data-test="posts-list-component"]')
    expect(postsListComponent.length).toBe(1)
  })
})

describe('if loading is false', () => {
  let wrapper
  let defaultPosts

  beforeEach(() => {
    defaultPosts = {
      '12345': {
        id: '12345',
        title: 'Post 12345',
      },
      '67890': {
        id: '67890',
        title: 'Post 67890',
      },
    }

    wrapper = setup({ loading: false, posts: defaultPosts })
  })

  it('renders without erros', () => {
    let postsListComponent = wrapper.find('[data-test="posts-list-component"]')
    expect(postsListComponent.length).toBe(1)
  })

  it('renders the amount of Post from postContext', () => {
    let postsListSection = wrapper.find(`[data-test="posts-list-section"]`)
    expect(postsListSection.children().length).toBe(2)
  })
})
