import Main from './Main';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router';


describe('Main', () => {
    test('Per Aspera Ad Astra!!', () => {
//The proper way to handle this, according to React Router devs, 
//is to wrap your unit test in a Router. 
//Using MemoryRouter is recommended in order to be able to reset the router between tests.
        render(<MemoryRouter><Main /></MemoryRouter>);
        const linkElement = screen.getByText(/Per Aspera Ad Astra!!/i);
        expect(linkElement).toBeInTheDocument();
      });

      test('snapshot for App component with custom className and style', () => {  
        const { container } = render(<MemoryRouter><Main className="custom" style={{ background: 'red' }} /></MemoryRouter>);
        expect(container).toMatchSnapshot();
      } );

});
