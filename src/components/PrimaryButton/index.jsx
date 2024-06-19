import './styles.css'

export const PrimaryButton = ({ text = '', onClick = () => null, disabled = false }) => (
    <button
        onClick={onClick}
        disabled={disabled}
        className="primary-button"
    >
        {text}
    </button>
)