var EventsApp;
(function (EventsApp) {
    var Controllers;
    (function (Controllers) {
        var FavoriteColorController = (function () {
            function FavoriteColorController() {
            }
            FavoriteColorController.prototype.submitForm = function () {
                alert(this.newSandwich.eggSalad);
            };
            FavoriteColorController.prototype.pick = function (color) {
                this.selectedColor = color;
            };
            return FavoriteColorController;
        })();
        angular.module('EventsApp').controller('FavoriteColorController', FavoriteColorController);
    })(Controllers = EventsApp.Controllers || (EventsApp.Controllers = {}));
})(EventsApp || (EventsApp = {}));
//# sourceMappingURL=controller.js.map