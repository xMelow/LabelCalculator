
export type Label = {
    articleNumber: string,
    width: number,
    height: number,
    gap: number,
    labelsPerRow: number,
    totalLabels: number,
}

export type LabelOrder = {
    id: number,
    label: Label,
    labelRollsOrdered: number
}

export type ClientOrder = {
    foilLength: number,
    labelOrders: LabelOrder[],
}

export type CalculationResult = {
    foilNeeded: number,
    foilRollsNeeded: number,
    foilEfficiency: number,
    foilLastUsedPercentage: number,
    breakDown: LabelBreakdown[]
}

export type LabelBreakdown = {
    articleNumber: string,
    foilUsed: number,
    foilRollsNeeded: number,
    foilUsedPercentage: number
}
