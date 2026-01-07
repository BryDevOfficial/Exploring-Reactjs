import { useState } from 'react';

interface ColorSwitchProps {
    backgroundColor: "red" | "green" | "blue";
}

function ColorSwitch({backgroundColor: defaultColor}: ColorSwitchProps)
{
    const [currentColor, setCurrentColor] = useState<string>(defaultColor);

  /*  const handleSwitchColor = () => {
        setCurrentColor((prevColor) =>  prevColor === "red" ? "green" : prevColor === "green" ? "blue" : "red");
         // console.log(currentColor);
    }*/

const handleSwitchColor = () => {
    setCurrentColor((prev) => {
        // Define the "Next Step" for every possible color
        const nextColorMap: Record<string, string> = {
            red: "green",
            green: "blue",
            blue: "red"
        };
        
        return nextColorMap[prev];
    });
};


    return (

        <>
        <button style= {
            {
            backgroundColor: currentColor, 
            color: currentColor === "red" ? "white" : currentColor === "blue" ? "yellow" : "purple",
            cursor: "pointer"}} onClick={handleSwitchColor}>Click Me</button>
        </>
    )

}

export default ColorSwitch;