import {useState} from "react";
import type {ClientOrder, Label, LabelOrder} from "./types/label.ts";
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

    function updateLabelValue(id: number, param: keyof Label | "labelRollsOrdered", value: number | string) {
        console.log("updating: ", id, param, value)
        const updatedOrders = clientOrder.labelOrders.map(order => {
            if (order.id !== id) return order

            if (param === "labelRollsOrdered") {
                return { ...order, labelRollsOrdered: Number(value) }
            } else {
                return { ...order, label: { ...order.label, [param]: value}}
            }
        })
        setClientOrder({...clientOrder, labelOrders: updatedOrders})
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
                    onValueChange={(id, param, value) => updateLabelValue(id, param, value)}
                    onAddButtonClicked={() => addClientOrder()}
                    onRemoveButtonClicked={(labelOrder) => removeLabelOrder(labelOrder)}
                />
            </div>
        </>
    )
}
