import React from 'react'
import { product } from '../product'
function Image() {
  return (
    <img src={product.url} alt='url' />
  )
}

export default Image