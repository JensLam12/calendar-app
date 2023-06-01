import { Calendar } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { addHours } from 'date-fns';
import { CalendarEvent, CalendarModal, Navbar } from "../";
import { localizer, getMessagesES } from '../../helpers';
import { useState } from 'react';

const events = [{
    title: 'Cumpleanos del jefe',
    notes: 'Hay que comprar el pastel',
    start: new Date(),
    end: addHours( new Date(), 2),
    bgColor: '#fafafa',
    user: {
        _ud: '123',
        name: 'Jens'
    }
}];

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

    const onDoubleClick = () => {

    }
    
    const onSelect = () => {
        
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
        </>
        
    )
}
