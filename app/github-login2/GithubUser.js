'use client'

import Fetch from "@/app/github-login2/Fetch";
import {useEffect} from "react";

export default function GitHubUser({ login }) {
    return (
        <Fetch
            uri={`https://api.github.com/users/${login}`}
            renderSuccess={UserDetails}
        />
    );
}

function UserDetails({ data }) {
    return (
        <div className="githubUser" style={{ display: "flex", alignItems: "center" }}>
            <img
                src={data.avatar_url}
                alt={data.login}
                style={{ width: 200, borderRadius: "50%", marginRight: 20 }}
            />
            <div>
                <h1>{data.login}</h1>
                {data.name && <p>Name: {data.name}</p>}
                {data.location && <p>Location: {data.location}</p>}
            </div>
        </div>
    );
}