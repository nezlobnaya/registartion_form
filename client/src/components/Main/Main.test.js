import Main from './Main';
import { render, screen } from '@testing-library/react';


describe('Main', () => {
    test('Per Aspera Ad Astra!!', () => {
        render(<Main />);
        const linkElement = screen.getByText(/Per Aspera Ad Astra!!/i);
        expect(linkElement).toBeInTheDocument();
      });

      test('snapshot for App component with custom className and style', () => {  
        const { container } = render(<Main className="custom" style={{ background: 'red' }} />);
        expect(container).toMatchSnapshot();
      } );

});
