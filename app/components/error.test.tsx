import { render, screen, waitFor } from '@testing-library/react';
import ErrorScreen from "./error";

describe('Item', () => {
    it('should render item when data is fetched successfully', async () => {
        const data={
            code_status: 400,
            message: "parametro invalido"
        }
        await render(<ErrorScreen data={data} />);
        expect(screen.getByText('parametro invalido')).toBeInTheDocument();
    });
});