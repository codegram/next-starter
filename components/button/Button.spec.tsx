import React from 'react'
import { render, fireEvent, screen } from '@testing-library/react'

// Components
import { Button } from './Button'

describe('Button', () => {
  it('executes the action when button is click', () => {
    const onClick = jest.fn()
    render(<Button label="save" onClick={onClick} />)

    fireEvent.click(screen.getByText('save'))

    expect(onClick).toHaveBeenCalled()
  })
})
