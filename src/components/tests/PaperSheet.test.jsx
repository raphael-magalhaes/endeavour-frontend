import React from 'react'
import ReactDOM from 'react-dom'
import PaperSheet from '../PaperSheet'

// TODO: Start using enzyme and add more tests to the component.
describe('PaperSheet', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<PaperSheet />, div)
  })
})