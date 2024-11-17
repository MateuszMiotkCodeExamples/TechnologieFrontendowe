// app/components/Color.js
"use client";

import React from "react";
import StarRating from "./StarRating";
import { useColors } from "../hooks/color-hooks";
import {FaTrash} from "react-icons/fa6";

export default function Color({ id, title, color, rating }) {
    const { rateColor, removeColor } = useColors();

    return (
        <section>
            <h1>{title}</h1>
            <FaTrash onClick={() => removeColor(id)}>X</FaTrash>
            <div style={{ height: 50, backgroundColor: color }} />
            <StarRating
                selectedStars={rating}
                onRate={(rating) => rateColor(id, rating)}
            />
        </section>
    );
}
