import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/react/cleanup-after-each'

import { Display, Dashboard } from '../../components'

describe('<Display />', () => {

    it('renders without errors', () => {
        render(<Display />)
    })

    it('renders scoreboard text', () => {
        const { getByTestId } = render(<Display />)

        getByTestId(/strikes-count/i)
    })


    it('renders strikes text', () => {
        const { getByText } = render(<Display />)

        getByText(/strikes/i)
    })

    it('renders strikes count', () => {
        const { getByText } = render(<Display />)

        getByText(/strikes/i)
    })

    it('renders balls text', () => {
        const { getByText } = render(<Display />)

        getByText(/balls/i)
    })

    it('renders balls count', () => {
        const { getByTestId } = render(<Display />)

        getByTestId(/balls-count/i)
    })

    it('renders outs text', () => {
        const { getByText } = render(<Display />)

        getByText(/outs/i)
    })

    it('renders outs count', () => {
        const { getByTestId } = render(<Display />)

        getByTestId(/outs-count/i)
    })

    it('renders hits text', () => {
        const { getByText } = render(<Display />)

        getByText(/hits/i)
    })

    it('renders hits count', () => {
        const { getByTestId } = render(<Display />)

        getByTestId(/hits-count/i)
    })

    it('renders walks text', () => {
        const { getByText } = render(<Display />)

        getByText(/walks/i)
    })

    it('renders walks count', () => {
        const { getByTestId } = render(<Display />)

        getByTestId(/walks-count/i)
    })

})

describe('<Dashboard />', () => {

    it('renders without errors', () => {
        render(<Dashboard />)
    })

    it('renders strike button', () => {
        const { getByText } = render(<Dashboard />)

        getByText(/strike/i)
    })

    it('renders ball button', () => {
        const { getByText } = render(<Dashboard />)

        getByText(/ball/i)
    })

    it('renders foul button', () => {
        const { getByText } = render(<Dashboard />)

        getByText(/foul/i)
    })

    it('renders hit button', () => {
        const { getByText } = render(<Dashboard />)

        getByText(/hit/i)
    })

})

