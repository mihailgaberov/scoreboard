import { render, screen, waitFor } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import ScoreboardsGrid from "./index";

describe('ScoreboardsGrid', () => {
    it('renders correctly all available scoreboards', async () => {
        render(<ScoreboardsGrid/>);

        expect(screen.getByText(/Games are about to start in 3 seconds./i)).toBeVisible();


        await waitFor(() => {
            expect(screen.getByText(/Games are about to start in 2 seconds./i)).toBeVisible();
        }, {
            timeout: 1000
        });

        await waitFor(() => {
            expect(screen.getByText(/Games are about to start in 1 seconds./i)).toBeVisible();
        }, {
            timeout: 1000
        });

        await waitFor(() => {
            expect(screen.getByText(/Argentina/i)).toBeVisible()
            expect(screen.getByText(/Australia/i)).toBeVisible()
            expect(screen.getByText(/Spain/i)).toBeVisible()
            expect(screen.getByText(/Brazil/i)).toBeVisible()
        }, {
            timeout: 1000
        });
    });
});
