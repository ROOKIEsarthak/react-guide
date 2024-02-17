

// the main use of context is to provide you variable
// every context is a provider 
// here userContext is also a provider of functions or components or pages etc .

/* 

<UserContext>
    <login/>
    <card>
        <data/>
    </card>
</UserContext>

---> (After wrapping this with user context it becomes a provider 
which means that all the components in this wrapper will have the access to this
global "userContext")

---> ( Context should be taken as a global variable which can be used to get/store/fetch
and access data throughout the project/app .)

---> ( After creating a context we have to create a 
provider also which will provide/give access
of context variable to all the components wrapped in the 
context (UserContext) here in this case .)

*/

import React from "react";

const UserContext = React.createContext();



export default UserContext;