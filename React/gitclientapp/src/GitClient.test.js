import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import axios from 'axios';
import GitClient from './GitClient';

jest.mock('axios');

describe('GitClient', () => {
  it('renders the search controls', () => {
    render(<GitClient />);
    expect(screen.getByPlaceholderText('GitHub username')).toBeInTheDocument();
  });

  it('fetches and displays repositories', async () => {
    axios.get.mockResolvedValueOnce({
      data: [{ id: 1, name: 'repo-one' }, { id: 2, name: 'repo-two' }],
    });

    render(<GitClient />);
    fireEvent.click(screen.getByText('Fetch'));

    await waitFor(() => {
      expect(screen.getByText('repo-one')).toBeInTheDocument();
      expect(screen.getByText('repo-two')).toBeInTheDocument();
    });
  });
});