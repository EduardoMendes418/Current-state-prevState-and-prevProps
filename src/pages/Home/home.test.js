import { render, screen } from '@testing-library/react';
import App from './index';

it('renders learn react link', () => {
  render(<App />);
  const linkElementText = screen.getByText('Não existem posts =(');
  expect(linkElementText).toBeInTheDocument();
});
