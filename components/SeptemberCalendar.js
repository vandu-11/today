import React, { useState } from 'react';
import Calendar from 'react-calendar';
import {  momentLocalizer } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import moment from 'moment';
import styles from './SeptemberCalendar.module.css';


// Use moment.js to localize the calendar
const localizer = momentLocalizer(moment);

function SeptemberCalendar() {
  const [eventDetails, setEventDetails] = useState(null);

  const eventsData = [
    {
      start: new Date(2023, 8, 26, 10, 0),  // September is represented as 8 (zero-based index)
      end: new Date(2023, 8, 26, 11, 0),
      title: 'Event 1',
      desc: 'Event 1 details...',
    },
    {
      start: new Date(2023, 8, 29, 14, 0),
      end: new Date(2023, 8, 29, 16, 0),
      title: 'Event 2',
      desc: 'Event 2 details...',
    },
    // Add more events with dates, timings, and text
  ];

  // Format the timings to include AM and PM
  const formattedEventsData = eventsData.map((event) => ({
    ...event,
    start: moment(event.start).format('YYYY-MM-DD hh:mm A'), // e.g., "2023-09-05 10:00 AM"
    end: moment(event.end).format('YYYY-MM-DD hh:mm A'),     // e.g., "2023-09-05 11:00 AM"
  }));

  // Handle click events on calendar events
  const handleSelectEvent = (event) => {
    setEventDetails(`${event.title}: ${moment(event.start).format('LT')} - ${moment(event.end).format('LT')}\n${event.desc}`);
  };

  // Customize the toolbar to show only September
  const CustomToolbar = ({ label, onNavigate }) => (
    <div className="rbc-toolbar">
      <span className="rbc-toolbar-label">{label}</span>
      <button className="rbc-btn-group rbc-nav-btn" onClick={() => onNavigate('PREV', 'month')}>
        &lt;
      </button>
      <button className="rbc-btn-group rbc-nav-btn" onClick={() => onNavigate('NEXT', 'month')}>
        &gt;
      </button>
    </div>
  );

  return (
    <div className={styles['calendar-container']}>
      
      <Calendar
        localizer={localizer}
        events={formattedEventsData}
        startAccessor="start"
        endAccessor="end"
        onSelectEvent={handleSelectEvent}
        style={{ height: 500 }}
        defaultDate={new Date(2023, 8, 1)} // Set the default date to September 1, 2023
        components={{
          toolbar: CustomToolbar,
        }}
        views={['month']}
        step={1}
        onNavigate={(date, view) => {
          // Prevent navigation to other months
          if (view === 'month' && (date.getMonth() < 8 || date.getMonth() > 8)) {
            return null;
          }
        }}
      />
      {eventDetails && (
        <div className={styles['event-details']}>
          <p>{eventDetails}</p>
        </div>
      )}
    </div>
  );
}

export default SeptemberCalendar;
