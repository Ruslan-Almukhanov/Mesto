import React, { useState } from 'react';
import Header from './Header'
import Profile from './Profile.js'
import CardList from './CardList.js'
import { data } from '../data';
import AddPlacePopup from './popUp/AddPlacePopup'
import EditProfilePopup from './popUp/EditProfilePopup'

export const PopCloseContext = React.createContext()

const MainLayout = () => {
    const [person, setPerson] = useState({
        name: 'Luk Beson',
        info: 'Skywalker'
    });
    const [dataItems, setDataItems] = useState(data);
    const [popUpVisible, setPopUpVisible] = useState({
        visible: false,
        type: ''
    })

    const deleteItem = (id) => {
        setDataItems(() => {
            return dataItems.filter(item => item.id !== id)
        })
    }

    let popUpView;
    if (popUpVisible.type === 'ADD_PLACE') {
        popUpView = <AddPlacePopup
            dataItems={dataItems}
            setPopUpVisible={setPopUpVisible}
            setDataItems={setDataItems} />
    } else {
        popUpView = <EditProfilePopup
            person={person}
            setPerson={setPerson}
            setPopUpVisible={setPopUpVisible} />
    }

    return (
        <>
            <div className="container">
                <PopCloseContext.Provider value={setPopUpVisible}>
                    <Header />
                    <Profile
                        person={person}
                        setPopUpVisible={setPopUpVisible} />
                    <CardList deleteItem={deleteItem}
                        dataItems={dataItems} />
                    {
                        popUpVisible.visible && popUpView
                    }
                </PopCloseContext.Provider>
            </div>
        </>
    )
}

export default MainLayout;
