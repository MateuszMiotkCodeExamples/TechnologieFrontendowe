'use client'

import React, { useState, useEffect } from "react";
import GitHubUser from "@/app/github-login2/GithubUser";
import SearchForm from "@/app/github-login2/SearchForm";




export default function App() {
    const [login, setLogin] = useState("mmiotk");

    return (
        <>
            <SearchForm value={login} onSearch={setLogin} />
            <GitHubUser login={login} />
        </>
    );
}
