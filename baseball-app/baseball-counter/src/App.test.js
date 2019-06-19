import React from 'react'
import App from './App'
import { render, fireEvent } from '@testing-library/react'
import '@testing-library/react/cleanup-after-each'

describe('<App />', () => {

  it('renders without errors', () => {
    render(<App />)
  })

})

describe('Click strike button', () => {
  
  it('increase the count of strike until 3 strikes are accumalated, resulting in the strikes count reset to 0, and +1 to the outs count', () => {
      const { getByTestId, getByText } = render(<App />)

      const button = getByText('Strike')
      
      fireEvent.click(button)

      const strikesValue = getByTestId(/strikes-count/i)
      
      expect(parseInt(strikesValue.textContent, 10)).toBe(1)

      fireEvent.click(button)

      expect(parseInt(strikesValue.textContent, 10)).toBe(2)

      fireEvent.click(button)

      expect(parseInt(strikesValue.textContent, 10)).toBe(0)

      const outsValue = getByTestId(/outs-count/i)

      expect(parseInt(outsValue.textContent, 10)).toBe(1)
  })

})

