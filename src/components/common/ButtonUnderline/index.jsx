import "./buttonUnderline.sass";

export const ButtonUnderline = ({to, text}) => {
    return (
        <div className="btn-under-effect">
            <span className="noselect">
                <a href={to}>{text}</a>
            </span>
            <div className="circle" />
        </div>
    )
}