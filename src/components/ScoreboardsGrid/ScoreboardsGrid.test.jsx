import {render, screen} from '@testing-library/react';
import {describe, expect, it} from 'vitest';
import ScoreboardsGrid from "./index";

describe('ScoreboardsGrid', () => {
    it('renders correctly all available scoreboards', () => {
        render(<ScoreboardsGrid />);
        expect(screen.getByText(/Argentina/i)).toBeVisible()
        expect(screen.getByText(/Australia/i)).toBeVisible()
        expect(screen.getByText(/Spain/i)).toBeVisible()
        expect(screen.getByText(/Brazil/i)).toBeVisible()
    });
});
