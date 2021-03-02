import * as core from "express-serve-static-core";
import { AddPictureRouter } from "./Routing/AddPictureRouter";
import { FindByIdRouter } from "./Routing/FindByIdRouter";
import { GetPictureRouter } from "./Routing/GetPictureRouter";
import { RoutingEngine } from "./Routing/RoutingEngine";
import { Server } from "./server";

export class serverJob extends Server {
    protected AddRouting(
        routingEngine: RoutingEngine,
        router: core.Router
    ): void {
        routingEngine.Add(AddPictureRouter, router);
        routingEngine.Add(GetPictureRouter, router);
        routingEngine.Add(FindByIdRouter, router);
    }
}

new serverJob(3000).WithCorsSupport().Start();
