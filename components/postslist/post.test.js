import { shallow } from 'enzyme'
import Post from './post'

it('Post > renders with not error', () => {
  const wrapper = shallow(<Post post={{ comments: {} }} />)
  const component = wrapper.find('[data-test="post-component"]')
  expect(component.length).toBe(1)
})
