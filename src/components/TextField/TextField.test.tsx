import * as React from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { TextField } from './TextField'

describe('<TextField /> tests', () => {
  test('Should render a label and textbox elements', () => {
    render(<TextField>Email:</TextField>)
    expect(screen.getByLabelText(/email:/i)).toBeInTheDocument()
    expect(screen.getByRole('textbox')).toBeInTheDocument()
  })

  test('Should render provided className prop', () => {
    render(
      <TextField className="text-field" testId="label">
        Email:
      </TextField>
    )
    expect(screen.getByTestId('label')).toHaveClass('text-field')
  })

  test('Should render provided textbox props', () => {
    render(<TextField className="text-field" id="email" name="email" />)
    expect(screen.getByRole('textbox')).toHaveAttribute('id', 'email')
    expect(screen.getByRole('textbox')).toHaveAttribute('name', 'email')
  })

  test('Should set within label using the provided id prop', () => {
    render(<TextField id="email" name="email" testId="email" />)
    expect(screen.getByTestId('email')).toHaveAttribute('for', 'email')
  })

  test('Should render textarea if specified', () => {
    render(<TextField tag="textarea" />)
    expect(screen.getByRole('textbox').tagName).toBe('TEXTAREA')
  })

  test('Should call provided event handler', async () => {
    const user = userEvent.setup()
    const mockEventHandler = jest.fn()
    render(<TextField onChange={mockEventHandler}>Email:</TextField>)
    await user.type(screen.getByRole('textbox'), 'john@doe.com')
    expect(mockEventHandler).toHaveBeenCalled()
    expect(screen.getByRole('textbox')).toHaveValue('john@doe.com')
  })
})
