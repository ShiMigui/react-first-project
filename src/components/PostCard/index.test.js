import { render, screen } from "@testing-library/react";
import { PostCard } from '.';

const mock = {
    title: 'Hello World',
    body: 'This is a test',
    url: 'https://www.somesite.com/img.jpg',
}

const _component = <PostCard {...mock} />;

describe('<PostCard />', () => {
    it('must be in the document', () => {
        render(_component);

        let el = screen.getByRole('img', { name: mock.title });
        expect(el).toBeInTheDocument();
        expect(el).toHaveAttribute('src', mock.url);

        el = screen.getByRole('heading', { name: mock.title });
        expect(el).toBeInTheDocument();

        el = screen.getByText(mock.body);
        expect(el).toBeInTheDocument();
    })

    it('must match with the snapshot', () => {
        render(_component);

        expect(screen.getByTestId("post-card")).toMatchSnapshot();
    })
})