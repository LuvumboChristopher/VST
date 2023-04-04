import { render, screen } from '@testing-library/react'
import Umdp from '../screens/Umdp/Umdp'
import '@testing-library/jest-dom/extend-expect'

it('Render the title of the UMDP section', () => {
  render(<Umdp />);
  const titleElement = screen.getByText(/#UnMotDuProprio/i);
  expect(titleElement).toBeInTheDocument();
})
