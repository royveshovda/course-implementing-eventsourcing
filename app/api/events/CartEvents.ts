import {CartClearedEvent} from "@/app/api/events/CartClearedEvent";
import {CartPublishedEvent} from "@/app/api/events/CartPublishedEvent";
import {CartsubmittedEvent} from "@/app/api/events/CartsubmittedEvent";
import {ItemAddedEvent} from "@/app/api/events/ItemAddedEvent";
import {ItemArchivedEvent} from "@/app/api/events/ItemArchivedEvent";
import {ItemArchiveRequestedEvent} from "@/app/api/events/ItemArchiveRequestedEvent";
import {ItemRemovedEvent} from "@/app/api/events/ItemremovedEvent";


export type CartEvents = CartClearedEvent |
    CartPublishedEvent |
    CartsubmittedEvent |
    ItemAddedEvent |
    ItemArchivedEvent |
    ItemArchiveRequestedEvent |
    ItemRemovedEvent