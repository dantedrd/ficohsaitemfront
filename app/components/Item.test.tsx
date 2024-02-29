import { render, screen, waitFor } from '@testing-library/react';
import ItemList from './ItemList';
import { itemStore } from '../store/ItemStore';
import Item from './Item';

const data = {
    id: 1,
    name: "test1"
}
jest.mock('next/navigation');
jest.mock('../store/ItemStore', () => ({
    __esModule: true,
    itemStore:()=> {
       return {
        setItem: jest.fn(),
        item:data
    }
    },
}));

describe('Item', () => {
    it('should render item when data is fetched successfully', async () => {
        await render(<Item item={data} />);
        expect(screen.getByText('name: test1')).toBeInTheDocument();
    });
});