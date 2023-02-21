
const Die = (props) => {
    return(
        <div className="dice-container">
            <div className="die">{props.value[0]}</div>
            <div className="die">{props.value[1]}</div>
            <div className="die">{props.value[2]}</div>
            <div className="die">{props.value[3]}</div>
            <div className="die">{props.value[4]}</div>
            <div className="die">{props.value[5]}</div>
            <div className="die">{props.value[6]}</div>
            <div className="die">{props.value[7]}</div>
            <div className="die">{props.value[8]}</div>
            <div className="die">{props.value[9]}</div>
        </div>
    )
}
export default Die;