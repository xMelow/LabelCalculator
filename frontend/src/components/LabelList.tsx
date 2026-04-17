import type {Label, LabelOrder} from "../types/label.ts";
import LabelCard from "./LabelCard.tsx";

type LabelListProps = {
    labelOrders: LabelOrder[],
    onValueChange: (id: number, param: keyof Label | "labelRollsOrdered", value: number | string) => void,
    onAddButtonClicked: () => void,
    onRemoveButtonClicked: (labelOrder: LabelOrder) => void
}

export default function LabelList({labelOrders, onValueChange, onAddButtonClicked, onRemoveButtonClicked}: LabelListProps) {
    return (
        <div className="bg-white shadow-2xl rounded-2xl p-4">
            {labelOrders.map((labelOrder) => (
                <LabelCard
                    key={labelOrder.id}
                    labelOrder={labelOrder}
                    onValueChange={onValueChange}
                    onRemoveButtonClick={() => onRemoveButtonClicked(labelOrder)}
                />
            ))}
            <button
                className="w-full mt-4 py-2 border-2 border-dashed border-gray-300 rounded-xl text-gray-400 hover:border-altec-teal hover:text-altec-teal transition-colors"
                onClick={onAddButtonClicked}>+ Add label</button>
        </div>
    )
}