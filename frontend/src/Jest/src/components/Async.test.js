import {render, screen} from '@testing-library/react';
import Async from "./Async.js";
describe('Async component',() => {
   test('renders posts if request succeeds', async () => {
    window.fetch = jest.fn();
    window.fetch.mockResolvedValueOnce({
        json: async () => [
            {id: 'p1', title: 'First Post'},
            {id: 'p2', title: 'Second Post'},
        ]
    });
    render(<Async />);

    const listItemElements = await screen.findAllByRole('listitem', {exact: false}, {timeout: 3000});
    expect(listItemElements).not.toHaveLength(0);
   })
});