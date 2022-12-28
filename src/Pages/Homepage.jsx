import React from 'react'
import { useSelector } from 'react-redux'

const Homepage = () => {

    const data = useSelector((state)=>state.products)
    console.log(data)
  return (
    <h1>Homepage</h1>
  )
}

export default Homepage