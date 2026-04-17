import type {Label, LabelOrder} from "../types/label.ts";

type LabelCardProps = {
    labelOrder: LabelOrder,
    onValueChange: (id: number, param: keyof Label | "labelRollsOrdered", value: number | string) => void
    onRemoveButtonClick: () => void
}

export default function LabelCard({labelOrder, onValueChange, onRemoveButtonClick}: LabelCardProps) {
    return (
        <div>
            <h2>Label name</h2>

            <button onClick={onRemoveButtonClick}>Remove</button>
            <div>
                <label>Article number</label> <br />
                <input
                    type={"text"}
                    value={labelOrder.label.articleNumber}
                    onChange={(e) => onValueChange(labelOrder.id, "articleNumber", e.target.value)}
                /> <br />
                <label>Label height (mm)</label> <br />
                <input
                    type={"number"}
                    value={labelOrder.label.height}
                    onChange={(e) => onValueChange(labelOrder.id, "height", Number(e.target.value))}
                /> <br />
                <label>Gap (mm)</label> <br />
                <input type={"number"}
                       value={labelOrder.label.gap}
                       onChange={(e) => onValueChange(labelOrder.id, "gap", Number(e.target.value))}
                /> <br />
                <label>Labels per row</label> <br />
                <input type={"number"}
                       value={labelOrder.label.labelsPerRow}
                       onChange={(e) => onValueChange(labelOrder.id, "labelsPerRow",Number(e.target.value))}
                /> <br />
                <label>Total labels per roll</label> <br />
                <input type={"number"}
                       value={labelOrder.label.totalLabels}
                       onChange={(e) => onValueChange(labelOrder.id, "totalLabels", Number(e.target.value))}
                /> <br />
                <label>Rolls ordered</label> <br />
                <input type={"number"}
                       value={labelOrder.labelRollsOrdered}
                       onChange={(e) => onValueChange(labelOrder.id, "labelRollsOrdered", Number(e.target.value))}
                />
            </div>
        </div>
    )
}
