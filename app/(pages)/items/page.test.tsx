import { render, screen } from '@testing-library/react';
import Items from './page';


// Mockear la función de obtención de datos
jest.mock('../api/serviceItem', () => ({
    searchItems: jest.fn()
}));

jest.mock('../../components/ItemList', () => () => <div data-testid="mocked-child">Mocked Child Component</div>);
jest.mock('../../components/error', () => () => <div data-testid="mocked-child">error</div>);

describe('Items', () => {
  it('should render item when data is fetched successfully', async () => {
    const mockItem = { error: false };
    const searchItems = jest.requireMock('../api/serviceItem').searchItems;
    searchItems.mockResolvedValueOnce(mockItem);
    
    render(await Items({searchParams:{}}));
    
    expect(await screen.findByText('Mocked Child Component')).toBeInTheDocument();
  });

  it('should render error when the response of service is error', async () => {
    const mockItem = { error: true };
    const searchItems = jest.requireMock('../api/serviceItem').searchItems;
    searchItems.mockResolvedValueOnce(mockItem);

    render(await Items({searchParams:{}}));
    
    expect(await screen.findByText('error')).toBeInTheDocument();
  });
});