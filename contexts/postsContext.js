import React, { createContext, useReducer, useEffect, useContext } from 'react'
import axios from 'axios'

const postsContext = createContext()

const usePosts = () => {
  const context = useContext(postsContext)

  if (!context) {
    throw new Error('usePosts must be used within Posts Provider')
  }

  return context
}

const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_PRODUCTS':
      return { ...state, posts: action.payload, loading: false }
    case 'SET_LOADING':
      return { ...state, loading: action.payload }
    default:
      throw new Error(`Invalid Action Type ${action.type}`)
  }
}

const defaultState = {
  posts: {},
  loading: false,
}

const PostsProvider = (props) => {
  const [postsState, dispatch] = useReducer(reducer, defaultState)

  const fetchOrders = async () => {
    dispatch({ type: 'SET_LOADING', payload: true })
    try {
      let response = await axios('api/posts')
      dispatch({ type: 'SET_PRODUCTS', payload: response.data })
    } catch (error) {
      console.error('Could not get products')
      dispatch({ type: 'SET_LOADING', payload: false })
    }
  }

  useEffect(() => {
    fetchOrders()
  }, [])

  return <postsContext.Provider value={[postsState, dispatch]} {...props} />
}

export default {
  usePosts,
  PostsProvider,
}
