"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoutingEngine = void 0;
class RoutingEngine {
    constructor(routing = new Array()) {
        this.routing = routing;
    }
    Add(routing, route) {
        const routed = new routing();
        routed.AddRoute(route);
    }
}
exports.RoutingEngine = RoutingEngine;
//# sourceMappingURL=RoutingEngine.js.map