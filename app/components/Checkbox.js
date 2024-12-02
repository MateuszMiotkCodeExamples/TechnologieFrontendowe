import React, {useState, useLayoutEffect, useReducer} from "react";

export default function Checkbox() {
    //const [checked, setChecked] = useState(false);
    const [checked, toggle] = useReducer(checked => !checked, false)
    return (
        <>
            <input
                type="checkbox"
                value={checked}
                onChange={toggle}
            />
            {checked ? "checked" : "not checked"}
        </>
    );
}