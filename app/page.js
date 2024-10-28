'use client'
import colorData from './data/color-data.json'
import {useState} from "react";
import ColorList from "@/app/components/ColorList";

export default function Home() {
  const [colors, setColors] = useState(colorData)
  console.log(colors)
  return (
    <ColorList
        colors={colors}
        onRemoveColor={id => {
          const newColors = colors.filter(color => color.id !== id)
          setColors(newColors)
        }}
        onRateColor={(id, rating) => {
            const newColors = colors.map(color => color.id === id ? {...color, rating} : color)
            setColors(newColors)
        }}
    />
  );
}
