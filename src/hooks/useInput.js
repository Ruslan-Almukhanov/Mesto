import { useState } from 'react'

export function useInput(type, person, setPerson) {
    const [place, setPlace] = useState({
        name: '',
        url: ''
    })

    const inputHandler = (e) => {
        const name = e.target.name
        const value = e.target.value
        console.log(name);
        console.log(value);
        if (type !== 'add_place') {
            setPerson({ ...person, [name]: value })
        } else {
            setPlace({ ...place, [name]: value })
        }


        
        console.log(person);

    }

    return {
        place,
        inputHandler
    }
}

