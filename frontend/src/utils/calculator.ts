import type {CalculationResult, ClientOrder} from "../types/label.ts";

export function calculateFolieAmount(order: ClientOrder): CalculationResult {
    let totalFoilNeeded = 0;
    const result: CalculationResult = { foilNeeded: 0, foilRollsNeeded: 0, foilUsagePercentage: 0 };

    for (const labelOrder of order.labelOrders) {
        const labelRolTotalHeight = (labelOrder.label.height + labelOrder.label.gap) * (labelOrder.label.totalLabels / labelOrder.label.labelsPerRow) * labelOrder.labelRollsOrdered;
        totalFoilNeeded += labelRolTotalHeight;
    }
    result.foilNeeded = totalFoilNeeded
    result.foilRollsNeeded = Math.ceil(totalFoilNeeded / order.foilLength)
    result.foilUsagePercentage = totalFoilNeeded / (result.foilRollsNeeded * order.foilLength) * 100

    return result;
}