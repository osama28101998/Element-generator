import React from 'react'
import { renderElement } from '../utils'

const RenderedElement = ({element}) => {
  return (
    <div className="w-full flex justify-center">
    {renderElement(element)}
  </div>
  )
}

export default RenderedElement
