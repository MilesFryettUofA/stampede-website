import React from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import 'moment-timezone' // or 'moment-timezone/builds/moment-timezone-with-data[-datarange].js'. See their docs
import './Styles/Calendar.css'; // Import custom CSS

// Set the IANA time zone you want to use
moment.tz.setDefault('america/denver')


const localizer = momentLocalizer(moment);

interface Event {
  start: Date;
  end: Date;
  title: string;
}

interface MyCalendarProps {
  events: Event[];
  selectedDate: Date;
  onDateChange: (date: Date) => void;
}

// Helper function to generate a hash code from a string
const hashCode = (str: string) => {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i);
    hash = (hash << 5) - hash + char;
    hash |= 0; // Convert to 32bit integer
  }
  return hash;
};

const getEventStyle = (event: { title: string; }) => {
  const colors = [
    '#FF5733', // Red
    '#33FF57', // Green
    '#3357FF', // Blue
    '#FF33A1', // Pink
    '#FF8C33', // Orange
    '#8C33FF', // Purple
  ];

  // Assign a color based on the event title's hash code
  const colorIndex = Math.abs(hashCode(event.title.split(' - ')[0])) % colors.length;
  const backgroundColor = colors[colorIndex];

  return {
    style: {
      backgroundColor,
      borderRadius: '5px',
      opacity: 0.8,
      color: 'white',
      border: '0px',
      display: 'block',
    },
  };
};

const MyCalendar = ({ events, selectedDate, onDateChange }: MyCalendarProps) => {
  const minTime = new Date();
  minTime.setHours(12, 30, 0, 0);

  const convertToMST = (date: Date) => {
    return moment(date).tz('America/Denver').toDate();
  };

  const eventsInMST = events.map(event => ({
    ...event,
    start: convertToMST(event.start),
    end: convertToMST(event.end),
  }));

  return (
    <div style={{ height: '500px' }}>
      <Calendar
        localizer={localizer}
        events={eventsInMST}
        startAccessor="start"
        endAccessor="end"
        defaultView="day"
        views={['day']}
        style={{ height: '100%' }}
        date={selectedDate}
        onNavigate={date => onDateChange(date)}
        step={30} // Set the time slot step to 30 minutes
        timeslots={1} // Number of time slots per step
        dayLayoutAlgorithm={'no-overlap'} // Prevent events from overlapping
        min={convertToMST(minTime)} // Set the calendar to start at 9 AM
        eventPropGetter={getEventStyle} // Use custom event styles        
        toolbar={false} // Hide the toolbar
      />
    </div>
  );
};

export default MyCalendar;