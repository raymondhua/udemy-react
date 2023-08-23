import './Card.css';

function Card(props) {
    const classes = "card";
    return <ui className={classes}>{props.children}</ui>
}
export default Card;