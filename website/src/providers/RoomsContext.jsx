import { createContext, useContext, useState } from "react";
import React from 'react';
import { roomsList } from "../scripts/lists";

export const RoomsContext = createContext({});

export const RoomsProvider = ({ children }) => {

    const [seePhotosRoom, setPhotoRoom] = useState(roomsList[0])
    const [seeRoomModal, setRoomModal] = useState(false)

    return (
        <RoomsContext.Provider value={{ setRoomModal, setPhotoRoom, seePhotosRoom, seeRoomModal }} >
            {children}
        </RoomsContext.Provider >
    )
};