"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeletePictureRouter = void 0;
class DeletePictureRouter {
    AddRoute(route) {
        route.post("/delete/", (request, response) => {
            console.log(request.body);
        });
    }
}
exports.DeletePictureRouter = DeletePictureRouter;
//# sourceMappingURL=DeletePictureRouter.js.map