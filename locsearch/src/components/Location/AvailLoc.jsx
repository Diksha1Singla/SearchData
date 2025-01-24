import { useAppContext } from "../../context"

const AvailLoc = () => {
    const { location } = useAppContext();

    return (
        <>
            <div className="GridBox">
                {
                    Array.isArray(location) ? (
                        location.map((loceach,index) => {
                            return(
                                <div className="detailBox animate__animated animate__slideInLeft">
                                    <h1>Location: {loceach.LocationName}</h1>
                                    <h1>Block/Building: {loceach.BlockDetails}</h1>
                                    <h2>Address: {loceach.DetailedAddress}</h2>
                                </div>
                            )
                        }
                        ))
                    : (
                        <div style={{color:"grey"}}>No locations available</div>
                    )
                }
            </div>
        </>
    );
};


export default AvailLoc



{/* <div class="card">
    <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <a href="#" class="card-link">Card link</a>
        <a href="#" class="card-link">Another link</a>
    </div>
</div> 
<div class="container">
    <div class="row">
        <div class="col">
            
        </div>
    </div>
</div>*/}