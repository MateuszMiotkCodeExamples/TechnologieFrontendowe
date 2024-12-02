// app/components/WordCount.jsx
"use client";

import React, {useCallback, useEffect, useMemo} from "react";
import useAnyKeyToRender from "../hooks/useAnyKeyToRender";

function WordCount({ children = "" }) {
    useAnyKeyToRender();

    const words = useMemo(() => children.split(" "), [children]);

    const fn = useCallback( () => {
        console.log("hello")
        console.log("world!")
    }, [])

    useEffect(() => {
        console.log("fresh render");
    }, [words]);

    useEffect(() => {
        console.log("fresh render2")
        fn();
    }, [fn])

    return (
        <>
            <p>{children}</p>
            <p>
                <strong>{words.length} - words</strong>
            </p>
        </>
    );
}

export default WordCount;