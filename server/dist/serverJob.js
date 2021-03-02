"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.serverJob = void 0;
const AddPictureRouter_1 = require("./Routing/AddPictureRouter");
const FindByIdRouter_1 = require("./Routing/FindByIdRouter");
const GetPictureRouter_1 = require("./Routing/GetPictureRouter");
const server_1 = require("./server");
class serverJob extends server_1.Server {
    AddRouting(routingEngine, router) {
        routingEngine.Add(AddPictureRouter_1.AddPictureRouter, router);
        routingEngine.Add(GetPictureRouter_1.GetPictureRouter, router);
        routingEngine.Add(FindByIdRouter_1.FindByIdRouter, router);
    }
}
exports.serverJob = serverJob;
new serverJob(3000).WithCorsSupport().Start();
//# sourceMappingURL=serverJob.js.map