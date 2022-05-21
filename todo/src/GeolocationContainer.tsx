import { useState, useEffect } from 'react'
import Geolocation  from './Geolocation'

const GeolocationContainer = () => {
    const [latitude, setLatitude] = useState<number | null>(null) //El tipo del estado es number | null
    const [longitude, setLongitude] = useState<number | null>(null)

    useEffect(() => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(handleSuccess)
        }
    }, [])

    const handleSuccess: PositionCallback = (position: GeolocationPosition) => {
        setLatitude(position.coords.latitude)
        setLongitude(position.coords.longitude)
    }
    return (
        <Geolocation latitude={latitude} longitude={longitude}/>
    )
 }

export default GeolocationContainer