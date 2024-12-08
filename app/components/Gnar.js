// app/components/Gnar.js
import React from 'react';
import { resource } from '../utils/resource';

export default function Gnar(){
    const result = resource.read();
    return <h1>Gnar: {result.gnar}</h1>;
}
