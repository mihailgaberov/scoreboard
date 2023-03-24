import { render, screen, waitFor } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import MessageBoard from "./index";

describe('MessageBoard', () => {
    it('renders correctly messages', async () => {
        render(<MessageBoard message={'Current Games'}/>);

        await waitFor(() => {
            expect(screen.getByText(/CURRENT GAMES/i)).toBeVisible()
        }, {
            timeout: 3000
        })
    });
});
