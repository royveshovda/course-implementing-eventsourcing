import {CartClearedEvent} from "@/app/api/events/CartClearedEvent";
import {InventoryUpdatedEvent} from "@/app/api/events/InventoryUpdatedEvent";
import {InventorychangedEvent} from "@/app/api/events/InventorychangedEvent";
import {CartPublishedEvent} from "@/app/api/events/CartPublishedEvent";
import {CartsubmittedEvent} from "@/app/api/events/CartsubmittedEvent";
import {ItemAddedEvent} from "@/app/api/events/ItemAddedEvent";
import {ItemArchivedEvent} from "@/app/api/events/ItemArchivedEvent";
import {ItemArchiveRequestedEvent} from "@/app/api/events/ItemArchiveRequestedEvent";
import {PricechangedEvent} from "@/app/api/events/PricechangedEvent";
import {ItemRemovedEvent} from "@/app/api/events/ItemremovedEvent";


export type CartEvents = CartClearedEvent |
    InventoryUpdatedEvent |
    InventorychangedEvent |
    CartPublishedEvent |
    CartsubmittedEvent |
    ItemAddedEvent |
    ItemArchivedEvent |
    ItemArchiveRequestedEvent |
    PricechangedEvent |
    ItemRemovedEvent