import { useMemo } from "react";
import { useLoadScript, GoogleMap, MarkerF } from "@react-google-maps/api";
import Cart from "./Cart";

export default function Home() {
    const { isLoaded} = useLoadScript({
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_API
    });

    if (!isLoaded) return <div>Loading....</div>
    return <Map />
}

function Map() {
    const center = useMemo(() => ({ lat:44, lng:-80}), []);
    
    return (
        <div>
            <div className="location--container">
                <h1>Location</h1>
                <GoogleMap zoom={10} center={center} mapContainerClassName="map-container">
                    <MarkerF position={center} />
                </GoogleMap>
                <div className="location--info">
                    <h3>Location & Hours</h3>
                    <div className="location--address">
                        <h5>Titicake</h5>
                        <p>1965 Titicake Avenue, Unit 1</p>
                        <p>Toronto, ON</p>
                        <p>order@titicake.com</p>
                    </div>
                    <div className="location--hours">
                        <p>Scheduled pickups only</p>
                        <p>Walk-ins are not available</p>
                    </div>
                </div>
            </div> 
            <Cart />
        </div>

    )
}