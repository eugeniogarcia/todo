import React, { useEffect, useState } from 'react'

const withInnerWidth = (Component:any) => (props:any) => {
    const [innerWidth, setInnerWidth] = useState<number>(window.innerWidth)
    
    const handleResize = () => {
        setInnerWidth(window.innerWidth)
    }

    useEffect(() => {
        window.addEventListener('resize', handleResize)
        return () => {
            window.removeEventListener('resize', handleResize) //Elimina el event handler cuando el componente se destruya
        }
    }, [])

    return <Component {...props} innerWidth={innerWidth} />
}

export default withInnerWidth