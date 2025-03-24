// pages/festivals.tsx
"use client";

import React, { useState } from 'react';
import { festivalsData, Festival, Day , TicketTier} from './festivalsData';
import './styles/FestivalsPage.css';
import './styles/theme.css';
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Button,
  Tab,
  Tabs,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  ModalContent,


} from '@heroui/react';
import MyCalendar from './Calendar';
import moment, { duration } from 'moment';
import 'moment-timezone' // or 'moment-timezone/builds/moment-timezone-with-data[-datarange].js'. See their docs
import Image from 'next/image';





// Set the IANA time zone you want to use
moment.tz.setDefault('america/denver')



const FestivalsPage: React.FC = () => {
  const [selectedFestival, setSelectedFestival] = useState<Festival>(festivalsData[0]);
  const [selectedDate, setSelectedDate] = useState(selectedFestival.days[0].date);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [modalLocation, setModalLocation] = useState<string>('');

  const handleFestivalChange = (festival: Festival) => {
    setSelectedFestival(festival);
  };

  const handleDateChange = (date: string) => {
    setSelectedDate(date);
  };

  const getAllEventsForDay = (date: string) => {
    return festivalsData.flatMap(festival =>
      festival.days
        .filter(day => day.date === date)
        .flatMap(day => day.events.map(event => ({ ...event, festivalName: festival.name, location: festival.location, duration: event.duration, tickettier: day.ticketTiers[0]})))
    );
  };

const aggregateEventsByFestival = (events: { time: string; duration: number; description: string; tickettier: TicketTier; location: string; festivalName: string }[]) => {
    const aggregated: { [key: string]: { time: string, duration: number, tickettier: TicketTier, descriptions: string[], location: string } } = {};

    events.forEach(event => {
      if (!aggregated[event.festivalName]) {
        aggregated[event.festivalName] = { time: event.time, duration: event.duration, descriptions: [], location: event.location, tickettier: event.tickettier};
      }
      aggregated[event.festivalName].descriptions.push(event.description);

      
    });

    return Object.entries(aggregated).map(([festivalName, data]) => {
      const endTime = moment(data.time, 'h:mm A').add(data.duration, 'hours').format('h:mm A');
      const timeRange = `${data.time} - ${endTime}`;
      return {
        festivalName,
        timeRange,
        descriptions: data.descriptions.join(', '),
        location: data.location,
        tickettier: data.tickettier,
      };
    });
  };

  const allEventsForSelectedDay = getAllEventsForDay(selectedDate);
  const aggregatedEvents = aggregateEventsByFestival(allEventsForSelectedDay);

  const selectedDay = selectedFestival.days.find(day => day.date === selectedDate);

  const openModal = (location: string) => {
    setModalLocation(location);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalLocation('');
  };




  const calendarEvents = festivalsData.flatMap(festival =>
    festival.days.flatMap(day =>
      day.events.flatMap(event => {
        const startTime = moment.tz(`${day.date} ${event.time}`, 'YYYY-MM-DD h:mm A', 'America/Denver').toDate();
        const endTime = moment(startTime).add(event.duration, 'hours').toDate();
  
        const events = [];
  
        // Check if the event goes past midnight
        if (moment(startTime).isSame(endTime, 'day')) {
          // Event does not go past midnight
          events.push({
            title: `${festival.name} - ${event.description}`,
            start: startTime,
            end: endTime,
          });
        } else {
          // Event goes past midnight
          const midnight = moment(startTime).endOf('day').toDate();
          const nextDayStart = moment(midnight).add(1, 'minute').toDate();
  
          // Event part 1: from start time to midnight
          events.push({
            title: `${festival.name} - ${event.description}`,
            start: startTime,
            end: midnight,
          });
  
          // Event part 2: from midnight to end time
          events.push({
            title: `${festival.name} - ${event.description}`,
            start: nextDayStart,
            end: endTime,
          });
        }
  
        return events;
      })
    )
  );


  return (
    
    
    <div className="page-container" color="primary">
      <span style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}> 
        <Image
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Calgary_Stampede_Logo.svg/2560px-Calgary_Stampede_Logo.svg.png?20110803212241"
          alt="Calgary Stampede Logo"
          width={300}
          height={200}
        />
        <h1 className="page-title">ONE</h1>
      </span>

      
      <div className="summary-container">
        <h2 className="summary-title">All Events During {new Date(selectedDate).toDateString()}</h2>

        <div className=''>
          <Tabs
            aria-label="Festival Dates"
            selectedKey={selectedDate}
            fullWidth = {true}
            onSelectionChange={(key) => handleDateChange(key as string)}
            classNames= {{
              tabList: "gap-6 w-full relative rounded-none pt-1 pr-2 pl-2 pb-1",
              cursor: "w-full text-xl",
              tab: "max-w-fit px-0 h-16 p-1",
              tabContent: "group-data-[selected=true]:text-xl text-base font-medium",

            }}
            color='primary'
            radius='sm'
          >
            {selectedFestival.days.map((day: Day) => {
              const parsedDate = moment.tz(day.date, 'YYYY-MM-DD', 'America/Denver').format('dddd, MMMM Do');
              const justNum = moment.tz(day.date, 'YYYY-MM-DD', 'America/Denver').format('D');
              const isSelected = selectedDate === day.date;
              return (
                <Tab
                  className='light'
                  key={day.date}
                  title={isSelected ? parsedDate : `${justNum}th`} // Change text based on selection
                />
              );
            })}
          </Tabs>
        </div>
        <Table className='table-container' isStriped aria-label="Summary of All Festivals" color='default'
        classNames= {{
        }}
        >
            <TableHeader>
            <TableColumn><p className='tb-header'> Event</p></TableColumn>
            <TableColumn><p className='tb-header'>Time Range</p></TableColumn>
            <TableColumn><p className='tb-header'>Events</p></TableColumn>
            <TableColumn><p className='tb-header'>Location</p></TableColumn>
            <TableColumn><p className='tb-header'>Ticket Tiers</p></TableColumn>
            </TableHeader>
          <TableBody>
            {aggregatedEvents.map((event, index) => (
              <TableRow key={index}>
                <TableCell>
                <span
                  className="cursor-pointer text-blue-500"
                  onClick={() => handleFestivalChange(festivalsData.find(festival => festival.name === event.festivalName)!)}
                >
                  <p className='tb-body'>{event.festivalName}</p>
                </span>
                </TableCell>
                <TableCell><p className='tb-body'>{event.timeRange}</p></TableCell>
                <TableCell><p className='tb-body'>{event.descriptions}</p></TableCell>
                <TableCell>
                  <span
                    className="cursor-pointer text-blue-500"
                    onClick={() => openModal(event.location)}
                  >
                    <p className='tb-body underline'>{event.festivalName}</p>
                  </span>
                </TableCell>
                <TableCell>
                {event.tickettier && (
                  <div>
                    <a href={event.tickettier.url} target="_blank" rel="noopener noreferrer" className="tb-body underline">
                      {event.tickettier.tier}: {event.tickettier.price}
                    </a>
                  </div>
                )}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <div className="calendar-container">
      <MyCalendar 
        events={calendarEvents} 
        selectedDate={new Date(moment(selectedDate, 'YYYY-MM-DD').format('YYYY-MM-DDTHH:mm:ssZ'))} 
        onDateChange={(date: Date) => handleDateChange(moment(date).format('YYYY-MM-DDTHH:mm:ssZ'))} 
      />
        </div>
      </div>
      <div className="overflow-x-auto">
        <Tabs
          aria-label="Festivals"
          selectedKey={selectedFestival.name}
          fullWidth
          onSelectionChange={(key) => handleFestivalChange(festivalsData.find(festival => festival.name === key)!)}
          className=''
          color='primary'
          radius='sm'
          variant='bordered'
        >
          {festivalsData.map((festival) => (
            <Tab key={festival.name} title={festival.name} />
          ))}
        </Tabs>
      </div>
      <div className="summary-container">

          
        <Table className='w-full text-2xl light table-container' isStriped aria-label="Summary of all events" color='default'>
          <TableHeader>
            <TableColumn><p className='tb-header'>Date</p></TableColumn>
            <TableColumn><p className='tb-header'>Time Range</p></TableColumn>
            <TableColumn><p className='tb-header'>Events</p></TableColumn>
            <TableColumn><p className='tb-header'>Tickets</p></TableColumn>
          </TableHeader>
          <TableBody>
            {selectedFestival.days.map((day, dayIndex) => {
              const endTime = moment(day.events[0].time, 'h:mm A').add(day.events[0].duration, 'hours').format('h:mm A');
              const timeRange = `${day.events[0].time} - ${endTime}`;
              const descriptions = day.events.map(event => event.description).join(', ');
              return (
          <TableRow key={dayIndex} className="table-row">
            <TableCell><p className='tb-body'>{new Date(day.date).toDateString()}</p></TableCell>
            <TableCell><p className='tb-body'>{timeRange}</p></TableCell>
            <TableCell><p className='tb-body'>{descriptions}</p></TableCell>
            <TableCell>
              {day.ticketTiers?.map((tier, tierIndex) => (
                <div key={tierIndex}>
            <a href={tier.url} target="_blank" rel="noopener noreferrer" className="tb-body underline">
              {tier.tier}: {tier.price}
            </a>
                </div>
              ))}
            </TableCell>
          </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </div>
      <Modal
        closeButton
        aria-labelledby="modal-title"
        isOpen={isModalOpen}
        onClose={closeModal}
      >
        <ModalContent>
        <ModalHeader> Location
        </ModalHeader>
        <ModalBody>
          <iframe
            src={`https://www.google.com/maps/embed/v1/place?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}&q=${encodeURIComponent(modalLocation)}`}
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="eager"
          ></iframe>
        </ModalBody>
        <ModalFooter>
          <Button color="danger" onClick={closeModal}>
            Close
          </Button>
        </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
};

export default FestivalsPage;