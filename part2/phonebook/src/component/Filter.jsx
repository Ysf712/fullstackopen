const Filter = (props) => {
    return (
        <div id='filter'>
            filte shown with <input onChange={(e) => props.setNameFilted(e.target.value)}></input>
        </div>
    )
}

export default Filter