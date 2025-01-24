import { div } from "framer-motion/client";
import { useAppContext } from "../../context.js"
 
const Building = ()=>{
    const {Building} = useAppContext();
    console.log("Building: ",Building)
    return(
        <div className="BuildGridBox">
            {
                Array.isArray(Building) ? (
                    Building.map((loceach,index) => {
                        return(
                            <div className="BuildBox">
                                <img src={loceach.img} onClick={()=>{
                                    window.open(loceach.img,"_blank")
                                }}/>                                
                                <h2>{loceach.Block}</h2>
                            </div>
                        )
                    }
                    ))
                : (
                    <div style={{color:"grey"}}>No Data available</div>
                )
            }
        </div>
    )
}

export default Building