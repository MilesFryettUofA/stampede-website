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
      image: "https://www.shopcowboysstore.com/cdn/shop/files/COWBOYS_MUSIC_FESTIVAL-01_CALGARY-B-01_300x300.png?v=1613574691",
      fb: 'https://www.facebook.com/CowboysMusicFestival/?locale=br_FR&_rdr',
      x: 'CowboysFestival',

      days: [
        {
          date: "2025-07-04",
          events: [
            { time: "05:00 PM", description: "TBA", duration: 9},

          ],
          ticketTiers: [
            { tier: "General", price: "TBA", url: "https://www.tixr.com/groups/cowboysmusicfestival" },
          ],
        },
        {
          date: "2025-07-05",
          events: [
            { time: "05:00 PM", description: "TBA", duration: 9},

          ],
          ticketTiers: [
            { tier: "General", price: "TBA", url: "https://www.tixr.com/groups/cowboysmusicfestival" },
          ],
        },
        {
          date: "2025-07-06",
          events: [
            { time: "05:00 PM", description: "Thomas Rhett", duration: 9 },
          ],
          ticketTiers: [
            { tier: "General", price: "TBA", url: "https://www.tixr.com/groups/cowboysmusicfestival" },
          ],
        },
        {
          date: "2025-07-07",
          events: [
            { time: "05:00 PM", description: "KYGO", duration: 9 },
          ],
          ticketTiers: [
            { tier: "General", price: "TBA", url: "https://www.tixr.com/groups/cowboysmusicfestival" },
          ],
        },
        {
          date: "2025-07-08",
          events: [
            { time: "05:00 PM", description: "TBA", duration: 9},

          ],
          ticketTiers: [
            { tier: "General", price: "TBA", url: "https://www.tixr.com/groups/cowboysmusicfestival" },
          ],
        },
        {
          date: "2025-07-09",
          events: [
            { time: "05:00 PM", description: "TBA", duration: 9},

          ],
          ticketTiers: [
            { tier: "General", price: "TBA", url: "https://www.tixr.com/groups/cowboysmusicfestival" },
          ],
        },
        {
          date: "2025-07-10",
          events: [
            { time: "05:00 PM", description: "TBA", duration: 9},

          ],
          ticketTiers: [
            { tier: "General", price: "TBA", url: "https://www.tixr.com/groups/cowboysmusicfestival" },
          ],
        },
        {
          date: "2025-07-11",
          events: [
            { time: "05:00 PM", description: "TBA", duration: 9},

          ],
          ticketTiers: [
            { tier: "General", price: "TBA", url: "https://www.tixr.com/groups/cowboysmusicfestival" },
          ],
        },
        {
          date: "2025-07-12",
          events: [
            { time: "05:00 PM", description: "TBA", duration: 9},

          ],
          ticketTiers: [
            { tier: "General", price: "TBA", url: "https://www.tixr.com/groups/cowboysmusicfestival" },
          ],
        },
        {
          date: "2025-07-13",
          events: [
            { time: "05:00 PM", description: "TBA", duration: 9},

          ],
          ticketTiers: [
            { tier: "General", price: "TBA", url: "https://www.tixr.com/groups/cowboysmusicfestival" },
          ],
        },
      ],
      
    },
    {
      name: "Badlands Music Festival",
      location: "725 9TH AVE SW, CALGARY,AB",
      image: "https://i.ticketweb.com/i/00/12/54/20/33_Edp.jpg?v=76",
      fb: 'https://www.facebook.com/badlandsmusicfest/?locale=br_FR&_rdr',
      x: '',

      days: [
        {
          date: "2025-07-03",
          events: [
            { time: "06:00 PM", description: "Tiesto", duration: 8},

          ],
          ticketTiers: [
            { tier: "General", price: "TBA", url: "https://ticketweb.ca/search?q=badlands" },
          ],
        },
        {
          date: "2025-07-04",
          events: [
            { time: "05:00 PM", description: "TBA", duration: 9},

          ],
          ticketTiers: [
            { tier: "General", price: "TBA", url: "https://ticketweb.ca/search?q=badlands" },
          ],
        },
        {
          date: "2025-07-05",
          events: [
            { time: "05:00 PM", description: "TBA", duration: 9},

          ],
          ticketTiers: [
            { tier: "General", price: "TBA", url: "https://ticketweb.ca/search?q=badlands" },
          ],
        },
        {
          date: "2025-07-06",
          events: [
            { time: "05:00 PM", description: "Thomas Rhett", duration: 9 },
          ],
          ticketTiers: [
            { tier: "General", price: "TBA", url: "https://ticketweb.ca/search?q=badlands" },
          ],
        },
        {
          date: "2025-07-07",
          events: [
            { time: "05:00 PM", description: "KYGO", duration: 9 },
          ],
          ticketTiers: [
            { tier: "General", price: "TBA", url: "https://ticketweb.ca/search?q=badlands" },
          ],
        },
        {
          date: "2025-07-08",
          events: [
            { time: "05:00 PM", description: "TBA", duration: 9},

          ],
          ticketTiers: [
            { tier: "General", price: "TBA", url: "https://ticketweb.ca/search?q=badlands" },
          ],
        },
        {
          date: "2025-07-09",
          events: [
            { time: "05:00 PM", description: "TBA", duration: 9},

          ],
          ticketTiers: [
            { tier: "General", price: "TBA", url: "https://ticketweb.ca/search?q=badlands" },
          ],
        },
        {
          date: "2025-07-10",
          events: [
            { time: "05:00 PM", description: "TBA", duration: 9},

          ],
          ticketTiers: [
            { tier: "General", price: "TBA", url: "https://ticketweb.ca/search?q=badlands" },
          ],
        },
        {
          date: "2025-07-11",
          events: [
            { time: "05:00 PM", description: "TBA", duration: 9},

          ],
          ticketTiers: [
            { tier: "General", price: "TBA", url: "https://ticketweb.ca/search?q=badlands" },
          ],
        },
        {
          date: "2025-07-12",
          events: [
            { time: "05:00 PM", description: "TBA", duration: 9},

          ],
          ticketTiers: [
            { tier: "General", price: "TBA", url: "https://ticketweb.ca/search?q=badlands" },
          ],
        },
        {
          date: "2025-07-13",
          events: [
            { time: "05:00 PM", description: "TBA", duration: 9},

          ],
          ticketTiers: [
            { tier: "General", price: "TBA", url: "https://ticketweb.ca/search?q=badlands" },
          ],
        },
      ],
      
    },
    {
      name: "Stampede Concert Series",
      location: "555 Saddledome Rise SE, Calgary, AB T2G 2W1",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Calgary_Stampede_Logo.svg/320px-Calgary_Stampede_Logo.svg.png",
      fb: 'https://www.facebook.com/scotiabanksaddledome/?locale=br_FR&_rdr',
      x: 'cgysaddledome',

      days: [
        {
          date: "2025-07-05",
          events: [
            { time: "07:30 PM", description: "Shania Twain", duration: 4},

          ],
          ticketTiers: [
            { tier: "TicketMaster", price: "194+", url: "https://ticketmaster.ca/event/11006150E8574A77?referrer=https%3A%2F%2Fwww.calgarystampede.com%2F" },
          ],
        },
      ],
      
    },
    // Add more festivals as needed
  ];