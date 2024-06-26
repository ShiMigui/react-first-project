import { render, screen } from '@testing-library/react';
import { PostGrid } from '.';

const posts = [
    { id: 1, title: 'postcard 1', body: 'hello 1', url: 'generic.png' },
    { id: 2, title: 'postcard 2', body: 'hello 2', url: 'generic.png' },
    { id: 3, title: 'postcard 3', body: 'hello 3', url: 'generic.png' },
]

const grid = <PostGrid posts={posts} />;

describe('<PostGrid />', () => {
    it('must contains 3 postcards', () => {
        render(grid);

        let arr = screen.getAllByRole('heading', { name: /postcard/i });
        arr.map(p => expect(p).toBeInTheDocument());
        expect(arr).toHaveLength(3);

        expect(screen.getAllByRole('img', { name: /postcard/i })).toHaveLength(3);

        expect(screen.getAllByText(/hello/i)).toHaveLength(3);
    })

    it('must match with snapshot', () => {
        render(grid);
        expect(screen.getByTestId('post-grid')).toMatchSnapshot();
    })
});