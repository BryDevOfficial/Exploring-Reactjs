import { useState } from 'react';

interface ColorSwitchProps {
    colors: "red" | "green" | "blue";
}

function ColorSwitch({colors: defaultColor}: ColorSwitchProps)
{
    const [currentColor, setCurrentColor] = useState<string>(defaultColor);

    const handleSwitchColor = () => {
        setCurrentColor((prevColor) =>  prevColor === "red" ? "green" : prevColor === "green" ? "blue" : "red");
    }


    return (

        <>
        <button style= {{color: currentColor, cursor: "pointer"}} onClick={handleSwitchColor}>Click Me</button>
        </>
    )

}

export default ColorSwitch;