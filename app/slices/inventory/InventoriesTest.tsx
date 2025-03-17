import {assert, runTests, TestCase, TestCollection, TestResult} from "@/app/components/tests/TestRunner";
import {AddItemCommand} from "@/app/api/commands/AddItemCommand";
import {Event} from "@event-driven-io/emmett"
import {addItemCommandHandler} from "@/app/slices/additem/commandHandler";
import {CartEvents} from "@/app/api/events/CartEvents";
import {ItemAddedEvent} from "@/app/api/events/ItemAddedEvent";
import {v4} from "uuid";
import {TestResultViewer} from "@/app/components/TestResultViewer";
import {useEffect} from "react";
import {cartItemsStateView} from "@/app/slices/cartitems/CartItemsStateView";
import { InventoryUpdatedEvent } from "@/app/api/events/InventoryUpdatedEvent";
import {inventoriesStateView} from "@/app/slices/inventory/InventoriesStateView";


const prepareTestCollection = (): TestCollection<AddItemCommand, InventoryUpdatedEvent> => {
    return {
        slice_name: "inventory state view",
        tests: [
            {
                test_name: "calculates invenetory",
                given: [{
                    type: 'InventoryUpdated',
                    data: {
                       productId: v4(),
                        inventory: 5
                    }
                },{
                    type: 'InventoryUpdated',
                    data: {
                        productId: "product-id",
                        inventory: 6
                    }
                }],
                test: async (testName: string, given, when) => {
                    let result = await inventoriesStateView(0,given,{productId: "product-id"})
                    return {
                        test_name: testName,
                        passed: result == 6,
                        message: "filters for inventory"
                    }
                }
            }]
    }
}

export default function InventoriesTest() {
    return <TestResultViewer slice={"Inventories"} results={runTests(prepareTestCollection)}/>
}