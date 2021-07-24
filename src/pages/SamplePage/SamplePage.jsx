import React, { useState, useEffect } from 'react'


function SamplePage() {
    const[counter, setCounter] = useState(0)

    useEffect(() => {
        document.title = `You've clicked ${counter} times`
        // dependency, kalo counter berubah useeffect kepanggil
        // kalo kosong, variable apapun berubah kepanggil
    }, [counter])

    if(counter % 2 == 0) {
        var element = <div>Counter genap</div>
    }
    else {
        var element = <div>Counter ganjil</div>
    }

    const addCounter = () => {
        setCounter(counter+1)
    }

    return (
        <div>
            <h3>You have clicked {counter} times</h3>
            <h3>{element}</h3>
            <button onClick={addCounter}>Add Counter</button>
        </div>
    )
}

export default SamplePage