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
    days: Day[];
  }
  
  export const festivalsData: Festival[] = [
    {
      name: "Cowboys Music Festival",
      location: "519 12th Ave SE, Calgary, AB T2G 0S2",
      image: "https://www.shopcowboysstore.com/cdn/shop/files/COWBOYS_MUSIC_FESTIVAL-01_CALGARY-B-01_300x300.png?v=1613574691",

      days: [
        {
          date: "2025-07-03",
          events: [
            { time: "05:00 PM", description: "Zach Top", duration: 9},

          ],
          ticketTiers: [
            { tier: "General", price: "$250", url: "https://www.tixr.com/groups/cowboysmusicfestival" },
          ],
        },
        {
          date: "2025-07-04",
          events: [
            { time: "05:00 PM", description: "Megan Moroney", duration: 9},

          ],
          ticketTiers: [
            { tier: "General", price: "$200", url: "https://www.tixr.com/groups/cowboysmusicfestival" },
          ],
        },
        {
          date: "2025-07-05",
          events: [
            { time: "05:00 PM", description: "Macklemore /w Timbaland", duration: 9},

          ],
          ticketTiers: [
            { tier: "General", price: "$160", url: "https://www.tixr.com/groups/cowboysmusicfestival" },
          ],
        },
        {
          date: "2025-07-06",
          events: [
            { time: "05:00 PM", description: "Thomas Rhett /w Tucker Wetmore", duration: 9},
          ],
          ticketTiers: [
            { tier: "General", price: "$130", url: "https://www.tixr.com/groups/cowboysmusicfestival" },
          ],
        },
        {
          date: "2025-07-07",
          events: [
            { time: "05:00 PM", description: "KYGO w/ All American Rejects", duration: 9 },
          ],
          ticketTiers: [
            { tier: "General", price: "$120", url: "https://www.tixr.com/groups/cowboysmusicfestival" },
          ],
        },
        {
          date: "2025-07-08",
          events: [
            { time: "05:00 PM", description: "Fall Out Boy", duration: 9},

          ],
          ticketTiers: [
            { tier: "General", price: "$130", url: "https://www.tixr.com/groups/cowboysmusicfestival" },
          ],
        },
        {
          date: "2025-07-09",
          events: [
            { time: "05:00 PM", description: "T-Pain, Jessie Murph", duration: 9},

          ],
          ticketTiers: [
            { tier: "General", price: "$60", url: "https://www.tixr.com/groups/cowboysmusicfestival" },
          ],
        },
        {
          date: "2025-07-10",
          events: [
            { time: "05:00 PM", description: "Jordan Davis", duration: 9},
            { time: "02:00 PM", description: "Guy Fieri", duration: 3},


          ],
          ticketTiers: [
            { tier: "General", price: "$60", url: "https://www.tixr.com/groups/cowboysmusicfestival" },
          ],
        },
        {
          date: "2025-07-11",
          events: [
            { time: "05:00 PM", description: "Akon", duration: 9},

          ],
          ticketTiers: [
            { tier: "General", price: "$100", url: "https://www.tixr.com/groups/cowboysmusicfestival" },
          ],
        },
        {
          date: "2025-07-12",
          events: [
            { time: "02:00 PM", description: "Drag Me To Cowboys", duration: 3},
            { time: "05:00 PM", description: "The Red Clay Strays", duration: 9},

          ],
          ticketTiers: [
            { tier: "General", price: "$90", url: "https://www.tixr.com/groups/cowboysmusicfestival" },
          ],
        },
        {
          date: "2025-07-13",
          events: [
            { time: "05:00 PM", description: "The Chainsmokers", duration: 9},

          ],
          ticketTiers: [
            { tier: "General", price: "$100", url: "https://www.tixr.com/groups/cowboysmusicfestival" },
          ],
        },
      ],
      
    },
    {
      name: "Badlands Music Festival",
      location: "725 9TH AVE SW, CALGARY,AB",
      image: "https://i.ticketweb.com/i/00/12/54/20/33_Edp.jpg?v=76",

      days: [
        {
          date: "2025-07-03",
          events: [
            { time: "06:00 PM", description: "Tiesto, Cassian & Partiboi69", duration: 8},

          ],
          ticketTiers: [
            { tier: "General", price: "$112", url: "https://ticketweb.ca/search?q=badlands" },
          ],
        },
        {
          date: "2025-07-04",
          events: [
            { time: "06:00 PM", description: "Disclosure + Friends", duration: 8},

          ],
          ticketTiers: [
            { tier: "General", price: "$100", url: "https://ticketweb.ca/search?q=badlands" },
          ],
        },
        {
          date: "2025-07-05",
          events: [
            { time: "06:00 PM", description: "RL Grime, Rudimental & Juelz", duration: 8},

          ],
          ticketTiers: [
            { tier: "General", price: "$75", url: "https://ticketweb.ca/search?q=badlands" },
          ],
        },
        {
          date: "2025-07-06",
          events: [
            { time: "06:00 PM", description: "Zedd", duration: 8 },
          ],
          ticketTiers: [
            { tier: "General", price: "$112", url: "https://ticketweb.ca/search?q=badlands" },
          ],
        },
        {
          date: "2025-07-07",
          events: [
            { time: "06:00 PM", description: "Lane 8, Tinlicker & Sultan + Shepard", duration: 8},
          ],
          ticketTiers: [
            { tier: "General", price: "$75", url: "https://ticketweb.ca/search?q=badlands" },
          ],
        },
        {
          date: "2025-07-08",
          events: [
            { time: "06:00 PM", description: "Subtrinics + Zeds Dead", duration: 8},

          ],
          ticketTiers: [
            { tier: "General", price: "$112", url: "https://ticketweb.ca/search?q=badlands" },
          ],
        },
        {
          date: "2025-07-09",
          events: [
            { time: "06:00 PM", description: "Gryffin & Dabin", duration: 8},

          ],
          ticketTiers: [
            { tier: "General", price: "$74", url: "https://ticketweb.ca/search?q=badlands" },
          ],
        },
        {
          date: "2025-07-10",
          events: [
            { time: "06:00 PM", description: "Cloonee + Chris Lorenzo", duration: 8},

          ],
          ticketTiers: [
            { tier: "General", price: "$37.50", url: "https://ticketweb.ca/search?q=badlands" },
          ],
        },
        {
          date: "2025-07-11",
          events: [
            { time: "06:00 PM", description: "Boiler Room", duration: 8},

          ],
          ticketTiers: [
            { tier: "General", price: "$112", url: "https://ticketweb.ca/search?q=badlands" },
          ],
        },
        {
          date: "2025-07-12",
          events: [
            { time: "06:00 PM", description: "TBD", duration: 8},

          ],
          ticketTiers: [
            { tier: "General", price: "TBD", url: "https://ticketweb.ca/search?q=badlands" },
          ],
        },
        {
          date: "2025-07-13",
          events: [
            { time: "06:00 PM", description: "Fisher", duration: 8},

          ],
          ticketTiers: [
            { tier: "General", price: "$112", url: "https://ticketweb.ca/search?q=badlands" },
          ],
        },
      ],
      
    },
    {
      name: "Stampede Concert Series",
      location: "555 Saddledome Rise SE, Calgary, AB T2G 2W1",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Calgary_Stampede_Logo.svg/320px-Calgary_Stampede_Logo.svg.png",

      days: [
        {
          date: "2025-07-05",
          events: [
            { time: "07:30 PM", description: "Shania Twain & Devon Cole", duration: 4},

          ],
          ticketTiers: [
            { tier: "TicketMaster", price: "$194+", url: "https://ticketmaster.ca/event/11006150E8574A77?referrer=https%3A%2F%2Fwww.calgarystampede.com%2F" },
          ],
        },
      ],
      
    },
    // Add more festivals as needed
    {
      name: "Nashville North",
      location: "1410 Olympic Way SE, Calgary, Alberta, Canada.",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Calgary_Stampede_Logo.svg/320px-Calgary_Stampede_Logo.svg.png",

      days: [
        {
          date: "2025-07-06",
          events: [
            { time: "07:30 PM", description: "Midland", duration: 6.5},

          ],
          ticketTiers: [
            { tier: "Free", price: "Stampede Admission", url: "" },
          ],
        },
        {
          date: "2025-07-07",
          events: [
            { time: "07:30 PM", description: "Koe Wetzel", duration: 6.5},

          ],
          ticketTiers: [
            { tier: "Free", price: "Stampede Admission", url: "" },
          ],
        },
        {
          date: "2025-07-08",
          events: [
            { time: "07:30 PM", description: "Cole Swindell", duration: 6.5},


          ],
          ticketTiers: [
            { tier: "Free", price: "Stampede Admission", url: "" },
          ],
        },
        {
          date: "2025-07-09",
          events: [
            { time: "08:30 PM", description: "Chase Rice", duration: 5.5},
            { time: "05:30 PM", description: "Charles Wesley Godwin", duration: 3},


          ],
          ticketTiers: [
            { tier: "Free", price: "Stampede Admission", url: "" },
          ],
        },
        {
          date: "2025-07-10",
          events: [
            { time: "07:30 PM", description: "The Recklaws", duration: 6.5},


          ],
          ticketTiers: [
            { tier: "Free", price: "Stampede Admission", url: "" },
          ],
        },
        {
          date: "2025-07-11",
          events: [
            { time: "07:30 PM", description: "Max Mcnown", duration: 6.5},


          ],
          ticketTiers: [
            { tier: "Free", price: "Stampede Admission", url: "" },
          ],
        },
        {
          date: "2025-07-12",
          events: [
            { time: "07:30 PM", description: "Chayce Beckham", duration: 6.5},


          ],
          ticketTiers: [
            { tier: "Free", price: "Stampede Admission", url: "" },
          ],
        },
        {
          date: "2025-07-13",
          events: [
            { time: "07:30 PM", description: "Mackenzie Porter", duration: 6.5},


          ],
          ticketTiers: [
            { tier: "Free", price: "Stampede Admission", url: "" },
          ],
        },
      ],
      
    },
    //
    {
      name: "Wild Horse Saloon",
      location: "500 6th avenue s.w, calgary, alberta",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Calgary_Stampede_Logo.svg/320px-Calgary_Stampede_Logo.svg.png",

      days: [
        {
          date: "2025-07-03",
          events: [
            { time: "05:00 PM", description: "The Rural Alberta Advantage", duration: 9},

          ],
          ticketTiers: [
            { tier: "General", price: "$30", url: "https://www.showpass.com/the-rural-alberta-advantage-2/" },
          ],
        },
        {
          date: "2025-07-04",
          events: [
            { time: "05:00 PM", description: "50 40", duration: 9},

          ],
          ticketTiers: [
            { tier: "General", price: "$35", url: "https://www.showpass.com/5440-1/" },
          ],
        },
        {
          date: "2025-07-06",
          events: [
            { time: "06:00 PM", description: "Violent Femmes", duration: 8},

          ],
          ticketTiers: [
            { tier: "General", price: "$35-$55", url: "https://www.showpass.com/violent-femmes/" },
          ],
        },
        {
          date: "2025-07-07",
          events: [
            { time: "05:00 PM", description: "Dallas Smith", duration: 9},

          ],
          ticketTiers: [
            { tier: "General", price: "$35-$40", url: "https://www.showpass.com/dallas-smith/" },
          ],
        },
        {
          date: "2025-07-08",
          events: [
            { time: "05:00 PM", description: "The Watchmen", duration: 9},

          ],
          ticketTiers: [
            { tier: "General", price: "$35-$40", url: "https://www.showpass.com/watchmen-2/" },
          ],
        },
        {
          date: "2025-07-09",
          events: [
            { time: "06:00 PM", description: "Sloan", duration: 8},

          ],
          ticketTiers: [
            { tier: "General", price: "$35-$40", url: "https://www.showpass.com/sloan-3/" },
          ],
        },
        {
          date: "2025-07-10",
          events: [
            { time: "06:00 PM", description: "The Strumbellas", duration: 8},

          ],
          ticketTiers: [
            { tier: "General", price: "$25-$35", url: "https://www.showpass.com/the-strumbellas-6/" },
          ],
        },
      ],
      
    },
    {
      name: "National Saloon",
      location: "330 11 ave sw, Calgary, AB T2G 2W1",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Calgary_Stampede_Logo.svg/320px-Calgary_Stampede_Logo.svg.png",

      days: [
        {
          date: "2025-07-04",
          events: [
            { time: "04:00 PM", description: "Chad Brownlee", duration: 10},

          ],
          ticketTiers: [
            { tier: "General", price: "$25-$85", url: "https://www.showpass.com/chad-brownlee-5/" },
          ],
        },
        {
          date: "2025-07-05",
          events: [
            { time: "06:00 PM", description: "Cole Bradley", duration: 8},

          ],
          ticketTiers: [
            { tier: "General", price: "$25-$85", url: "https://www.showpass.com/cole-bradley-4/" },
          ],
        },
        {
          date: "2025-07-06",
          events: [
            { time: "06:00 PM", description: "Down With Webster", duration: 8},

          ],
          ticketTiers: [
            { tier: "General", price: "$25-$85", url: "https://www.ntnlsaloon.ca/concerts" },
          ],
        },
        {
          date: "2025-07-07",
          events: [
            { time: "06:00 PM", description: "BBNO$", duration: 8},

          ],
          ticketTiers: [
            { tier: "General", price: "$35-$115", url: "https://www.showpass.com/bbno-2/" },
          ],
        },
        {
          date: "2025-07-08",
          events: [
            { time: "07:00 PM", description: "Saint Motel", duration: 7},

          ],
          ticketTiers: [
            { tier: "General", price: "$30-$80", url: "https://www.showpass.com/saint-motel-2/" },
          ],
        },
        {
          date: "2025-07-10",
          events: [
            { time: "05:00 PM", description: "Marianas Trench", duration: 9},

          ],
          ticketTiers: [
            { tier: "General", price: "$35-$100", url: "https://www.showpass.com/marianas-trench-3/" },
          ],
        },
        {
          date: "2025-07-12",
          events: [
            { time: "09:30 PM", description: "Disco Ranch", duration: 4.5},

          ],
          ticketTiers: [
            { tier: "General", price: "$25", url: "https://www.showpass.com/disco-ranch-3/" },
          ],
        },
      ],
      
    },
    {
      name: "Coke Stage",
      location: "1410 Olympic Way SE, Calgary, Alberta, Canada.",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Calgary_Stampede_Logo.svg/320px-Calgary_Stampede_Logo.svg.png",

      days: [
        {
          date: "2025-07-04",
          events: [
            { time: "08:30 PM", description: "TBD", duration: 3},

          ],
          ticketTiers: [
            { tier: "Free", price: "Stampede Admission", url: "https://www.calgarystampede.com/stampede/tickets" },
          ],
        },
        {
          date: "2025-07-05",
          events: [
            { time: "08:30 PM", description: "TBD", duration: 3 },
          ],
          ticketTiers: [
            { tier: "Free", price: "Stampede Admission", url: "https://www.calgarystampede.com/stampede/tickets" },
          ],
        },
        {
          date: "2025-07-06",
          events: [
            { time: "08:30 PM", description: "TBD", duration: 3 },
          ],
          ticketTiers: [
            { tier: "Free", price: "Stampede Admission", url: "https://www.calgarystampede.com/stampede/tickets" },
          ],
        },
        {
          date: "2025-07-07",
          events: [
            { time: "08:30 PM", description: "TBD", duration: 3 },
          ],
          ticketTiers: [
            { tier: "Free", price: "Stampede Admission", url: "https://www.calgarystampede.com/stampede/tickets" },
          ],
        },
        {
          date: "2025-07-08",
          events: [
            { time: "08:30 PM", description: "TBD", duration: 3 },
          ],
          ticketTiers: [
            { tier: "Free", price: "Stampede Admission", url: "https://www.calgarystampede.com/stampede/tickets" },
          ],
        },
        {
          date: "2025-07-09",
          events: [
            { time: "08:30 PM", description: "TBD", duration: 3 },
          ],
          ticketTiers: [
            { tier: "Free", price: "Stampede Admission", url: "https://www.calgarystampede.com/stampede/tickets" },
          ],
        },
        {
          date: "2025-07-10",
          events: [
            { time: "08:30 PM", description: "TBD", duration: 3 },
          ],
          ticketTiers: [
            { tier: "Free", price: "Stampede Admission", url: "https://www.calgarystampede.com/stampede/tickets" },
          ],
        },
        {
          date: "2025-07-11",
          events: [
            { time: "08:30 PM", description: "TBD", duration: 3 },
          ],
          ticketTiers: [
            { tier: "Free", price: "Stampede Admission", url: "https://www.calgarystampede.com/stampede/tickets" },
          ],
        },
        {
          date: "2025-07-12",
          events: [
            { time: "08:30 PM", description: "TBD", duration: 3 },
          ],
          ticketTiers: [
            { tier: "Free", price: "Stampede Admission", url: "https://www.calgarystampede.com/stampede/tickets" },
          ],
        },
        {
          date: "2025-07-13",
          events: [
            { time: "08:30 PM", description: "TBD", duration: 3 },
          ],
          ticketTiers: [
            { tier: "Free", price: "Stampede Admission", url: "https://www.calgarystampede.com/stampede/tickets" },
          ],
        },
      ],
      
    },
  ];