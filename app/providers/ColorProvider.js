// app/providers/ColorProvider.js
"use client";

import React, { createContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import colorData from "../data/color-data.json";

export const ColorContext = createContext();

export default function ColorProvider({ children }) {
    const [colors, setColors] = useState(colorData);

    const addColor = (title, color) =>
        setColors([
            ...colors,
            {
                id: uuidv4(),
                rating: 0,
                title,
                color
            }
        ]);

    const rateColor = (id, rating) =>
        setColors(
            colors.map(color =>
                color.id === id ? { ...color, rating } : color
            )
        );

    const removeColor = id =>
        setColors(colors.filter(color => color.id !== id));

    return (
        <ColorContext.Provider value={{ colors, addColor, removeColor, rateColor }}>
            {children}
        </ColorContext.Provider>
    );
}
