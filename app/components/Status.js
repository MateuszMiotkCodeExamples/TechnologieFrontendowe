// app/components/Status.js

'use client';

import React from "react";
import { safe } from "../utils/safe";
import {loadStatus} from "@/app/utils/loadStatus";

// const loadStatus = () => {
//     console.log("load status");
//     throw new Promise((resolve) => setTimeout(resolve, 3000));
// };

function Status() {
    // safe(loadStatus);
    const status = loadStatus();
    return <h1>Status: {status}</h1>;
}

export default Status;
