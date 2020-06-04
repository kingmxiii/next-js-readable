import { shallow, mount } from 'enzyme'
import Loadable from './loadable'

it('renders spinner when loading is true', () => {
  const wrapper = shallow(<Loadable loading={true}>Test</Loadable>)
  const loader = wrapper.find('[data-test="loader-node"]')
  expect(loader.length).toBe(1)
})

it('does not render spinner when loading is false', () => {
  const wrapper = shallow(<Loadable loading={false}>Test</Loadable>)
  const loader = wrapper.find('[data-test="loader-node"]')
  expect(loader.length).toBe(0)
})

it('renders childre', () => {
  const wrapper = mount(
    <Loadable loading={true}>
      <span>Hello</span>
    </Loadable>
  )
  expect(wrapper.isEmptyRender()).toBe(false)
})
