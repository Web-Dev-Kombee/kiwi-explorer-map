# 🗺️ Kiwi Explorer: New Zealand Interactive Map

An interactive map application for exploring hotspots across New Zealand.  
Built with **React**, **TypeScript**, and the **Google Maps API**.

---

## ✨ Features

- **Interactive Maps**: Full-screen Google Maps integration
- **Custom Markers**: Unique markers for New Zealand hotspots
- **Location Details**: Detailed information panels for each location
- **Responsive Design**: Works on desktop, tablet, and mobile
- **Location Selector**: Easily find and navigate to specific locations
- **Animated UI**: Smooth transitions and modern interface elements
- **Street View**: Integrated for supported locations
- **Boundary Control**: Maps restricted to New Zealand
- **Error Handling**: User-friendly notifications

---

## 🚀 Getting Started

### 1. **Prerequisites**

- Node.js (v14 or later)
- npm or yarn package manager
- Google Maps JavaScript API key

### 2. **Installation**

```bash
git clone https://github.com/Web-Dev-Kombee/kiwi-explorer-map.git
cd kiwi-explorer-map
```

### 3. **Setup**

```bash
pnpm install
```

### 4. **Configure Google Maps API**

- Open `src/config/env.ts`
- Replace `YOUR_GOOGLE_MAPS_API_KEY` with your actual Google Maps API key

### 5. **Launch Development Server**

```bash
pnpm dev
```

### 6. **View the App**

- Open your browser and navigate to `http://localhost:8080`

---

## 🛠️ Tech Stack

- **React.js** with TypeScript
- **Next.js** for server-side rendering
- **Google Maps JavaScript API**
- **Tailwind CSS** for styling
- **React Google Maps API** (@react-google-maps/api)

---

## 📁 Project Structure

```
kiwi-explorer-map/
├── src/
│   ├── components/
│   │   ├── KiwiExplorer.tsx      # Main application component
│   │   ├── MapComponent.tsx      # Google Maps integration
│   │   ├── InfoPanel.tsx         # Location information display
│   │   └── HotspotSelector.tsx   # Location selector dropdown
│   ├── data/
│   │   └── hotspots.ts           # Location data
│   ├── config/
│   │   └── env.ts                # Environment configuration
│   └── hooks/
│       └── use-toast.ts          # Notification system
└── ... (project configuration files)
```

---

## 🧩 Features in Detail

### 🗺️ Map Features

- Interactive Google Maps integration
- Custom marker icons with selection highlighting
- Automatic panning and zooming to selected locations
- Street View integration for supported locations
- New Zealand bounds restriction

### 🎨 UI Features

- Responsive design for all screen sizes
- Animated transitions for smooth user experience
- Custom toast notifications for errors and updates
- Location selector with search functionality
- Detailed information panels for selected locations

---

## 📍 Adding More Hotspots

To add more hotspots to the map, edit the `src/data/hotspots.ts` file:

```typescript
{
  name: "Location Name",
  lat: -41.2924,
  lng: 174.7787,
  description: "Location description",
  // ... other properties
}
```

---

## 🔑 Obtaining a Google Maps API Key

1. Visit the [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select an existing one
3. Navigate to the "APIs & Services > Dashboard" section
4. Click "+ ENABLE APIS AND SERVICES" and search for "Maps JavaScript API"
5. Enable the Maps JavaScript API
6. Create credentials to get your API key
7. Restrict the API key to your domain for security

---

## 📸 Screenshots

### 🗺️ New Zealand Map View

![New Zealand Map View](./screenshots/nz_map_view.png)
_Map view showing ServiceFoods locations across New Zealand_

### 🏙️ Auckland Region View

![Auckland Map View](./screenshots/auckland_view.png)
_Detailed view of ServiceFoods locations in Auckland_

---

## 🌐 Live Demo

Experience the application live: [Kiwi Explorer Map](https://kiwi-explorer-map.vercel.app/)

---

## 🤝 Contributing

We welcome contributions! Feel free to submit issues and enhancement requests!

1. Fork the repository
2. Create a new branch for your feature/fix
3. Commit changes and open a Pull Request

---

## 📜 License

This project is licensed under the MIT License - see the LICENSE file for details.

---

## 👨‍💻 Authors

**Kombee Technologies**

- 🌐 [Portfolio](https://github.com/kombee-technologies)
- 🌍 [Website](https://www.kombee.com/)
- 💼 [LinkedIn](https://in.linkedin.com/company/kombee-global)

---

<p align="center">
  Built with ❤️ using React and Google Maps
</p>
