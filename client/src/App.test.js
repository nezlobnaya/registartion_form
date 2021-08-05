import { render, screen } from '@testing-library/react';
import App from './App';

describe('<App />', () => {
  test('should render', () => {
    const { getByText } = render(<App />);
    const app = getByText('Per Aspera Ad Astra!!');
    expect(app).toBeInTheDocument();
  });

  test('Per Aspera Ad Astra!!', () => {
    render(<App />);
    const linkElement = screen.getByText(/Per Aspera Ad Astra!!/i);
    expect(linkElement).toBeInTheDocument();
  });

  test('snapshot for App component', () => {
    const { container } = render(<App />);
    expect(container).toMatchSnapshot();
  });

  test('snapshot for App component with custom className', () => {
    const { container } = render(<App className="custom" />);
    expect(container).toMatchSnapshot();
  });

  test('snapshot for App component with custom style', () => {
    const { container } = render(<App style={{ background: 'red' }} />);
    expect(container).toMatchSnapshot();
  } );

  test('snapshot for App component with custom className and style', () => {  
    const { container } = render(<App className="custom" style={{ background: 'red' }} />);
    expect(container).toMatchSnapshot();
  } );

  test('snapshot for App component with custom className, style and children', () => {
    const { container } = render(<App className="custom" style={{ background: 'red' }}>
      <div>children</div>
    </App>);
    expect(container).toMatchSnapshot();
  } );

});



