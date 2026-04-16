import {useState} from "react";
import type {ClientOrder, LabelOrder} from "./types/label.ts";
import FolieSettings from "./components/FolieSettings.tsx";
import LabelList from "./components/LabelList.tsx";


export default function App() {

    const [clientOrder, setClientOrder] = useState<ClientOrder>({
        foilLength: 300,
        labelOrders: []
    })

    function addClientOrder() {
        // add new labelOrder in labelOrders list
    }

    function updateLabelValue(param: string, value: number | string) {
        // update the label in the labelOrder
    }

    function removeLabelOrder(labelOrder: LabelOrder) {
        // remove the label order from the label orders list
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
