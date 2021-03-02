"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindByIdRouter = void 0;
const Database_1 = require("../Database");
class FindByIdRouter {
    AddRoute(route) {
        route.get("/id/:id", (request, response) => {
            Database_1.Picture.findOne({ _id: request.params.id }, "-_id", null, (err, picture) => {
                if (err) {
                    response.send(err);
                }
                response.json(picture);
            });
        });
    }
}
exports.FindByIdRouter = FindByIdRouter;
//# sourceMappingURL=FindByIdRouter.js.map