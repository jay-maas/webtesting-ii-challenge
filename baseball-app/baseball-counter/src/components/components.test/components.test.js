import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import '@testing-library/react/cleanup-after-each'

import { Display, Dashboard } from '../../components'

describe('<Display />', () => {
    
    it('renders without errors', () => {
        render(<Display />)
    })


})