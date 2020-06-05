import { shallow } from 'enzyme'
import Post from './post'

it('renders with not error', () => {
  const wrapper = shallow(<Post post={{}} />)
  const component = wrapper.find('[data-test="post-component"]')
  expect(component.length).toBe(1)
})
