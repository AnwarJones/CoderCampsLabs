namespace MultiPage.Controllers {
    class Page1Controller {
        message = "Hi from Page 1!";
    }
    angular.module('MultiPageApp').controller('Page1Controller', Page1Controller);
    class Page2Controller {

        message = "Hi from Page 2!";
    }
    angular.module('MultiPageApp').controller('Page2Controller', Page2Controller);

    
}