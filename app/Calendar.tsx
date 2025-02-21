import React from 'react'
import { Calendar, momentLocalizer,} from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import 'moment-timezone' // or 'moment-timezone/builds/moment-timezone-with-data[-datarange].js'. See their docs
import './styles/Calendar.css'; // Import custom CSS


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
    hash = (hash << 19) - hash + char;
    hash |= 0; // Convert to 32bit integer
  }
  return hash;
};

const getEventStyle = (event: { title: string; }) => {
  const colors = [
    '#FFCCCC', '#FF9999', '#FF6666', '#FF3333', '#CC0000',
    '#990000', '#660000', '#330000', '#FFB3B3', '#FF8080',
    '#FF4D4D', '#FF1A1A', '#E60000', '#B30000', '#800000',
    '#4D0000', '#FF9999', '#FF6666', '#FF3333', '#CC0000'
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
  const StartTime = new Date();
  StartTime.setHours(12, 30, 0, 0);
  const convertToMST = (date: Date) => {
    return moment(date).tz('America/Denver').toDate();
  };

  const eventsInMST = events.map(event => ({
    ...event,
    start: convertToMST(event.start),
    end: convertToMST(event.end),
  }));

  return (
    <div style={{ height: '80vh', minHeight: '500px' }}>
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
        timeslots={2} // Number of time slots per step
        dayLayoutAlgorithm={'no-overlap'} // Prevent events from overlapping
        scrollToTime={convertToMST(StartTime)} // Set the calendar to start at 9 AM
        eventPropGetter={getEventStyle} // Use custom event styles        
        toolbar={false} // Hide the toolbar
      />
    </div>
  );
};

export default MyCalendar;