// pages/festivals.tsx
"use client";

import React, { useState } from 'react';
import { festivalsData, Festival, Day } from './festivalsData';
import './styles/FestivalsPage.css';
import './styles/theme.css';
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Input,
  Button,
  DropdownTrigger,
  Dropdown,
  DropdownMenu,
  DropdownItem,
  Chip,
  User,
  Pagination,
  Tab,
  Tabs,
  NextUIProvider, 
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  ModalContent,


} from "@nextui-org/react";
import MyCalendar from './Calendar';
import moment from 'moment';
import 'moment-timezone' // or 'moment-timezone/builds/moment-timezone-with-data[-datarange].js'. See their docs
import StampedeLogo from './img/Calgary_Stampede_Logo.png'; // Import the image

// Set the IANA time zone you want to use
moment.tz.setDefault('america/denver')




const FestivalsPage: React.FC = () => {
  const [selectedFestival, setSelectedFestival] = useState<Festival>(festivalsData[0]);
  const [selectedDate, setSelectedDate] = useState<string>('2023-07-01');
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
        .flatMap(day => day.events.map(event => ({ ...event, festivalName: festival.name, location: festival.location })))
    );
  };

  const aggregateEventsByFestival = (events: { time: string; description: string; location: string; festivalName: string }[]) => {
    const aggregated: { [key: string]: { times: string[], descriptions: string[], location: string } } = {};

    events.forEach(event => {
      if (!aggregated[event.festivalName]) {
        aggregated[event.festivalName] = { times: [], descriptions: [], location: event.location };
      }
      aggregated[event.festivalName].times.push(event.time);
      aggregated[event.festivalName].descriptions.push(event.description);
    });

    return Object.entries(aggregated).map(([festivalName, data]) => {
      const timeRange = `${data.times[0]} - ${data.times[data.times.length - 1]}`;
      return {
        festivalName,
        timeRange,
        descriptions: data.descriptions.join(', '),
        location: data.location,
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
      day.events.map(event => ({
        title: festival.name + ' - ' + event.description,
        start: new Date(moment(`${day.date} ${event.time}`, 'YYYY-MM-DD HH:mm').format('YYYY-MM-DDTHH:mm:ssZ')),
        end: new Date(moment(`${day.date} ${event.time}`, 'YYYY-MM-DD HH:mm').add(1.5, 'hour').format('YYYY-MM-DDTHH:mm:ssZ')), // Assuming each event lasts 1 hour
      }))
    )
  );

  return (
    <div className="page-container" color="primary">
      <span style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}> 
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Calgary_Stampede_Logo.svg/2560px-Calgary_Stampede_Logo.svg.png?20110803212241"
          alt="Calgary Stampede Logo"
          width={300}
          height={200}
        />
        <h1 className="page-title">ONE</h1>
      </span>

      
      <div className="summary-container">
        <h2 className="summary-title">All Events During {new Date(selectedDate).toDateString()}</h2>

        <div className='overflow-x-auto tab-sty'>
      <Tabs
        aria-label="Festival Dates"
        selectedKey={selectedDate}
        fullWidth
        onSelectionChange={(key) => handleDateChange(key as string)}
        className='flex flex-wrap justify-center space-x-2 sm:space-x-4 md:space-x-6 lg:space-x-8 light large'
        color='primary'
      >
        {selectedFestival.days.map((day) => (
          <Tab
            className='light'
            key={day.date}
            title={new Date(day.date).toDateString()} 
          />
        ))}
      </Tabs>
      </div>
        <Table className='w-full text-2xl light' isStriped aria-label="Summary of All Festivals" color='default'>
            <TableHeader className='text-3xl'>
            <TableColumn className='text-3xl mobile-text-md'>Festival</TableColumn>
            <TableColumn className='text-3xl mobile-text-md'>Time Range</TableColumn>
            <TableColumn className='text-3xl mobile-text-md'>Events</TableColumn>
            <TableColumn className='text-3xl mobile-text-md'>Location</TableColumn>
            <TableColumn className='text-3xl mobile-text-md'>Ticket Tiers</TableColumn>
            </TableHeader>
          <TableBody>
            {aggregatedEvents.map((event, index) => (
              <TableRow key={index}>
            <TableCell className="text-2xl mobile-text-md">
            <span
              className="cursor-pointer text-blue-500"
              onClick={() => handleFestivalChange(festivalsData.find(festival => festival.name === event.festivalName)!)}
            >
              {event.festivalName}
            </span>
            </TableCell>
            <TableCell className="text-2xl mobile-text-md">{event.timeRange}</TableCell>
            <TableCell className="text-2xl mobile-text-md">{event.descriptions}</TableCell>
            <TableCell className="text-2xl mobile-text-md">
            <Button onClick={() => openModal(event.location)}>{event.location}</Button>
            </TableCell>
            <TableCell className="text-2xl mobile-text-md">
            {festivalsData.find(festival => festival.name === event.festivalName)?.ticketTiers.map((tier, tierIndex) => (
              <div key={tierIndex}>
              <a href={tier.url} target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">
              {tier.tier}: {tier.price}
              </a>
              </div>
            ))}
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
          className='flex flex-wrap justify-center space-x-2 sm:space-x-4 md:space-x-6 lg:space-x-8'
          color={"warning"}
        >
          {festivalsData.map((festival) => (
            <Tab key={festival.name} title={festival.name} />
          ))}
        </Tabs>
      </div>
      <div className="summary-container">
        <h2 className="festival-title">{selectedFestival.name}</h2>
        <p className="festival-date">{new Date(selectedDate).toDateString()}</p>
        <p className="festival-location">
          Location: <button className="festival-location-button" onClick={() => openModal(selectedFestival.location)}>{selectedFestival.location}</button>
        </p>
        <div className="festival-image-container">
          <img
            src={selectedFestival.image}
            alt={selectedFestival.name}
            className="festival-image"
            width={300}
            height={200}
          />
        </div>
        <Table className='w-full text-2xl' isStriped aria-label="Events for Selected Day">
          <TableHeader className='text-3xl'>
            <TableColumn className='text-3xl mobile-text-md'>Time</TableColumn>
            <TableColumn className='text-3xl mobile-text-md'>Event</TableColumn>
          </TableHeader>
          <TableBody>
            {(selectedDay?.events ?? []).map((event, index) => (
              <TableRow key={index} className="table-row">
                <TableCell className="text-2xl mobile-text-md">{event.time}</TableCell>
                <TableCell className="text-2xl mobile-text-md">{event.description}</TableCell>
              </TableRow>
            ))}
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