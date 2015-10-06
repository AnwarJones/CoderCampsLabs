var EventsApp;
(function (EventsApp) {
    var Controllers;
    (function (Controllers) {
        var FavoriteColorController = (function () {
            function FavoriteColorController() {
            }
            FavoriteColorController.prototype.addSandwich = function () {
                this.result = (this.num1 + this.num2);
            };
            return FavoriteColorController;
        })();
        angular.module('EventsApp').controller('FavoriteColorController', FavoriteColorController);
    })(Controllers = EventsApp.Controllers || (EventsApp.Controllers = {}));
})(EventsApp || (EventsApp = {}));
//# sourceMappingURL=controllers.js.map