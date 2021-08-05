import { render, screen } from '@testing-library/react';
import App from './App';

test('Per Aspera Ad Astra!!', () => {
  render(<App />);
  const linkElement = screen.getByText(/Per Aspera Ad Astra!!/i);
  expect(linkElement).toBeInTheDocument();
});
