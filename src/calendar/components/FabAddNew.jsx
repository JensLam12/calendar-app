import React from 'react'
import { useUIStore } from '../../hooks/useUIStore'
import { useCalendarStore } from '../../hooks/useCalendarStore';
import { addHours } from 'date-fns';

export const FabAddNew = () => { 

    const { openDateModal } = useUIStore();
    const { setActiveEvent } = useCalendarStore();

    const handleClickNew = () => {
        setActiveEvent({
            //_id: new Date().getTime(),
            title: '',
            notes: '',
            start: new Date(),
            end: addHours( new Date(), 2),
            bgColor: '#fafafa',
            user: {
                _ud: '123',
                name: 'Jens'
            }
        })
        openDateModal();
    }

    return (
        <button
            className='btn btn-primary fab'
            onClick={handleClickNew}
        >
            <i className='fas fa-plus'></i>
        </button>
    )
}
