import { y } from "./yM.js" ;
import { z } from "./zM.js" ;    

function x(params){
    y("x")
    console.log("x: " + params)
    return "fin x" ;
}

function xx(params){
    return "fin xx"
}

export {x, xx, y, z}