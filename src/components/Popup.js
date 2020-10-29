import React, { useContext } from 'react'
import { PopCloseContext } from './MainLayout'
import { useInput } from '../hooks/useInput'

export const Popup = ({ type, addPlaceHandler, person, setPerson }) => {
    const closeModal = useContext(PopCloseContext)
    //change form by checking type
    const checkType = (arg1, arg2) => {
        return type === 'add_place' ? arg1 : arg2
    }

    const input = useInput(type, person, setPerson)

    const personValue = person && person.name
    const personInfo = person && person.info

    const checkSubmitData = () => {
        if (type === 'add_place') {
            return addPlaceHandler({ [input.place.name]: input.place.url })
        } else {
            return addPlaceHandler({ [person.name]: person.info })
        }
    }

    return (
        <div className="popup">
            <div className="popup__content">
                <img onClick={() => closeModal(false)}
                    className="popup__close" alt="" src={"close.svg"} />
                <h3 className="popup__title">{checkType('Новое место', 'Редактировать профиль')}</h3>
                <form onSubmit={(e) => {
                    e.preventDefault()
                    checkSubmitData()
                }
                }
                    className="popup__form">
                    <input
                        value={personValue || input.place.name}
                        onChange={input.inputHandler}
                        className="popup__input"
                        placeholder={checkType('Название', 'Имя')}
                        name="name"
                        required />
                    <input
                        value={personInfo || input.place.url}
                        onChange={input.inputHandler}
                        className="popup__input"
                        name={checkType("url", "info")}
                        placeholder={checkType('Url', 'О себе')}
                        required />
                    <button type="submit" className="popup__button">{checkType('Добавить', 'Сохранить')}</button>
                </form>
            </div>
        </div>
    )
}