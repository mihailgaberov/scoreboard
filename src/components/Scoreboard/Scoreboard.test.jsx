import {render, screen} from '@testing-library/react';
import {describe, expect, it} from 'vitest';
import Scoreboard from "./index";

describe('Scoreboard', () => {
    it('renders correctly', () => {
        render(<Scoreboard pairScore={
            {
                homeTeam: {
                    name: 'Argentina',
                    countryCode: 'ar',
                    score: 3
                },
                awayTeam: {
                    name: 'Australia',
                    countryCode: 'au',
                    score: 1
                }
            }
        } />);
    expect(screen.getByText(/Argentina/i)).toBeVisible()
    expect(screen.getByText(/Australia/i)).toBeVisible()
    });
});
