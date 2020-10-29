import React from 'react'
export default function Profile({ person, setPopUpVisible }) {
    return (
        <>
            <div className='wrapper'>
                <div className="profile">
                    <div className="profile__user-photo"></div>
                    <div className="profile__user-data">
                        <h1 className="profile__user-name">{person.name}</h1>
                        <p className="profile__user-info">{person.info}</p>
                        <button onClick={() => setPopUpVisible({ visible: true, type: '' })}
                            className="profile__edit-btn">Edit</button>
                    </div>
                    <button onClick={() => setPopUpVisible({ visible: true, type: 'ADD_PLACE' })}
                        className="profile__add-btn">+</button>
                </div>
            </div>
        </>
    )
}