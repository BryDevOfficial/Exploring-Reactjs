import { useState } from 'react';

interface ColorSwitchProps {
    backgroundColor: "red" | "green" | "blue";
}

function ColorSwitch({backgroundColor: defaultColor}: ColorSwitchProps)
{
    const [currentColor, setCurrentColor] = useState<string>(defaultColor);

    const handleSwitchColor = () => {
        setCurrentColor((prevColor) =>  prevColor === "red" ? "green" : prevColor === "green" ? "blue" : "red");
    }


    return (

        <>
        <button style= {{backgroundColor: currentColor, cursor: "pointer"}} onClick={handleSwitchColor}>Click Me</button>
        </>
    )

}

export default ColorSwitch;