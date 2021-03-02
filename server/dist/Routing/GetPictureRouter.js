"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetPictureRouter = void 0;
const Database_1 = require("../Database");
class GetPictureRouter {
    AddRoute(route) {
        route.get("/get/", (request, response) => {
            Database_1.Picture.distinct("_id", (err, picture) => {
                if (err) {
                    response.send(err);
                }
                response.send(picture);
            });
        });
    }
}
exports.GetPictureRouter = GetPictureRouter;
//# sourceMappingURL=GetPictureRouter.js.map