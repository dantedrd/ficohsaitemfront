import { render, screen } from '@testing-library/react';
import Items from './page';


// Mockear la función de obtención de datos
jest.mock('../../api/serviceItem', () => ({
  getItemById: jest.fn()
}));

jest.mock('../../../components/Item', () => () => <div data-testid="mocked-child">Mocked Child Component</div>);
jest.mock('../../../components/error', () => () => <div data-testid="mocked-child">error</div>);

describe('Items', () => {
  it('should render item when data is fetched successfully', async () => {
    const mockItem = { error: false };
    const getItemById = jest.requireMock('../../api/serviceItem').getItemById;
    getItemById.mockResolvedValueOnce(mockItem);
    
    render(await Items({searchParams:{}}));
    
    expect(await screen.findByText('Mocked Child Component')).toBeInTheDocument();
  });

  it('should render error when the response of service is error', async () => {
    const mockItem = { error: true };
    const getItemById = jest.requireMock('../../api/serviceItem').getItemById;
    getItemById.mockResolvedValueOnce(mockItem);

    render(await Items({searchParams:{}}));
    
    expect(await screen.findByText('error')).toBeInTheDocument();
  });
});