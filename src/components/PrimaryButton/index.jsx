import './styles.css'

export const PrimaryButton = ({ text, onClick, disabled }) => {
    if (disabled == null)
        disabled = false;
    if (disabled === "")
        disabled = true;

    return (
        <button disabled={disabled} className="primary-button" onClick={onClick}>
            {text}
        </button>
    )
}