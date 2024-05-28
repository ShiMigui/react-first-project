import './styles.css';

export const TextInput = ({ onChange, value, type }) => {
    if (type == null)
        type = 'text';

    return <input value={value} onChange={onChange} type={type} className='text-input' />
}