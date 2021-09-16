// mglxPl-sqfyMOYKIR7gxwO_i1MMBBScujKcRCHlzqWk
// WZR_TydhWj2_o7tGfSP8WFbYWGkzrWiJR0NuFLGw6oY
//"https://api.unsplash.com/photos?client_id="
// photo-gallery
// Key:
// 261abd7cb7827c0560e70c99d7e2fb53

// Secret:
// 08db97d2d6a83ac5
import axios from "axios";
import { useState } from "react";

export function LoadImage(){
    const [state, setState] = useState([]);
    axios.get(`https://api.unsplash.com/photos?client_id=mglxPl-sqfyMOYKIR7gxwO_i1MMBBScujKcRCHlzqWk`)
        .then(res => console.log(res.data))
        .catch(err => console.log(err))

    return true;
}