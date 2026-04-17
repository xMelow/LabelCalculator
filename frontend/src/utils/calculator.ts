import type {CalculationResult, ClientOrder} from "../types/label.ts";

export function calculateFolieAmount(order: ClientOrder): CalculationResult {
    let totalFoilNeeded = 0;
    const result: CalculationResult = { foilNeeded: 0, foilRollsNeeded: 0, foilEfficiency: 0, foilLastUsedPercentage: 0 };

    for (const labelOrder of order.labelOrders) {
        const labelRolTotalHeight = (labelOrder.label.height + labelOrder.label.gap) * (labelOrder.label.totalLabels / labelOrder.label.labelsPerRow) * labelOrder.labelRollsOrdered;
        totalFoilNeeded += labelRolTotalHeight;
    }
    result.foilNeeded = totalFoilNeeded
    result.foilRollsNeeded = Math.ceil(totalFoilNeeded / order.foilLength)
    result.foilEfficiency = totalFoilNeeded / (result.foilRollsNeeded * order.foilLength) * 100
    const lastRollUsed = totalFoilNeeded - (result.foilRollsNeeded - 1) * order.foilLength
    result.foilLastUsedPercentage = (lastRollUsed / order.foilLength) * 100
    return result;
}