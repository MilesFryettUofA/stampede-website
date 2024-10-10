// festivalsData.ts
export interface TicketTier {
    tier: string;
    price: string;
    url: string;
  }
  
  export interface Event {
    time: string;
    description: string;
    duration: number; // Use number type for float values
  }
  
  export interface Day {
    date: string;
    events: Event[];
    ticketTiers: TicketTier[]; // Ticket tiers for the entire day
  }
  
  export interface Festival {
    name: string;
    location: string;
    image: string;
    fb: string;
    x: string;
    days: Day[];
  }
  
  export const festivalsData: Festival[] = [
    {
      name: "Cowboys Music Festival",
      location: "519 12th Ave SE, Calgary, AB T2G 0S2",
      image: "https://cdn.prod.website-files.com/655565965a7623a0e933deb0/655565965a7623a0e933e028_653a4db21d377f67d4f35a5a_Cowboys%252BMusic%252BFestival%252B-%252BPast%252BLineups1.png",
      fb: 'https://www.facebook.com/CowboysMusicFestival/?locale=br_FR&_rdr',
      x: 'CowboysFestival',

      days: [
        {
          date: "2024-05-04",
          events: [
            { time: "5:00 PM", description: "Kip Moore", duration: 1.5 },
            { time: "6:30 PM", description: "Brett Kissel", duration: 1.5 },
            { time: "8:00 PM", description: "Cooper Allen", duration: 1.5 },
          ],
          ticketTiers: [
            { tier: "General", price: "$70", url: "https://example.com/tickets/general" },
            { tier: "VIP", price: "$200", url: "https://example.com/tickets/vip" },
          ],
        },
        {
          date: "2023-05-05",
          events: [
            { time: "3:00 PM", description: "Tate Mcrae", duration: 1.5 },
            { time: "6:30 PM", description: "Friday night show", duration: 1.5 },
          ],
          ticketTiers: [
            { tier: "General", price: "$50", url: "https://example.com/tickets/general" },
            { tier: "VIP", price: "$100", url: "https://example.com/tickets/vip" },
          ],
        },
        {
          date: "2023-05-06",
          events: [
            { time: "8:00 PM", description: "Tucker Wetmore", duration: 1.5 },
            { time: "9:30 PM", description: "Riley Green", duration: 1.5 },
          ],
          ticketTiers: [
            { tier: "General", price: "$50", url: "https://example.com/tickets/general" },
            { tier: "VIP", price: "$100", url: "https://example.com/tickets/vip" },
          ],
        },
        {
          date: "2023-05-07",
          events: [
            { time: "10:00 AM", description: "Event 7", duration: 1.5 },
            { time: "12:00 PM", description: "Event 8", duration: 1.5 },
          ],
          ticketTiers: [
            { tier: "General", price: "$50", url: "https://example.com/tickets/general" },
            { tier: "VIP", price: "$100", url: "https://example.com/tickets/vip" },
          ],
        },
        {
          date: "2023-05-08",
          events: [
            { time: "10:00 AM", description: "Event 9", duration: 1.5 },
            { time: "12:00 PM", description: "Event 10", duration: 1.5 },
          ],
          ticketTiers: [
            { tier: "General", price: "$50", url: "https://example.com/tickets/general" },
            { tier: "VIP", price: "$100", url: "https://example.com/tickets/vip" },
          ],
        },
        {
          date: "2023-05-09",
          events: [
            { time: "10:00 AM", description: "Event 11", duration: 1.5 },
            { time: "12:00 PM", description: "Event 12", duration: 1.5 },
          ],
          ticketTiers: [
            { tier: "General", price: "$50", url: "https://example.com/tickets/general" },
            { tier: "VIP", price: "$100", url: "https://example.com/tickets/vip" },
          ],
        },
        {
          date: "2023-05-10",
          events: [
            { time: "10:00 AM", description: "Event 13", duration: 1.5 },
            { time: "12:00 PM", description: "Event 14", duration: 1.5 },
          ],
          ticketTiers: [
            { tier: "General", price: "$50", url: "https://example.com/tickets/general" },
            { tier: "VIP", price: "$100", url: "https://example.com/tickets/vip" },
          ],
        },
        {
          date: "2023-05-11",
          events: [
            { time: "10:00 AM", description: "Event 15", duration: 1.5 },
            { time: "12:00 PM", description: "Event 16", duration: 1.5 },
          ],
          ticketTiers: [
            { tier: "General", price: "$50", url: "https://example.com/tickets/general" },
            { tier: "VIP", price: "$100", url: "https://example.com/tickets/vip" },
          ],
        },
        {
          date: "2023-05-12",
          events: [
            { time: "10:00 AM", description: "Event 17", duration: 1.5 },
            { time: "12:00 PM", description: "Event 18", duration: 1.5 },
          ],
          ticketTiers: [
            { tier: "General", price: "$50", url: "https://example.com/tickets/general" },
            { tier: "VIP", price: "$100", url: "https://example.com/tickets/vip" },
          ],
        },
        {
          date: "2023-05-13",
          events: [
            { time: "10:00 AM", description: "Event 19", duration: 1.5 },
            { time: "12:00 PM", description: "Event 20", duration: 1.5 },
          ],
          ticketTiers: [
            { tier: "General", price: "$50", url: "https://example.com/tickets/general" },
            { tier: "VIP", price: "$100", url: "https://example.com/tickets/vip" },
          ],
        },
      ],
      
    },
    {
      name: "Badlands Music Festival",
      location: "725 9TH AVE SW, CALGARY,AB T2P 1K8",
      image: "/images/festival2.jpg",
      fb: '',
      x: 'BADLANDSfest',
      days: [
        {
          date: "2023-05-04",
          events: [
            { time: "11:00 AM", description: "Event 1", duration: 1.5 },
            { time: "01:00 PM", description: "Event 2", duration: 1.5 },
          ],
          ticketTiers: [
            { tier: "General", price: "$60", url: "https://www.badlandsmusicfest.com/" },
            { tier: "VIP", price: "$120", url: "https://www.badlandsmusicfest.com/" },
          ],
        },
        {
          date: "2023-05-05",
          events: [
            { time: "11:00 AM", description: "Event 3", duration: 1.5 },
            { time: "01:00 PM", description: "Event 4", duration: 1.5 },
          ],
          ticketTiers: [
            { tier: "General", price: "$60", url: "https://www.badlandsmusicfest.com/" },
            { tier: "VIP", price: "$120", url: "https://www.badlandsmusicfest.com/" },
          ],
        },
        {
          date: "2023-05-06",
          events: [
            { time: "11:00 AM", description: "Event 5", duration: 1.5 },
            { time: "01:00 PM", description: "Event 6", duration: 1.5 },
          ],
          ticketTiers: [
            { tier: "General", price: "$60", url: "https://www.badlandsmusicfest.com/" },
            { tier: "VIP", price: "$120", url: "https://www.badlandsmusicfest.com/" },
          ],
        },
        {
          date: "2023-05-07",
          events: [
            { time: "11:00 AM", description: "Event 7", duration: 1.5 },
            { time: "01:00 PM", description: "Event 8", duration: 1.5 },
          ],
          ticketTiers: [
            { tier: "General", price: "$60", url: "https://www.badlandsmusicfest.com/" },
            { tier: "VIP", price: "$120", url: "https://www.badlandsmusicfest.com/" },
          ],
        },
        {
          date: "2023-05-08",
          events: [
            { time: "11:00 AM", description: "Event 9", duration: 1.5 },
            { time: "01:00 PM", description: "Event 10", duration: 1.5 },
          ],
          ticketTiers: [
            { tier: "General", price: "$60", url: "https://www.badlandsmusicfest.com/" },
            { tier: "VIP", price: "$120", url: "https://www.badlandsmusicfest.com/" },
          ],
        },
        {
          date: "2023-05-09",
          events: [
            { time: "11:00 AM", description: "Event 11", duration: 1.5 },
            { time: "01:00 PM", description: "Event 12", duration: 1.5 },
          ],
          ticketTiers: [
            { tier: "General", price: "$60", url: "https://www.badlandsmusicfest.com/" },
            { tier: "VIP", price: "$120", url: "https://www.badlandsmusicfest.com/" },
          ],
        },
        {
          date: "2023-05-10",
          events: [
            { time: "11:00 AM", description: "Event 13", duration: 1.5 },
            { time: "01:00 PM", description: "Event 14", duration: 1.5 },
          ],
          ticketTiers: [
            { tier: "General", price: "$60", url: "https://www.badlandsmusicfest.com/" },
            { tier: "VIP", price: "$120", url: "https://www.badlandsmusicfest.com/" },
          ],
        },
        {
          date: "2023-05-11",
          events: [
            { time: "11:00 AM", description: "Event 15", duration: 1.5 },
            { time: "01:00 PM", description: "Event 16", duration: 1.5 },
          ],
          ticketTiers: [
            { tier: "General", price: "$60", url: "https://www.badlandsmusicfest.com/" },
            { tier: "VIP", price: "$120", url: "https://www.badlandsmusicfest.com/" },
          ],
        },
        {
          date: "2023-05-12",
          events: [
            { time: "11:00 AM", description: "Event 17", duration: 1.5 },
            { time: "01:00 PM", description: "Event 18", duration: 1.5 },
          ],
          ticketTiers: [
            { tier: "General", price: "$60", url: "https://www.badlandsmusicfest.com/" },
            { tier: "VIP", price: "$120", url: "https://www.badlandsmusicfest.com/" },
          ],
        },
        {
          date: "2023-05-13",
          events: [
            { time: "11:00 AM", description: "Event 19", duration: 1.5 },
            { time: "01:00 PM", description: "Event 20", duration: 1.5 },
          ],
          ticketTiers: [
            { tier: "General", price: "$60", url: "https://www.badlandsmusicfest.com/" },
            { tier: "VIP", price: "$120", url: "https://www.badlandsmusicfest.com/" },
          ],
        },
      ],
      
    },
    {
      name: "National Saloon",
      location: "725 9TH AVE SW, CALGARY,AB T2P 1K8",
      image: "/images/festival2.jpg",
      fb: '',
      x: '',
      days: [
        {
          date: "2023-05-04",
          events: [
            { time: "11:00 AM", description: "Event 1", duration: 1.5 },
            { time: "01:00 PM", description: "Event 2", duration: 1.5 },
          ],
          ticketTiers: [
            { tier: "General", price: "$60", url: "https://www.badlandsmusicfest.com/" },
            { tier: "VIP", price: "$120", url: "https://www.badlandsmusicfest.com/" },
          ],
        },
        {
          date: "2023-05-05",
          events: [
            { time: "11:00 AM", description: "Event 3", duration: 1.5 },
            { time: "01:00 PM", description: "Event 4", duration: 1.5 },
          ],
          ticketTiers: [
            { tier: "General", price: "$60", url: "https://www.badlandsmusicfest.com/" },
            { tier: "VIP", price: "$120", url: "https://www.badlandsmusicfest.com/" },
          ],
        },
        {
          date: "2023-05-06",
          events: [
            { time: "11:00 AM", description: "Event 5", duration: 1.5 },
            { time: "01:00 PM", description: "Event 6", duration: 1.5 },
          ],
          ticketTiers: [
            { tier: "General", price: "$60", url: "https://www.badlandsmusicfest.com/" },
            { tier: "VIP", price: "$120", url: "https://www.badlandsmusicfest.com/" },
          ],
        },
        {
          date: "2023-05-07",
          events: [
            { time: "11:00 AM", description: "Event 7", duration: 1.5 },
            { time: "01:00 PM", description: "Event 8", duration: 1.5 },
          ],
          ticketTiers: [
            { tier: "General", price: "$60", url: "https://www.badlandsmusicfest.com/" },
            { tier: "VIP", price: "$120", url: "https://www.badlandsmusicfest.com/" },
          ],
        },
        {
          date: "2023-05-08",
          events: [
            { time: "11:00 AM", description: "Event 9", duration: 1.5 },
            { time: "01:00 PM", description: "Event 10", duration: 1.5 },
          ],
          ticketTiers: [
            { tier: "General", price: "$60", url: "https://www.badlandsmusicfest.com/" },
            { tier: "VIP", price: "$120", url: "https://www.badlandsmusicfest.com/" },
          ],
        },
        {
          date: "2023-05-09",
          events: [
            { time: "11:00 AM", description: "Event 11", duration: 1.5 },
            { time: "01:00 PM", description: "Event 12", duration: 1.5 },
          ],
          ticketTiers: [
            { tier: "General", price: "$60", url: "https://www.badlandsmusicfest.com/" },
            { tier: "VIP", price: "$120", url: "https://www.badlandsmusicfest.com/" },
          ],
        },
        {
          date: "2023-05-10",
          events: [
            { time: "11:00 AM", description: "Event 13", duration: 1.5 },
            { time: "01:00 PM", description: "Event 14", duration: 1.5 },
          ],
          ticketTiers: [
            { tier: "General", price: "$60", url: "https://www.badlandsmusicfest.com/" },
            { tier: "VIP", price: "$120", url: "https://www.badlandsmusicfest.com/" },
          ],
        },
        {
          date: "2023-05-11",
          events: [
            { time: "11:00 AM", description: "Event 15", duration: 1.5 },
            { time: "01:00 PM", description: "Event 16", duration: 1.5 },
          ],
          ticketTiers: [
            { tier: "General", price: "$60", url: "https://www.badlandsmusicfest.com/" },
            { tier: "VIP", price: "$120", url: "https://www.badlandsmusicfest.com/" },
          ],
        },
        {
          date: "2023-05-12",
          events: [
            { time: "11:00 AM", description: "Event 17", duration: 1.5 },
            { time: "01:00 PM", description: "Event 18", duration: 1.5 },
          ],
          ticketTiers: [
            { tier: "General", price: "$60", url: "https://www.badlandsmusicfest.com/" },
            { tier: "VIP", price: "$120", url: "https://www.badlandsmusicfest.com/" },
          ],
        },
        {
          date: "2023-05-13",
          events: [
            { time: "11:00 AM", description: "Event 19", duration: 1.5 },
            { time: "01:00 PM", description: "Event 20", duration: 1.5 },
          ],
          ticketTiers: [
            { tier: "General", price: "$60", url: "https://www.badlandsmusicfest.com/" },
            { tier: "VIP", price: "$120", url: "https://www.badlandsmusicfest.com/" },
          ],
        },
      ],
    },
    // Add more festivals as needed
  ];