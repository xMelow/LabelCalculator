import type {CalculationResult} from "../types/label.ts";

type ResultsProps = {
    calculationResult: CalculationResult
}

export default function Results({ calculationResult }: ResultsProps) {
    if (calculationResult.foilRollsNeeded === 0) {
        return (
            <div>
                <p>Add labels to see result</p>
            </div>
        )
    }

    return (
        <div>
            <h2>Results</h2>
            <div>
                <div>
                    <p>Total foil needed</p>
                    <h3>{calculationResult.foilNeeded / 1000} m</h3>
                </div>

                <div>
                    <p>Foil rolls needed</p>
                    <h3>{calculationResult.foilRollsNeeded}</h3>
                </div>

                <div>
                    <p>Percentage foil of last roll</p>
                    <h3>{Math.round(calculationResult.foilUsagePercentage)} %</h3>
                </div>
            </div>
        </div>
    )
}