import React from "react";

const UserContext = React.createContext('contextUtilisateur');


const UserProvider = UserContext.Provider;
const UserConsumer = UserContext.Consumer;

export {UserProvider, UserConsumer}