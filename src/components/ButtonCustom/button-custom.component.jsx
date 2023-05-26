import './button-custom.styles.scss'

const ButtonCustom = ({children, className, ...otherProps}) => {
    return (
        <button type="button" className={`btn btn-lg px-4 gap-3 ${className}`} {...otherProps}>{children}</button>
    );
}


export default ButtonCustom