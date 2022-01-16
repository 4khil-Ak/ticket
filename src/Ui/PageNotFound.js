import React from "react";
import { Link } from "react-router-dom";

const PageNotFound = () =>{
    return(
        <>
            <div className="notfound">
                <h2>404 PAGE NOT FOUND</h2>
                <Link to="/">⟵&ensp;Go Back</Link>
            </div>
        </>
    )
}

export default PageNotFound;