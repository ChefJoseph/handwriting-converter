import React, { useContext, useEffect } from 'react'
import { AppContext } from './App'

function LatestDoc() {
    const {latestDoc, setLatestDoc} = useContext(AppContext)

    useEffect(() => {
        fetch("http://localhost:3000/latest")
            .then(r => r.json())
            .then(data => {
                setLatestDoc(data.image_url)
            })
            .catch((error) => console.error(error))
    }, [latestDoc])

    
    return(
        <div>
            <img src={latestDoc} alt="latest doc" className="latest-doc" />
        </div>
    )
}

export default LatestDoc