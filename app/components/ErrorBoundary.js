// app/components/ErrorBoundary.js

'use client';

import React, { Component } from "react";

export default class ErrorBoundary extends Component {
    state = { error: null };

    static getDerivedStateFromError(error) {
        return { error };
    }

    render() {
        const { error } = this.state;
        const { children, fallback } = this.props;

        if (error) return React.cloneElement(fallback, { error });
        return children;
    }
}
