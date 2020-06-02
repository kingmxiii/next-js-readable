import React from 'react'
import { shallow } from 'enzyme'

import App from './App'

test('test', () => {
 const wrapper = shallow(<App />)
 const appComponent = wrapper.find(`[data-test="app-component"]`)
 expect(appComponent.length).toBe(1)
})