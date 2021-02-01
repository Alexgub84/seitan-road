import React from 'react'
import { ItemPreview } from './ItemPreview'

export function ItemsList({ items }) {
    return (
        <div className="items-list flex justify-center">
            {
                items.map(item => <ItemPreview item={ item } key={ item._id } />)
            }

        </div>
    )
}
