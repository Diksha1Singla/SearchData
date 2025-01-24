import { useEffect, useState } from "react";
import { useAppContext } from "../../context"
import "./location.css"

const SearchLocation=()=>{
    const {location,search,searchdata} = useAppContext();
    const [searchinput, setSearchinput] = useState('')

    // console.log("search: ",search)                   //location
    // console.log("searchdata: ",searchdata)          //location wanna search
    // console.log("location: ",location)


    useEffect(()=>{
        if(!search.length){
            if(searchdata === "Enter Something"){
                <h2>Enter Something</h2>
            }
        }
        else{
            const foundLocation = location.find((eachloc)=>{
                return eachloc.LocationName === (searchdata)
            })
            if(foundLocation){
                setSearchinput(foundLocation);
                // console.log("searchInput:", foundLocation)
            }
        }
    },[])
    return(
        <div className="Card">
            <div className="innercard">
            <div className="SearchLocText">
                {
                    searchdata==="Null" ? 
                    <h1 style={{color:"green"}}>Please Enter Something</h1>
                    :
                    <>
                    <h2 style={{fontFamily:"Poppins, sans-serif",
                        textShadow:"4px 4px rgba(50, 50, 70, .3)",
                        fontWeight:"800"
                        }}>Your Search: {searchdata}</h2>
                    </>
                }
                
            </div>
            {
                searchinput?
                (
                    <>
                        <h2 style={{fontFamily:"Ink Free"}}>Yaay!Location Found</h2>
                    <div className="SearchdetRes">
                        <h1>Location: {searchinput.LocationName}</h1>
                        <h2>Block/Building: {searchinput.BlockDetails}</h2>
                        <h2>Address: {searchinput.DetailedAddress}</h2>
                    </div>
                    </>
                ):(
                    location.length>0?(<>
                        <h1 className="Searchdet">Location not found</h1>
                        <h3 style={{fontFamily:"Ink Free",fontSize:"1.5rem"}}>Try <a href="/" id="atag">Again</a></h3>
                    </>):(
                        <></>
                    )
                )
            }
             </div>
        </div>
    )

}

export default SearchLocation;