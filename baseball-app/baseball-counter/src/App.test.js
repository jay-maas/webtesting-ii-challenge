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

describe('Click ball button', () => {
  
  it('increase the count of balls until 4 ball are accumalated, resulting in the balls count reset to 0, and +1 to the walks count', () => {
      const { getByTestId, getByText } = render(<App />)

      const button = getByText('Ball')
      
      fireEvent.click(button)

      const ballsValue = getByTestId(/balls-count/i)
      
      expect(parseInt(ballsValue.textContent, 10)).toBe(1)

      fireEvent.click(button)

      expect(parseInt(ballsValue.textContent, 10)).toBe(2)

      fireEvent.click(button)

      expect(parseInt(ballsValue.textContent, 10)).toBe(3)

      fireEvent.click(button)

      expect(parseInt(ballsValue.textContent, 10)).toBe(0)

      const walksValue = getByTestId(/walks-count/i)

      expect(parseInt(walksValue.textContent, 10)).toBe(1)
  })

})

describe('Click foul button', () => {
  
  it('foul button will have the following results: if strike count < 2 then a foul will result in a strike && if strike count === 2, a foul will not incremement the strike anymore ', () => {
      const { getByTestId, getByText } = render(<App />)

      const button = getByText('Foul')
      
      fireEvent.click(button)

      const strikesValue = getByTestId(/strikes-count/i)
      
      expect(parseInt(strikesValue.textContent, 10)).toBe(1)

      fireEvent.click(button)

      expect(parseInt(strikesValue.textContent, 10)).toBe(2)

      fireEvent.click(button)

      expect(parseInt(strikesValue.textContent, 10)).toBe(2)

  })

})

describe('Click hit button', () => {
  
  it('when hit occurs, strikes/balls will be reset to 0, hits-count will be incremented', () => {
      const { getByTestId, getByText } = render(<App />)
      
      const strikeButton = getByText('Strike')
      const ballButton = getByText('Ball')
      const strikesValue = getByTestId(/strikes-count/i)
      const ballsValue = getByTestId(/balls-count/i)
      
      fireEvent.click(strikeButton)
      fireEvent.click(ballButton)
      fireEvent.click(ballButton)

      expect(parseInt(strikesValue.textContent, 10)).toBe(1)
      expect(parseInt(ballsValue.textContent, 10)).toBe(2)

      const hitButton = getByText('Hit')
      
      fireEvent.click(hitButton)

      const hitsValue = getByTestId(/hits-count/i)
      
      expect(parseInt(hitsValue.textContent, 10)).toBe(1)
      expect(parseInt(strikesValue.textContent, 10)).toBe(0)
      expect(parseInt(ballsValue.textContent, 10)).toBe(0)

  })

})