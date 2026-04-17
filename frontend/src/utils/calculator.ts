import type {CalculationResult, ClientOrder, LabelBreakdown} from "../types/label.ts";

export function calculateFolieAmount(order: ClientOrder): CalculationResult {
    const result: CalculationResult = { foilNeeded: 0, foilRollsNeeded: 0, foilEfficiency: 0, foilLastUsedPercentage: 0, breakDown: [] };
    const labelBreakdowns: LabelBreakdown[] = []
    let totalFoilNeeded = 0;

    for (const labelOrder of order.labelOrders) {

        const labelRolTotalHeight = (labelOrder.label.height + labelOrder.label.gap) * (labelOrder.label.totalLabels / labelOrder.label.labelsPerRow) * labelOrder.labelRollsOrdered;
        totalFoilNeeded += labelRolTotalHeight;

        const foilRollsNeededCurrentLabel = Math.ceil(labelRolTotalHeight / order.foilLength);

        const breakdown: LabelBreakdown = {
            articleNumber: labelOrder.label.articleNumber,
            foilUsed: labelRolTotalHeight,
            foilRollsNeeded: foilRollsNeededCurrentLabel,
            foilUsedPercentage: 0
        }
        labelBreakdowns.push(breakdown)
    }

    labelBreakdowns.forEach(b => {
        b.foilUsedPercentage = (b.foilUsed / totalFoilNeeded) * 100
    })

    result.breakDown = labelBreakdowns
    result.foilNeeded = totalFoilNeeded
    result.foilRollsNeeded = Math.ceil(totalFoilNeeded / order.foilLength)
    result.foilEfficiency = totalFoilNeeded / (result.foilRollsNeeded * order.foilLength) * 100
    const lastRollUsed = totalFoilNeeded - (result.foilRollsNeeded - 1) * order.foilLength
    result.foilLastUsedPercentage = (lastRollUsed / order.foilLength) * 100

    return result;
}