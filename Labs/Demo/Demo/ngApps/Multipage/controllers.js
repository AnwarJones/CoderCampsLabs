var MultiPage;
(function (MultiPage) {
    var Controllers;
    (function (Controllers) {
        var Page1Controller = (function () {
            function Page1Controller() {
                this.message = "Hi from Page 1!";
            }
            return Page1Controller;
        })();
        angular.module('MultiPageApp').controller('Page1Controller', Page1Controller);
        var Page2Controller = (function () {
            function Page2Controller() {
                this.message = "Hi from Page 2!";
            }
            return Page2Controller;
        })();
        angular.module('MultiPageApp').controller('Page2Controller', Page2Controller);
    })(Controllers = MultiPage.Controllers || (MultiPage.Controllers = {}));
})(MultiPage || (MultiPage = {}));
//# sourceMappingURL=controllers.js.map