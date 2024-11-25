import React from "react";

export default function SearchForm({ value, onSearch }) {
    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const input = form.elements.search;
        onSearch(input.value);
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                name="search"
                value={value}
                onChange={(e) => onSearch(e.target.value)}
                placeholder="Wyszukaj użytkownika GitHub"
                required
            />
            <button type="submit">Szukaj</button>
        </form>
    );
}
