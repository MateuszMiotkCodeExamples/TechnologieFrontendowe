'use client'
import colorData from './data/color-data.json'
import {useState} from "react";
import ColorList from "@/app/components/ColorList";
import AddColorForm from "@/app/components/AddColorForm";
import AddColorForm_Controlled from "@/app/components/AddColorForm_Controlled";
import AddColorForm_Controlled2 from "@/app/components/AddColorForm_Controlled2";
import {v4} from "uuid";
import AddColorForm_with_formik from "@/app/components/AddColorForm_with_formik";

export default function Home() {
  const [colors, setColors] = useState(colorData)
  return (
      <>
        <AddColorForm_with_formik
            onNewColor={(title, color) => {
                const newColors = [...colors,
                    {
                        id: v4(),
                        rating: 0,
                        title,
                        color,
                    }
                    ]
                    setColors(newColors)
            }

            }
        />
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
      </>

  );
}
