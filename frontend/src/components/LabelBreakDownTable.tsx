import type {LabelBreakdown} from "../types/label.ts";

type LabelBreakdownTableProps = {
    labelBreakDownList: LabelBreakdown[]
}

export default function LabelBreakdownTable({ labelBreakDownList }: LabelBreakdownTableProps) {
    return (
        <table className="w-full">
            <thead>
            <tr>
                <th className="table-header">Artikelnummer</th>
                <th className="table-header">Besteld</th>
                <th className="table-header">Rollen/folie</th>
                <th className="table-header">Inktolies</th>
                <th className="table-header">Verbruik (m)</th>
                <th className="table-header">Verbruik (%)</th>
            </tr>
            </thead>
            <tbody>
            {labelBreakDownList.map((breakdown) => (
                <tr  key={breakdown.articleNumber} className="border-b border-gray-100 transition-colors">
                    <td className="table-cell font-semibold">{breakdown.articleNumber}</td>
                    <td className="table-cell">{breakdown.orderedAmount}</td>
                    <td className="table-cell">{breakdown.labelRollsForFullFoil}</td>
                    <td className="table-cell">{breakdown.foilRollsNeeded}</td>
                    <td className="table-cell">{(breakdown.foilUsed / 1000).toFixed()}</td>
                    <td className="table-cell">{Math.round(breakdown.foilUsedPercentage)}</td>
                </tr>
            ))}
        </tbody>
    </table>
    )
}
