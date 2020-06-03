import React from 'react'
import { shallow } from 'enzyme'

import Layout from './layout'

describe("Layout Tests", () => {
    let wrapper

    beforeEach(() => {
        wrapper = shallow(<Layout />)

    })

    it('renders layout component', () => {
        const layoutComponent = wrapper.find('[data-test="layout-component"]')
        expect(layoutComponent.length).toBe(1)
    })

    it('renders header node', () => {
        const headerNode = wrapper.find('[data-test="header-node"]')
        expect(headerNode.length).toBe(1)
    })

    it('renders main node', () => {
        const mainNode = wrapper.find('[data-test="main-node"]')
        expect(mainNode.length).toBe(1)
    })
})