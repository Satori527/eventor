import { useEffect, useState } from "react";
import EventCard from "../EventCard";
//import { useSelector } from "react-redux";
import { axiosAPI } from "../../api/axiosAPI";



const Events = () => {


    const [events, setevents] = useState([]);
    const [error, setError] = useState({});
    const mapevents = ["a", "b", "c", "d"];

    const eventsFetcher = async() => {
        
        try{
            const response = await axiosAPI.post('/events/admin/events')
            console.log("res :", response.data);

            setevents(response.data)
            //mapevents.push(...response.data.data)
            console.log("done")
            console.log("events :",events)
            console.log("map events 1:", mapevents)
            
            //console.log("av data2 :",eventData.event);
            
            
        }catch(err){
            console.log(err.response);
            setError(err.response)
        }
    }

    useEffect(() => {
        eventsFetcher()
    }, [])



    return (
        <>
            <h1 className="text-teal-400">Events</h1>
            <div className="flex flex-col justify-evenly items-center w-full">
                <div className="w-full">
                    <h1>Create Events</h1>
                </div>

                <div className="w-full flex flex-col justify-evenly items-center gap-4">
                    <h2>events</h2>
                    {console.log("events 2:", events)}
                    {mapevents.map((event) => (
                        <EventCard key={event} event={event} />
                        
                    ))}
                </div>
            </div>
        </>
    )
}

export default Events;