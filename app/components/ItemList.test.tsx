import { render, screen, waitFor } from '@testing-library/react';
import ItemList from './ItemList';
import { itemStore } from '../store/ItemStore';

const data = [{
    id: 1,
    name: "test1"
}]
jest.mock('next/navigation');
jest.mock('../store/ItemStore', () => ({
    __esModule: true,
    itemStore:()=> {
       return {
        setItems: jest.fn(),
        items:data
    }
    },
}));

describe('Items', () => {
    it('should render item when data is fetched successfully', async () => {
        await render(<ItemList itemsList={data} />);
        expect(screen.getByText('test1')).toBeInTheDocument();
    });
});

