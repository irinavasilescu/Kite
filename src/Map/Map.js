import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { useEffect } from "react";
import './Map.css';

function Map(props) {
    const { drawerOpened } = props;

    useEffect(() => {
        console.log('drawer state:', drawerOpened);
    }, [drawerOpened])
    
    return (
        <div style={{position: "relative", overflow: "hidden"}}> 
            <div>
                <MapContainer style={{width: "90vw", height: "95vh"}} center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}>
                    <TileLayer
                        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <Marker position={[51.505, -0.09]}>
                        <Popup>
                            A pretty CSS3 popup. <br /> Easily customizable.
                        </Popup>
                    </Marker>
                </MapContainer>
            </div>
        </div>
    );
}

export default Map;