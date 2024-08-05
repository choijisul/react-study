import React, {useState} from "react";
import TemperatureInput from "./TemperatureInput";

// 물 끓음 여부
function BoilingVerdict(props){
    if(props.celsius >= 100){
        return <p>물이 끓습니다.</p>
    }
    return <p>물이 끓지 않습니다.</p>
}

// 화씨로 바꿈
function toCelsius(fahrenheit){
    return ((fahrenheit - 32) * 5) / 9;
}

// 섭씨로 바꿈
function toFahrenheit(celsius){
    return (celsius * 9) / 5 + 32;
}

// 변환하기 (아닌경우 빈 문자열)
function tryConvert(temperature, convert){
    const input = parseFloat(temperature);
    if(Number.isNaN(input)){
        return "";
    }
    const output = convert(input);
    const rounded = Math.round(output * 1000) / 1000;
    return rounded.toString();
}

function Calculator(props){
    // state
    const [temperature, setTemperature] = useState("");
    const [scale, setScale] = useState("c");

    // 온도 기준 변환
    const handleCelsiusChange = (temperature) => {
        setTemperature(temperature);
        setScale("c");
    };

    const handleFahrenheitChange = (temperature) => {
        setTemperature(temperature);
        setScale("f");
    };

    const celsius = scale === "f" ? tryConvert(temperature. toCelsius) : temperature;
    const fahrenheit = scale === "c" ? tryConvert(temperature, toFahrenheit) : temperature;

    // 출력
    return (
        <div>
            <TemperatureInput
                scale="c"
                temperature={celsius}
                onTemperatureChange={handleCelsiusChange}
            />
            <TemperatureInput
                scale="f"
                temperature={fahrenheit}
                onTemperatureChange={handleFahrenheitChange}
            />
            <BoilingVerdict celsius={parseFloat(celsius)}/>
        </div>
    );
}

export default Calculator;