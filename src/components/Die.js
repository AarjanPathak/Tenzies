
const Die = (props) => {

    const styles = {
        backgroundColor: props.isActive? "#59E391":"white"
    }
    
    return(
        <div onClick = {props.activeDice} className="die" style={styles}>
            <h2>{props.value}</h2>
        </div>
    )
}
export default Die;