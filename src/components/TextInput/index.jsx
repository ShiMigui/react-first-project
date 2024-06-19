import './styles.css';

export const TextInput = ({ onChange = () => null, value = '', type = 'text', placeholder = '' } = {}) => (
    <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}

        className='text-input'
    />
)