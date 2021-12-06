/* eslint-disable no-undef */
import { screen, render } from '@testing-library/react'
import App from './App'

it('renders home page', () => {
  const { container } = render(App)

  expect(container).toMatchSnapshot()
})
