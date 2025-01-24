import { useRef } from "react";
import {FaSearch} from  'react-icons/fa'
import { useAppContext } from "../../context"
import "./location.css"
import { useNavigate } from "react-router-dom";
import img from "../../images/BGLOC.jpg"
const Location = () => {

    const navigate = useNavigate()

    const { location, searchresults,setSearchdata } = useAppContext();
    // console.log("location: ", location);
    const SearchText = useRef("")
    if (!Array.isArray(location)) {
        return <h2  style={{color:"grey"}}>Location data is not available or is in an incorrect format.</h2>;
    }

    const handleSubmit = (e)=>{
        e.preventDefault();
        let tempSearchLoc = SearchText.current.value.trim()
        if((tempSearchLoc.replace(/[^\w\s]/gi,"")).length === 0){
            searchresults("");
            setSearchdata("Null")
            // console.log("Nothing to print")            
        }
        else{
            searchresults(location)
            setSearchdata(tempSearchLoc)
            // console.log("Data available")
        }
        navigate("/searchlocation");
    }

    return (
        <div className="LocBG">
            <h1>Search Location</h1>
            <div className="searchLoc">
                <form action="" onSubmit={handleSubmit}>
                    <div className="searchbox">
                        <input type="text" ref={SearchText} placeholder="Enter Location Here..."/>
                        <button type="submit" onClick={handleSubmit}>
                            <FaSearch className="text-purple" size={40}></FaSearch>
                        </button>
                    </div>
                    <div className="grid">
                        <div className="AvailData"><h3>Check Available Data <a href="/availocation" id="atagStyle">Here</a></h3></div>
                        <div className="AvailData Building"><h3>Check Building <a href="/availBuilding" id="atagStyle">Here</a></h3></div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Location