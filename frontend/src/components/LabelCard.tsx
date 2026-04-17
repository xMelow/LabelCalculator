import type {Label, LabelOrder} from "../types/label.ts";

type LabelCardProps = {
    labelOrder: LabelOrder,
    onValueChange: (id: number, param: keyof Label | "labelRollsOrdered", value: number | string) => void
    onRemoveButtonClick: () => void
}

export default function LabelCard({labelOrder, onValueChange, onRemoveButtonClick}: LabelCardProps) {
    return (
        <div className="bg-white shadow-2xl rounded-2xl p-4 mb-3">
            <div className="flex justify-between items-center mb-4">
                <h2 className="font-bold text-2xl text-altec-dark">
                    {labelOrder.label.articleNumber || "New Label"}
                </h2>
                <button className="p-2 border-altec-light-blue bg-altec-light-blue border-2 rounded-2xl hover:bg-altec-teal hover:text-white"
                        onClick={onRemoveButtonClick}>Remove</button>
            </div>

            <div className="grid grid-cols-3 gap-4">
                <div className="flex flex-col gap-1 mt-4">
                    <label className="input-label">Article number</label>
                    <input
                        className="input-field"
                        type={"text"}
                        value={labelOrder.label.articleNumber}
                        onChange={(e) => onValueChange(labelOrder.id, "articleNumber", e.target.value)}
                    />
                </div>

                <div className="flex flex-col gap-1 mt-4">
                    <label className="input-label">Label height (mm)</label>
                    <input
                        className="input-field"
                        type={"number"}
                        value={labelOrder.label.height}
                        onChange={(e) => onValueChange(labelOrder.id, "height", Number(e.target.value))}
                    />
                </div>

                <div className="flex flex-col gap-1 mt-4">
                    <label className="input-label">Gap (mm)</label>
                    <input
                        className="input-field"
                        type={"number"}
                        value={labelOrder.label.gap}
                        onChange={(e) => onValueChange(labelOrder.id, "gap", Number(e.target.value))}
                    />
                </div>

                <div className="flex flex-col gap-1 mt-4">
                    <label className="input-label">Labels per row</label>
                    <input
                        className="input-field"
                        type={"number"}
                        value={labelOrder.label.labelsPerRow}
                        onChange={(e) => onValueChange(labelOrder.id, "labelsPerRow",Number(e.target.value))}
                    />
                </div>

                <div className="flex flex-col gap-1 mt-4">
                    <label className="input-label">Total labels per roll</label>
                    <input
                        className="input-field"
                        type={"number"}
                        value={labelOrder.label.totalLabels}
                        onChange={(e) => onValueChange(labelOrder.id, "totalLabels", Number(e.target.value))}
                    />
                </div>

                <div className="flex flex-col gap-1 mt-4">
                    <label className="input-label">Rolls ordered</label>
                    <input
                        className="input-field"
                        type={"number"}
                        value={labelOrder.labelRollsOrdered}
                        onChange={(e) => onValueChange(labelOrder.id, "labelRollsOrdered", Number(e.target.value))}
                    />
                </div>
            </div>
        </div>
    )
}
