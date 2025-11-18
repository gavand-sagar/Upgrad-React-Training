export function Rating(props) {

    let stars = ""

    let limit = props.value > 5 ? 5 : props.value;

    for (let i = 0; i < (limit); i++) {
        stars += "*"
    }
    // value 0-1 -> Red Color
    // value > 1 & less than 3 --> yellow
    // value > 3 --> green
    let color = ""
    if(props.value <= 1){
        color = "red"
    }else if(props.value <=3){
        color = "yellow"
    }else{
        color = "green"
    }

    return (
        props.value > 0 ?
            <fieldset className={color}>{stars}</fieldset> : <></>
    )
}