import React from 'react'
import ReactDOM from 'react-dom'
import Input from '../Input'

describe('Input', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<Input />, div)
  })
  // TODO: Start using enzyme and add more tests to the component.
})