// festivalsData.ts
export interface TicketTier {
    tier: string;
    price: string;
    url: string;
  }
  
  export interface Event {
    time: string;
    description: string;
  }
  
  export interface Day {
    date: string;
    events: Event[];
  }
  
  export interface Festival {
    name: string;
    location: string;
    image: string;
    days: Day[];
    ticketTiers: TicketTier[];
  }
  
  export const festivalsData: Festival[] = [
    {
      name: "Festival 1",
      location: "Location 1",
      image: "/images/festival1.jpg",
      days: [
        {
          date: "2023-07-01",
          events: [
            { time: "10:00 AM", description: "Event 1" },
            { time: "12:00 PM", description: "Event 2" },
          ],
        },
        {
          date: "2023-07-02",
          events: [
            { time: "10:00 AM", description: "Event 3" },
            { time: "12:00 PM", description: "Event 4" },
          ],
        },
        {
          date: "2023-07-03",
          events: [
            { time: "10:00 AM", description: "Event 5" },
            { time: "12:00 PM", description: "Event 6" },
          ],
        },
        {
          date: "2023-07-04",
          events: [
            { time: "10:00 AM", description: "Event 7" },
            { time: "12:00 PM", description: "Event 8" },
          ],
        },
        {
          date: "2023-07-05",
          events: [
            { time: "10:00 AM", description: "Event 9" },
            { time: "12:00 PM", description: "Event 10" },
          ],
        },
        {
          date: "2023-07-06",
          events: [
            { time: "10:00 AM", description: "Event 11" },
            { time: "12:00 PM", description: "Event 12" },
          ],
        },
        {
          date: "2023-07-07",
          events: [
            { time: "10:00 AM", description: "Event 13" },
            { time: "12:00 PM", description: "Event 14" },
          ],
        },
        {
          date: "2023-07-08",
          events: [
            { time: "10:00 AM", description: "Event 15" },
            { time: "12:00 PM", description: "Event 16" },
          ],
        },
        {
          date: "2023-07-09",
          events: [
            { time: "10:00 AM", description: "Event 17" },
            { time: "12:00 PM", description: "Event 18" },
          ],
        },
        {
          date: "2023-07-10",
          events: [
            { time: "10:00 AM", description: "Event 19" },
            { time: "12:00 PM", description: "Event 20" },
          ],
        },
      ],
      ticketTiers: [
        { tier: "General", price: "$50", url: "https://example.com/tickets/general" },
        { tier: "VIP", price: "$100", url: "https://example.com/tickets/vip" },
      ],
    },
    {
      name: "Festival 2",
      location: "Location 2",
      image: "/images/festival2.jpg",
      days: [
        {
          date: "2023-07-01",
          events: [
            { time: "11:00 AM", description: "Event 1" },
            { time: "01:00 PM", description: "Event 2" },
          ],
        },
        {
          date: "2023-07-02",
          events: [
            { time: "11:00 AM", description: "Event 3" },
            { time: "01:00 PM", description: "Event 4" },
          ],
        },
        {
          date: "2023-07-03",
          events: [
            { time: "11:00 AM", description: "Event 5" },
            { time: "01:00 PM", description: "Event 6" },
          ],
        },
        {
          date: "2023-07-04",
          events: [
            { time: "11:00 AM", description: "Event 7" },
            { time: "01:00 PM", description: "Event 8" },
          ],
        },
        {
          date: "2023-07-05",
          events: [
            { time: "11:00 AM", description: "Event 9" },
            { time: "01:00 PM", description: "Event 10" },
          ],
        },
        {
          date: "2023-07-06",
          events: [
            { time: "11:00 AM", description: "Event 11" },
            { time: "01:00 PM", description: "Event 12" },
          ],
        },
        {
          date: "2023-07-07",
          events: [
            { time: "11:00 AM", description: "Event 13" },
            { time: "01:00 PM", description: "Event 14" },
          ],
        },
        {
          date: "2023-07-08",
          events: [
            { time: "11:00 AM", description: "Event 15" },
            { time: "01:00 PM", description: "Event 16" },
          ],
        },
        {
          date: "2023-07-09",
          events: [
            { time: "11:00 AM", description: "Event 17" },
            { time: "01:00 PM", description: "Event 18" },
          ],
        },
        {
          date: "2023-07-10",
          events: [
            { time: "11:00 AM", description: "Event 19" },
            { time: "01:00 PM", description: "Event 20" },
          ],
        },
      ],
      ticketTiers: [
        { tier: "General", price: "$60", url: "https://example.com/tickets/general" },
        { tier: "VIP", price: "$120", url: "https://example.com/tickets/vip" },
      ],
    },
    // Add more festivals as needed
  ];