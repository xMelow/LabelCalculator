import type {Label, LabelOrder} from "../types/label.ts";
import LabelCard from "./LabelCard.tsx";

type LabelListProps = {
    labelOrders: LabelOrder[],
    onValueChange: (param: keyof Label | "labelRollsOrdered", value: number | string) => void,
    onAddButtonClicked: () => void,
    onRemoveButtonClicked: (labelOrder: LabelOrder) => void
}

export default function LabelList({labelOrders, onValueChange, onAddButtonClicked, onRemoveButtonClicked}: LabelListProps) {
    return (
        <div>
            {labelOrders.map((labelOrder) => (
                <LabelCard key={labelOrder.id} labelOrder={labelOrder} onValueChange={onValueChange} onRemoveButtonClick={() => onRemoveButtonClicked(labelOrder)} />
            ))}
            <button onClick={onAddButtonClicked}>Add label</button>
        </div>
    )
}