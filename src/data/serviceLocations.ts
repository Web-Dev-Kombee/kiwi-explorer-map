
export interface ServiceLocation {
  name: string;
  phone: string;
  email: string;
  address: string;
  poBox?: string;
  lat?: number;
  lng?: number;
}

export interface ServiceProvider {
  name: string;
  email: string;
  locations: ServiceLocation[];
}

// New Zealand default coordinates for locations without geocoded values
// These are roughly estimated positions for each location based on known city locations
// In a production environment, you would use a geocoding service to get precise coordinates
const locationCoordinates: Record<string, { lat: number; lng: number }> = {
  "AUCKLAND FOODSERVICE": { lat: -36.99294713424368, lng: 174.7606543456959 },
  "AUCKLAND IMPORTS": { lat: -36.999510108093936, lng: 174.84857986990087 },
  "AUCKLAND REPACKS": { lat: -37.0012835066906, lng: 174.84795569689064 },
  "AUCKLAND LEONARD'S": { lat: -36.93250712782809, lng: 174.9011128698983 },
  "HAMILTON/WAIKATO & COROMANDEL": { lat: -37.760369596331344, lng: 175.24439206808447 },
  "HAMILTON BUTCHERY": { lat: -37.736081815736036, lng: 175.22038525458865 }, 
  "HAMILTON PRODUCE": { lat: -37.700889243465696, lng: 175.1923835441418 },
  "TARANAKI": { lat: -39.08263684077642, lng: 174.08476222580606 },
  "NAPIER/HAWKES BAY": { lat: -39.49809060038732, lng: 176.87601529329677 },
  "WELLINGTON (TE PĀTAKA)": { lat: -41.1246, lng: 175.0680 },
  "Fresh": { lat: -41.14277108833523, lng: 175.05259507349882 },
  "MARLBOROUGH": { lat: -41.28963107863407, lng: 173.99932269508543 },
  "CHRISTCHURCH/CANTERBURY": { lat: -43.56093352398619, lng: 172.68502355439458 },
  "GREYMOUTH": { lat: -42.4539232441679, lng: 171.21003843741497 },
  "WESTPORT": { lat: -41.76232446851053, lng: 171.60250570755136 },
  "GISBORNE/TAIRAWHITI": { lat: -38.66551718122519, lng: 177.99454080165137 },
  "TAURANGA/BAY OF PLENTY": { lat: -37.73966156991965, lng: 176.101515601444 }
};

// Service locations data
export const serviceData: ServiceProvider[] = [
  {
    name: "ServiceFoods",
    email: "hello@servicefoods.co.nz",
    locations: [
      {
        name: "AUCKLAND FOODSERVICE",
        phone: "+64 (09) 258 5010",
        email: "OrdersAKL@servicefoods.co.nz",
        address: "221 Ihumatao Road, Mangere, Auckland",
        poBox: "PO Box: 53050, Auckland Airport, Mangere",
        lat: locationCoordinates["AUCKLAND FOODSERVICE"].lat,
        lng: locationCoordinates["AUCKLAND FOODSERVICE"].lng
      },
      {
        name: "AUCKLAND IMPORTS",
        phone: "+64 (09) 280 3100",
        email: "OrdersAKL@servicefoods.co.nz",
        address: "25 Aerovista Place, Wiri, Auckland",
        poBox: "PO Box: 53050, Auckland Airport, Mangere",
        lat: locationCoordinates["AUCKLAND IMPORTS"].lat,
        lng: locationCoordinates["AUCKLAND IMPORTS"].lng
      },
      {
        name: "AUCKLAND REPACKS",
        phone: "+64 (09) 280 3100",
        email: "EOrdersAKL@servicefoods.co.nz",
        address: "18D Aerovista Place, Wiri, Auckland",
        poBox: "PO Box: 53050, Auckland Airport, Mangere",
        lat: locationCoordinates["AUCKLAND REPACKS"].lat,
        lng: locationCoordinates["AUCKLAND REPACKS"].lng
      },
      {
        name: "AUCKLAND LEONARD'S",
        phone: "0800 SAUSAG",
        email: "Orders@leonards.co.nz",
        address: "46 Greenmount Drive, East Tamaki, Auckland",
        lat: locationCoordinates["AUCKLAND LEONARD'S"].lat,
        lng: locationCoordinates["AUCKLAND LEONARD'S"].lng
      },
      {
        name: "HAMILTON/WAIKATO & COROMANDEL",
        phone: "+64 (07) 981 2258",
        email: "OrdersHAM@servicefoods.co.nz",
        address: "7 Mainstreet Pl, Te Rapa, Hamilton",
        lat: locationCoordinates["HAMILTON/WAIKATO & COROMANDEL"].lat,
        lng: locationCoordinates["HAMILTON/WAIKATO & COROMANDEL"].lng
      },
      {
        name: "HAMILTON BUTCHERY",
        phone: "+64 (07) 850 1592",
        email: "OrdersHAM@servicefoods.co.nz",
        address: "8 Simsey Pl, Te Rapa, Hamilton",
        lat: locationCoordinates["HAMILTON BUTCHERY"].lat,
        lng: locationCoordinates["HAMILTON BUTCHERY"].lng
      },
      {
        name: "HAMILTON PRODUCE",
        phone: "+64 (07) 981 2258",
        email: "OrdersHAM@servicefoods.co.nz",
        address: "36 Horotiu Road, Hamilton",
        lat: locationCoordinates["HAMILTON PRODUCE"].lat,
        lng: locationCoordinates["HAMILTON PRODUCE"].lng
      },
      {
        name: "TARANAKI",
        phone: "+64 (06) 753 6107",
        email: "OrdersTARA@servicefoods.co.nz",
        address: "14 Saltash Street, Vogeltown, New Plymouth",
        lat: locationCoordinates["TARANAKI"].lat,
        lng: locationCoordinates["TARANAKI"].lng
      },
      {
        name: "NAPIER/HAWKES BAY",
        phone: "+64 (06) 843 7779",
        email: "OrdersNP@servicefoods.co.nz",
        address: "12 Turner Place, Onekawa, Napier",
        lat: locationCoordinates["NAPIER/HAWKES BAY"].lat,
        lng: locationCoordinates["NAPIER/HAWKES BAY"].lng
      },
      {
        name: "WELLINGTON (TE PĀTAKA)",
        phone: "+64 (04) 586 2162",
        email: "OrdersWN@servicefoods.co.nz",
        address: "19 William Durant Drive, Upper Hutt, Wellington",
        lat: locationCoordinates["WELLINGTON (TE PĀTAKA)"].lat,
        lng: locationCoordinates["WELLINGTON (TE PĀTAKA)"].lng
      },
      {
        name: "Fresh",
        phone: "+64 (04) 974 5626",
        email: "OrdersfreshWN@servicefoods.co.nz",
        address: "19 William Durant Drive, Upper Hutt, Wellington",
        lat: locationCoordinates["Fresh"].lat,
        lng: locationCoordinates["Fresh"].lng
      },
      {
        name: "MARLBOROUGH",
        phone: "+64 (03) 573 7001",
        email: "ordersML@servicefoods.co.nz",
        address: "3C Queen Charlotte Drive, Picton",
        lat: locationCoordinates["MARLBOROUGH"].lat,
        lng: locationCoordinates["MARLBOROUGH"].lng
      },
      {
        name: "CHRISTCHURCH/CANTERBURY",
        phone: "+64 (03) 389 9909",
        email: "OrdersCH@servicefoods.co.nz",
        address: "220 Cumnor Terrace, Woolston, Christchurch",
        poBox: "PO Box: 7005, Sydenham, Christchurch",
        lat: locationCoordinates["CHRISTCHURCH/CANTERBURY"].lat,
        lng: locationCoordinates["CHRISTCHURCH/CANTERBURY"].lng
      },
      {
        name: "GREYMOUTH",
        phone: "+64 (03) 768 7143",
        email: "OrdersGM@servicefoods.co.nz",
        address: "68 Alexander Street, Greymouth",
        lat: locationCoordinates["GREYMOUTH"].lat,
        lng: locationCoordinates["GREYMOUTH"].lng
      },
      {
        name: "WESTPORT",
        phone: "+64 (03) 789 7577",
        email: "OrdersWP@servicefoods.co.nz",
        address: "15 Bentham Street, Westport",
        lat: locationCoordinates["WESTPORT"].lat,
        lng: locationCoordinates["WESTPORT"].lng
      },
      {
        name: "GISBORNE/TAIRAWHITI",
        phone: "+64 (06) 867 3599",
        email: "OrdersGB@servicefoods.co.nz",
        address: "21 Parkinson Street, Awapuni, Gisborne",
        lat: locationCoordinates["GISBORNE/TAIRAWHITI"].lat,
        lng: locationCoordinates["GISBORNE/TAIRAWHITI"].lng
      },
      {
        name: "TAURANGA/BAY OF PLENTY",
        phone: "+64 (07) 541 0137",
        email: "ordersTRG@servicefoods.co.nz",
        address: "39 Porutu Place, Tauriko, Tauranga",
        lat: locationCoordinates["TAURANGA/BAY OF PLENTY"].lat,
        lng: locationCoordinates["TAURANGA/BAY OF PLENTY"].lng
      }
    ]
  }
];
