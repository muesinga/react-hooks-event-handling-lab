function Keypad() {

    function enterPassword() {
        console.log('Entering password...')
    }

    return (
        <div>
            <input onChange={enterPassword} type="password" /> 
        </div>
    )
}

export default Keypad;