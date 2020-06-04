import React from 'react'
import { shallow, mount } from 'enzyme'

import postsContext from './postsContext'
import { interopDefault } from 'next/dist/next-server/server/load-components'

const CustomComponent = () => {
  postsContext.usePosts()
  return <div />
}

it('usePosts custom hook throws error when not wrapped in PostsProvider', () => {
  expect(() => {
    shallow(<CustomComponent />)
  }).toThrow('usePosts must be used within Posts Provider')
})

it('usePosts custom hook doesnt throw an error when  wrapped in PostsProvider', () => {
  expect(() => {
    mount(
      <postsContext.PostsProvider>
        <CustomComponent />
      </postsContext.PostsProvider>
    )
  }).not.toThrow('usePosts must be used within Posts Provider')
})
