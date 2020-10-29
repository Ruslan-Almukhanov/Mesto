import React, { useState } from 'react'
import { Popup } from '../Popup'

const AddPlacePopup = ({ dataItems, setPopUpVisible, setDataItems }) => {

    const addPlaceHandler = (place) => {
        const [key] = Object.keys(place)
        const [value] = Object.values(place)
        const id = Date.now().toString()

        const newPlace = {
            id: id,
            title: key,
            url: value
        }
        setDataItems([...dataItems, newPlace])
        setPopUpVisible(false)
    }

    return (
        <Popup
            type="add_place"
            addPlaceHandler={addPlaceHandler}
        />
    )
}

export default AddPlacePopup;