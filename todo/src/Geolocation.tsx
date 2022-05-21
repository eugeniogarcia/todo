import { FC } from 'react'

type Propiedades={
    longitude:number |null
    latitude: number | null
}
const Geolocation: FC<Propiedades> = ({ latitude, longitude}) => {
    return (
        <div>
            <h1>Geolocation:</h1>
            <div>Latitude: {latitude}</div>
            <div>Longitude: {longitude}</div>
        </div>
    )
 }

export default Geolocation