import { ChevronRight } from "lucide-react";
import { Chart } from "react-google-charts";
import { Button } from "../ui/Button";

function QualityChart() {
    const data = [
        ["Quality Location Data", ""],
        ["Missing", 6],
        ["Incorrect", 20],
        ["Correct", 0],
    ];

    const options = {
        legend: "none",
        colors: ["#dc2626", "#f97316", "#22c55e"],
    };
    return (
        <div className="flex gap-2 flex-col md:flex-row md:items-center md:justify-center pt-5">
            <div className="flex justify-center flex-col xs:flex-row">
                <ul className="flex flex-col justify-center gap-5">
                    <li className="flex flex-col items-center border-0 md:border-2 border-gray-500/10 p-2">
                        <span className="text-red-600 font-semibold text-2xl">
                            23%
                        </span>
                        <span className="text-xs">MISSING</span>
                    </li>
                    <li className="flex flex-col items-center border-0 md:border-2 border-gray-500/10 p-2">
                        <span className="text-orange-500 font-semibold text-2xl">
                            77%
                        </span>
                        <span className="text-xs">INCORRECT</span>
                    </li>
                    <li className="flex flex-col items-center border-0 md:border-2 border-gray-500/10 p-2">
                        <span className="text-green-500 font-semibold text-2xl">
                            0%
                        </span>
                        <span className="text-xs">CORRECTO</span>
                    </li>
                </ul>
                <div className="flex justify-center items-center">
                    <Chart
                        chartType="PieChart"
                        data={data}
                        options={options}
                        width={300}
                        height={300}
                        className="self-center"
                    />
                </div>
            </div>
            <ChevronRight
                size={100}
                strokeWidth={0.5}
                className="text-skyBlue/10 hidden md:block"
            />
            <div className="flex flex-col items-center gap-4">
                <h4 className="text-xl font-semibold text-center max-w-72">
                    Learn how accurate and complete data can double your
                    visibility and conversions
                </h4>
                <Button className="px-6 py-2 min-h-12 h-12 flex-1 text-sm">
                    Request a demo
                </Button>
            </div>
        </div>
    );
}

export default QualityChart;
