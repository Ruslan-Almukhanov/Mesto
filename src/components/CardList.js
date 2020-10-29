import React from 'react';
import Card from './Card.js';

export default function CardList({dataItems, deleteItem}) {

    const items = dataItems.map((item, id) => {
        return (
            <Card
                key={id}
                deleteItem={deleteItem} {...item} />
        )
    })
    return (
        < section className="place-list card__list" >
            {items}
        </section>
    )

}