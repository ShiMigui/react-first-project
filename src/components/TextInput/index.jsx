import './styles.css';

export const TextInput = ({ onChange, value, type, placeholder = '' }) => {
    if (type == null) {
        type = 'text';
    }

    return <input
        type={type}
        value={value}
        onChange={onChange}
        className='text-input'
        placeholder={placeholder}
    />
}