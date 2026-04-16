import {useState} from "react";
import type {ClientOrder, LabelOrder} from "./types/label.ts";
import FolieSettings from "./components/FolieSettings.tsx";
import LabelList from "./components/LabelList.tsx";

let nextId = 0;

export default function App() {
    const [clientOrder, setClientOrder] = useState<ClientOrder>({
        foilLength: 300,
        labelOrders: []
    })

    function addClientOrder() {
        const newOrder: LabelOrder = {
            id: nextId,
            labelRollsOrdered: 1,
            label: {
                articleNumber: "",
                height: 0,
                width: 0,
                gap: 0,
                labelsPerRow: 1,
                totalLabels: 0,
            }
        }
        setClientOrder({...clientOrder, labelOrders: [...clientOrder.labelOrders, newOrder]})
        nextId += 1;
    }

    function updateLabelValue(param: string, value: number | string) {
        // update the label in the labelOrder
    }

    function removeLabelOrder(labelOrder: LabelOrder) {
        const newOrderList = clientOrder.labelOrders.filter(l => l.id !== labelOrder.id)
        setClientOrder({...clientOrder, labelOrders: newOrderList})
    }

    return (
        <>
            <h1>Label Calculator</h1>

            <div>
                <FolieSettings
                    folieTotalLength={clientOrder.foilLength}
                    onFolieChange={(e) => setClientOrder({ ...clientOrder, foilLength: e})}
                />

                <LabelList
                    labelOrders={clientOrder.labelOrders}
                    onValueChange={(param, value) => updateLabelValue(param, value)}
                    onAddButtonClicked={() => addClientOrder()}
                    onRemoveButtonClicked={(labelOrder) => removeLabelOrder(labelOrder)}
                />
            </div>
        </>
    )
}
