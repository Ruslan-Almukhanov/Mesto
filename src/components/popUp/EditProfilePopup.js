import React, { useState } from 'react'
import { Popup } from '../Popup'

const EditPlacePopup = ({ person, setPerson, setPopUpVisible}) => {
    const addPlaceHandler = (place) => {  
        const [key] = Object.keys(place) 
        const [value] = Object.values(place)
        console.log(key);
        
        setPerson({
            name: key,
            info: value
        })
        setPopUpVisible(false)

    }
    return (
        <Popup
        setPerson={setPerson}
            person={person}
            addPlaceHandler={addPlaceHandler}/>
    )
}

export default EditPlacePopup;