"use client";

import { useState, useEffect } from "react";

const useAnyKeyToRender = () => {
    const [, forceRender] = useState();

    useEffect(() => {
        const handleKeyDown = () => forceRender((prev) => !prev);
        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, []);
};

export default useAnyKeyToRender;