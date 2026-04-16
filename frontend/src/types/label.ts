
export type Label = {
    articleNumber: string,
    width: number,
    height: number,
    gap: number,
    labelsPerRow: number,
    totalLabels: number,
}

export type OrderLine = {
    label: Label,
    labelRollsOrdered: number
}

export type ClientOrder = {
    foilLength: number,
    lines: OrderLine[],
}

export type CalculationResult = {
    foilNeeded: number,
    foilRollsNeeded: number,
}