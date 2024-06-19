import { render, screen } from "@testing-library/react";
import { TextInput } from '.';

const mock = {
    placeholder: 'type value',
    onChange: jest.fn(),
    type: 'search',
    value: '',
}
const searchValue = 'test value';
const element = <TextInput {...mock} />;

describe('<TextInput />', () => {
    it('must call have a search value', () => {
        render(element);

        const inp = screen.getByPlaceholderText(mock.placeholder);
        expect(inp).toBeInTheDocument();
        expect(inp.value).toBe(mock.value);
    })

    it(`must call onChange function ${searchValue.length} times`, () => {
        render(element);

        const inp = screen.getByPlaceholderText(mock.placeholder);

        searchValue.split('').forEach(l => {
            inp.value += l;
            mock.onChange();
        });

        expect(inp.value).toBe(searchValue);
        expect(mock.onChange).toHaveBeenCalledTimes(searchValue.length);
    })

    it("must be equals to it's snapshot", () => {
        render(element);
        expect(screen.getByPlaceholderText(mock.placeholder)).toMatchSnapshot();
    })
})