import type {CalculationResult} from "../types/label.ts";

type ResultsProps = {
    calculationResult: CalculationResult
}

export default function Results({ calculationResult }: ResultsProps) {
    if (calculationResult.foilRollsNeeded === 0) {
        return (
            <div className="bg-white shadow-2xl rounded-2xl p-4">
                <h2 className="text-2xl font-bold mb-4">Resultaat</h2>
                <p>Voeg label toe om resultaten te weergeven.</p>
            </div>
        )
    }

    return (
        <div className="bg-white shadow-2xl rounded-2xl p-4">
            <h2 className="text-2xl font-bold mb-4">Resultaat</h2>

            <div className="grid grid-cols-3 gap-4">
                <div className="bg-altec-light border border-altec-teal rounded-2xl p-4 mb-3">
                    <p className="text-sm text-gray-500 font-medium">Totale lengte folie</p>
                    <h3 className="text-xl text-altec-dark font-medium">{(calculationResult.foilNeeded / 1000).toFixed(1)} m</h3>
                </div>

                <div className="bg-altec-light border border-altec-teal rounded-2xl p-4 mb-3">
                    <p className="text-sm text-gray-500 font-medium">Totale folie rollen</p>
                    <h3 className="text-xl text-altec-dark font-medium">{calculationResult.foilRollsNeeded}</h3>
                </div>

                <div className="bg-altec-light border border-altec-teal rounded-2xl p-4 mb-3">
                    <p className="text-sm text-gray-500 font-medium">Percentage laatst gebruikte folie rol</p>
                    <h3 className="text-xl text-altec-dark font-medium">{Math.round(calculationResult.foilLastUsedPercentage)} %</h3>
                </div>

                <div className="bg-altec-light border border-altec-teal rounded-2xl p-4 mb-3">
                    <p className="text-sm text-gray-500 font-medium">Efficiëntie</p>
                    <h3 className="text-xl text-altec-dark font-medium">{Math.round(calculationResult.foilEfficiency)} %</h3>
                </div>
            </div>
            <div className="mt-6">
                <div className="border-b flex justify-between items-center py-3">
                    <h3 className="text-sm text-gray-500 font-medium">Artikel nummer</h3>
                    <h3 className="text-sm text-gray-500 font-medium">Aantal folies</h3>
                    <h3 className="text-sm text-gray-500 font-medium">Folie verbruik</h3>
                    <h3 className="text-sm text-gray-500 font-medium">Folie percentage</h3>
                </div>
                {calculationResult.breakDown.map((breakdown) => (
                    <div key={breakdown.articleNumber} className="flex justify-between items-center py-3">
                        <p className="text-sm text-altec-dark font-bold">{breakdown.articleNumber}</p>
                        <p className="text-sm text-altec-dark font-bold">{breakdown.foilRollsNeeded}</p>
                        <p className="text-sm text-altec-dark font-medium">{(breakdown.foilUsed / 1000).toFixed(1)} m</p>
                        <p className="text-sm text-altec-dark font-medium">{Math.round(breakdown.foilUsedPercentage)} %</p>
                    </div>
                ))}
            </div>
        </div>
    )
}