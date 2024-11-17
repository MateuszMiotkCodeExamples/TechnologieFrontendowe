'use client'
import ColorList from "@/app/components/ColorList";
import AddColorForm_with_formik from "@/app/components/AddColorForm_with_formik";


export default function Home() {

  return (
      <>
        <AddColorForm_with_formik/>
        <ColorList/>
      </>

  );
}
