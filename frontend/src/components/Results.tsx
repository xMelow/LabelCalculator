import type {CalculationResult} from "../types/label.ts";

type ResultsProps = {
    calculationResult: CalculationResult
}

export default function Results({ calculationResult }: ResultsProps) {
    if (calculationResult.foilRollsNeeded === 0) {
        return (
            <div className="bg-white shadow-2xl rounded-2xl p-4">
                <p>Add labels to see result</p>
            </div>
        )
    }

    return (
        <div className="bg-white shadow-2xl rounded-2xl p-4">
            <h2 className="text-2xl font-bold mb-4">Results</h2>

            <div className="grid grid-cols-3 gap-4">
                <div className="bg-white border border-altec-teal rounded-2xl p-4 mb-3">
                    <p className="text-sm text-gray-500 font-medium">Total foil needed</p>
                    <h3 className="text-xl text-altec-dark font-medium">{(calculationResult.foilNeeded / 1000).toFixed(1)} m</h3>
                </div>

                <div className="bg-white border border-altec-teal rounded-2xl p-4 mb-3">
                    <p className="text-sm text-gray-500 font-medium">Foil rolls needed</p>
                    <h3 className="text-xl text-altec-dark font-medium">{calculationResult.foilRollsNeeded}</h3>
                </div>

                <div className="bg-white border border-altec-teal rounded-2xl p-4 mb-3">
                    <p className="text-sm text-gray-500 font-medium">Percentage last used foil roll</p>
                    <h3 className="text-xl text-altec-dark font-medium">{Math.round(calculationResult.foilLastUsedPercentage)} %</h3>
                </div>

                <div className="bg-white border border-altec-teal rounded-2xl p-4 mb-3">
                    <p className="text-sm text-gray-500 font-medium">Efficiency</p>
                    <h3 className="text-xl text-altec-dark font-medium">{Math.round(calculationResult.foilEfficiency)} %</h3>
                </div>


            </div>
        </div>
    )
}