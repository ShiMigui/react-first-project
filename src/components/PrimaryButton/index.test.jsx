import { render, screen } from '@testing-library/react';
import { PrimaryButton } from '.';
import userEvent from '@testing-library/user-event';

const mock = {
    text: 'Button',
    onClick: jest.fn()
};

const getEl = (disabled, props = mock) => <PrimaryButton {...props} disabled={disabled} />;

describe('<PrimaryButton />', () => {
    it('must be in the document', () => {
        render(getEl());

        const btn = screen.getByRole('button', { name: mock.text });
        expect(btn).toBeInTheDocument();
    })

    it('must be disabled', () => {
        render(getEl(true));

        const btn = screen.getByRole('button', { name: mock.text });
        expect(btn).toBeDisabled();
    })

    it('must call function OnClick()', () => {
        render(getEl(false));

        const btn = screen.getByRole('button', { name: mock.text });
        userEvent.click(btn);

        expect(btn).toBeEnabled();
        expect(mock.onClick).toHaveBeenCalledTimes(1);
    })

    it('must match with snapshots', () => {
        mock.text = 'Button enabled';
        render(getEl(false));

        mock.text = 'Button disabled';
        render(getEl(true, mock));

        const disabled = screen.getByRole('button', { name: /disabled/i });
        const enabled = screen.getByRole('button', { name: /enabled/i });

        expect(disabled).toMatchSnapshot();
        expect(enabled).toMatchSnapshot();
    })
})