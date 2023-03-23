import { render, screen } from '@testing-library/react';
import { it, describe, expect } from 'vitest';
import App from './App';

describe('App', () => {
    it('renders correctly the headline', () => {
        render(<App />);

        expect(screen.getByText(/FIFA World Cup Scoreboard/i)).toBeVisible()
    });
});
