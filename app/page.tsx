// pages/festivals.tsx
"use client";

import React, { useState } from 'react';
import { festivalsData, Festival, Day } from './festivalsData';
import './styles/FestivalsPage.css';
import './styles/theme.css';
import {  Table,  TableHeader,  TableBody,  TableColumn,  TableRow,  TableCell} from "@nextui-org/table";


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

  return (
    <div className="page-container">
      <h1 className="page-title">Calgary Stampede Music Festivals</h1>
      <div className="date-buttons">
        {selectedFestival.days.map((day, index) => (
          <button
            key={index}
            onClick={() => handleDateChange(day.date)}
            className={`date-button ${selectedDate === day.date ? 'date-button-selected' : 'date-button-unselected'}`}
          >
            {new Date(day.date).toDateString()}
          </button>
        ))}
      </div>
      <div className="summary-container">
        <h2 className="summary-title">Summary of All Festivals on {new Date(selectedDate).toDateString()}</h2>
        <Table isStriped aria-label="Summary of All Festivals">
          <TableHeader>
            <TableColumn>Festival</TableColumn>
            <TableColumn>Time Range</TableColumn>
            <TableColumn>Events</TableColumn>
            <TableColumn>Location</TableColumn>
            <TableColumn>Ticket Tiers</TableColumn>
          </TableHeader>
          <TableBody>
            {aggregatedEvents.map((event, index) => (
              <TableRow key={index}>
          <TableCell>
            <span
              className="cursor-pointer text-blue-500"
              onClick={() => handleFestivalChange(festivalsData.find(festival => festival.name === event.festivalName)!)}
            >
              {event.festivalName}
            </span>
          </TableCell>
          <TableCell>{event.timeRange}</TableCell>
          <TableCell>{event.descriptions}</TableCell>
          <TableCell>
            <button
              className="text-blue-500 underline"
              onClick={() => openModal(event.location)}
            >
              {event.location}
            </button>
          </TableCell>
          <TableCell>
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
      </div>
      <div className="festival-buttons">
        {festivalsData.map((festival) => (
          <button
            key={festival.name}
            onClick={() => handleFestivalChange(festival)}
            className={`festival-button ${selectedFestival.name === festival.name ? 'festival-button-selected' : 'festival-button-unselected'}`}
          >
            {festival.name}
          </button>
        ))}
      </div>
      <div className="festival-details">
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
        <table className="table">
          <thead>
            <tr>
              <th className="border px-4 py-2">Time</th>
              <th className="border px-4 py-2">Event</th>
            </tr>
          </thead>
          <tbody>
            {selectedDay?.events.map((event, index) => (
              <tr key={index} className="table-row">
                <td className="border px-4 py-2">{event.time}</td>
                <td className="border px-4 py-2">{event.description}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h2 className="modal-title">Location</h2>
            <iframe
              src={`https://www.google.com/maps/embed/v1/place?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}&q=${encodeURIComponent(modalLocation)}`}
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
            ></iframe>
            <button
              className="modal-close-button"
              onClick={closeModal}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default FestivalsPage;