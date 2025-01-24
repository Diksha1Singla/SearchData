import React , { useEffect, useState } from "react";

const AppContext = React.createContext();

const AppProvider = ({children}) => {
    
    const [location, setLocation] = useState(""); 
    const [Building, setBuilding] = useState(""); 
    const [search,searchresults] = useState("")
    const [searchdata , setSearchdata] =useState("");

    const getlocation = async()=>{
        try {
            const url = "http://localhost:5000/";
            const response = await fetch(url,{
            method: "GET",
            headers: {
                'Content-Type':"application/json"
            }
        });
        if(response.ok){
            const data = await response.json();
            setLocation(data)
        } 

        } catch (error) {
            console.log(error)
        }
    }           

    const getBuilding = async()=>{
        try {
            const response = await fetch("http://localhost:5000/availBuilding",{
                method:"GET",
                headers:{
                    'Content-Type':'application/json'
                }
            })
            if(response.ok){
                const buildingData = await response.json()
                setBuilding(buildingData)
            }
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(()=>{
        getBuilding();
        getlocation();
    },[])


    return(
        <AppContext.Provider value={{location,search,searchresults,searchdata,setSearchdata,Building}}>
            {children}
        </AppContext.Provider>
    )
}

export const useAppContext = () => React.useContext(AppContext);

export {AppContext,AppProvider}