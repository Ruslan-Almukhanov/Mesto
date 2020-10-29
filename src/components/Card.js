import React, { useState } from 'react';
import {
    FaHeart,
    FaRegHeart,
    FaTrashAlt
} from "react-icons/fa";

export default function Card({ title, url, id, deleteItem }) {
    const [like, setLike] = useState(false)
    const [visible, setVisible] = useState(false)
    let styles = {
        background: `url(${url})`,
    };

    const likeHandler = () => {
        setLike(!like)
    }

    const visibleHandler = () => {
        setVisible(true)
    }
    const unVisibleHandler = () => {
        setVisible(false)
    }
    return (
        <div
            onMouseLeave={unVisibleHandler}
            onMouseEnter={visibleHandler}
            className="card">
            <div className="card__image" style={styles}>
                <div
                    onClick={() => deleteItem(id)}
                    className="card__delete">
                    {
                        visible && <FaTrashAlt style={{ fontSize: 18, color: "#fff" }} />
                    }
                </div>
            </div>
            <div className="card__description">
                <h3 className="card__name">{title}</h3>
                <div
                    onClick={likeHandler}
                    className="card__like card__like_active">
                    {
                        like ? <FaHeart style={{ fontSize: 18 }} /> : <FaRegHeart style={{ fontSize: 18 }} />
                    }

                </div>
            </div>
        </div>
    )
}