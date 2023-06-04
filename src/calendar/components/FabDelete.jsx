import React from 'react'
import { useUIStore } from '../../hooks/useUIStore'
import { useCalendarStore } from '../../hooks/useCalendarStore';
import { addHours } from 'date-fns';

export const FabDelete = () => { 

    const { startDeleteEvent, hasEventSelected } = useCalendarStore();

    const handleDelete = () => {
        startDeleteEvent();
    }

    return (
        <button
            className='btn btn-danger fab-danger'
            onClick={handleDelete}
            style={{
                display: hasEventSelected ? '' : 'none'
            }}
        >
            <i className='fas fa-trash-alt'></i>
        </button>
    )
}
