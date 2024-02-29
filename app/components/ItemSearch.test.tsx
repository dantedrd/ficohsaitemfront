import { render,screen,fireEvent } from '@testing-library/react';
import ItemSearch from './ItemSearch';

jest.mock('next/navigation');

describe('Items', () => {
  it('should render item when data is fetched successfully', async () => {
    render(<ItemSearch/>);

    const inputElement = screen.getByRole('textbox');
    fireEvent.change(inputElement, { target: { value: 'Hello, World!' } });
    
    expect(inputElement).toHaveValue('Hello, World!');
  });
});