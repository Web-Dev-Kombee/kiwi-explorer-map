
export interface Hotspot {
  id: string;
  name: string;
  lat: number;
  lng: number;
  address: string;
  phone: string;
  email: string;
  googleMapsLink: string;
  description?: string;
}

const hotspots: Hotspot[] = [
  {
    id: "auckland",
    name: "Auckland Sky Tower",
    lat: -36.8484,
    lng: 174.7621,
    address: "Victoria Street West, Auckland CBD, Auckland 1010",
    phone: "+64 9 363 6000",
    email: "info@skycity.co.nz",
    googleMapsLink: "https://goo.gl/maps/p4ggxW2p8XpH7HMo9",
    description: "Iconic 328-meter tower with panoramic views of Auckland's cityscape and harbor."
  },
  {
    id: "wellington",
    name: "Wellington Cable Car",
    lat: -41.2865,
    lng: 174.7762,
    address: "280 Lambton Quay, Wellington 6011",
    phone: "+64 4 472 2199",
    email: "info@wellingtoncablecar.co.nz",
    googleMapsLink: "https://goo.gl/maps/5sJvnrJPQDggCnU87",
    description: "Historic funicular railway with stunning views of Wellington Harbor."
  },
  {
    id: "rotorua",
    name: "Te Puia Geothermal Park",
    lat: -38.1548,
    lng: 176.2546,
    address: "Hemo Road, Rotorua 3010",
    phone: "+64 7 348 9047",
    email: "reservations@tepuia.com",
    googleMapsLink: "https://goo.gl/maps/rXv7bJ6f5HTwLQ8E8",
    description: "Geothermal park featuring the famous Pohutu Geyser and Māori cultural experiences."
  },
  {
    id: "queenstown",
    name: "Queenstown Gondola",
    lat: -45.0302,
    lng: 168.6596,
    address: "Brecon Street, Queenstown 9300",
    phone: "+64 3 441 0101",
    email: "info@skyline.co.nz",
    googleMapsLink: "https://goo.gl/maps/26vEoZ8FdmqzrbJd8",
    description: "Scenic gondola ride to Bob's Peak offering breathtaking views of Queenstown."
  },
  {
    id: "christchurch",
    name: "Christchurch Botanic Gardens",
    lat: -43.5300,
    lng: 172.6203,
    address: "Rolleston Avenue, Christchurch Central City 8013",
    phone: "+64 3 941 7590",
    email: "botanicgardens@ccc.govt.nz",
    googleMapsLink: "https://goo.gl/maps/q3rXXp7WEUitdUUe7",
    description: "Beautiful gardens with diverse plant collections in the heart of Christchurch."
  },
  {
    id: "dunedin",
    name: "Dunedin Railway Station",
    lat: -45.8742,
    lng: 170.5036,
    address: "Anzac Avenue, Dunedin 9016",
    phone: "+64 3 477 4449",
    email: "bookings@dunedinrailways.co.nz",
    googleMapsLink: "https://goo.gl/maps/7N1JmXLV8JrwQUyR8",
    description: "Stunning Edwardian baroque building known as the 'Gingerbread House'."
  },
  {
    id: "milfordsound",
    name: "Milford Sound",
    lat: -44.6414,
    lng: 167.8974,
    address: "Milford Sound Highway, Fiordland National Park",
    phone: "+64 3 249 8110",
    email: "info@milfordtourism.co.nz",
    googleMapsLink: "https://goo.gl/maps/8NdQYXhZxM9kQdpm6",
    description: "Breathtaking fiord known for its dramatic scenery, waterfalls, and wildlife."
  },
  {
    id: "napier",
    name: "Art Deco Napier",
    lat: -39.4928,
    lng: 176.9120,
    address: "7 Tennyson Street, Napier 4110",
    phone: "+64 6 834 1911",
    email: "info@artdeconapier.co.nz",
    googleMapsLink: "https://goo.gl/maps/MhZaQTxK7sCWJEAG9",
    description: "Beautiful Art Deco architecture in Napier's city center."
  }
];

export default hotspots;
