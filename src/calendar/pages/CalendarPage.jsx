import { Calendar } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { CalendarEvent, CalendarModal, FabAddNew, FabDelete, Navbar } from "../";
import { localizer, getMessagesES } from '../../helpers';
import { useState } from 'react';
import { useUIStore } from '../../hooks/useUIStore';
import { useCalendarStore } from '../../hooks/useCalendarStore';

const eventSyleGetter = ( event, start, end, isSelected ) => {
    const style = {
        backgroundColor: '#347CF7',
        borderRadius: '0px',
        opacity: 0.8,
        color: 'white'
    }

    return {
        style
    }
}

export const CalendarPage = () => {

    const [ lastView, setLastView ] = useState( localStorage.getItem('lastView') || 'week' );
    const { openDateModal } = useUIStore();
    const { events, setActiveEvent } = useCalendarStore();

    const onDoubleClick = () => {
        openDateModal();
    }
    
    const onSelect = ( event) => {
        setActiveEvent(event);
    }
    
    const onViewChanged = () => {
        localStorage.setItem('lastView', event);
        setLastView( event );
    }

    return (
        <>
            <Navbar />
            <Calendar
                culture='es'
                localizer={localizer}
                events={events}
                defaultView={lastView}
                startAccessor="start"
                endAccessor="end"
                style={{ height: 'calc(100vh - 80px)' }}
                messages={ getMessagesES() }
                eventPropGetter={ eventSyleGetter}
                components={{
                    event: CalendarEvent
                }}
                onDoubleClickEvent={ onDoubleClick}
                onSelectEvent={ onSelect }
                onView={onViewChanged}
            />

            <CalendarModal />
            <FabAddNew />
            <FabDelete />
        </>
        
    )
}
