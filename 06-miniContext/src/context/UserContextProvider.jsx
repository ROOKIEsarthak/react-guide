import React, { useState } from "react";

import UserContext from "./UserContext";

/* 

--> A UserContextProvider function is needed to provide the context values throughout the project .


---> Whatever props are coming into this provider we have to pass it as it is 
by wrapping it in UserContext here , In this eg {children} props is used .

--> we can pass whatever value we need to pass in the (context.provider) 
by passing an object here given below .


*/

const UserContextProvider=({children})=>{

    const [user , setUser ] = useState([])

    return (
        <UserContext.Provider value={{user,setUser}}>
            {children}
        </UserContext.Provider>
    )
}

export default UserContextProvider
