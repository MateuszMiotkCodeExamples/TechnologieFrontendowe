import React from "react";
import { ClipLoader } from "react-spinners";

export default function LoadingSpinner({ loading = true, size = 50, color = "#123abc" }) {
    return (
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100%" }}>
            <ClipLoader loading={loading} size={size} color={color} />
        </div>
    );
}
