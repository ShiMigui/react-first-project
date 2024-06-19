import './styles.css'

export const PrimaryButton = ({ text, onClick, disabled }) => {
    disabled = !(disabled == null || disabled === false || disabled === 'false');

    return (
        <button disabled={disabled} className="primary-button" onClick={onClick}>
            {text}
        </button>
    )
}