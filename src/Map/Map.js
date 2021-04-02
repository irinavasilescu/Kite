import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { useEffect } from "react";
import './Map.css';

function Map(props) {
    const { drawerOpened } = props;

    useEffect(() => {
        console.log('drawer state:', drawerOpened);
    }, [drawerOpened])
    
    return (
        <div>
            { 
                drawerOpened === 'true' ? 
                <div style={{
                    position: "absolute", 
                    zIndex: 314159, 
                    width: "100vw",
                    height: "100vh", 
                    background: "rgba( 255, 255, 255, 0.00 )",
                    backdropFilter: "blur( 11.0px )"}}
                >    
                </div>
                :
                null
            }

            <MapContainer style={{height: '100vh'}} center={[51.505, -0.09]} zoom={13} scrollWheelZoom={true}>
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
    );
}

export default Map;