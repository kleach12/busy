import './Home.css'

import { useJsApiLoader, GoogleMap } from "@react-google-maps/api";
const center = { lat: 32.715736 , lng: -117.161087 };

export default function Home() {
  const isLoaded = useJsApiLoader({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
  });

  if (!isLoaded) {
    return (<h2>...loading</h2>)
  }

  return (
    <div className="flex">
      <GoogleMap
        center={center}
        zoom={15}
        mapContainerStyle={{ width: "100%", height: "100%" }}
      ></GoogleMap>
    </div>
  );
}
