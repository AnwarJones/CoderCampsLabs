var MyApp;
(function (MyApp) {
    var Controllers;
    (function (Controllers) {
        var PetsController = (function () {
            function PetsController() {
                this.pets = [
                    {
                        name: 'Dog',
                        animals: [
                            { name: 'Fido', src: 'http://static.ddmcdn.com/gif/earliest-dogs-660x433-130306-akita-660x433.jpg' },
                            { name: 'Rover', src: 'http://static.ddmcdn.com/gif/earliest-dogs-660x433-130306-chow-chow-660x433.jpg' },
                            { name: 'James', src: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSeRXc1bIB5VXXGsc_YhHnhDCedX3xLwuHQljO7cENcnBl3v9HY' }
                        ]
                    },
                    {
                        name: 'Bunnies',
                        animals: [
                            { name: 'Charlie', src: 'http://i283.photobucket.com/albums/kk303/jaynewayne1/rabbit.jpg' },
                            { name: 'Buttercup', src: 'http://www.myfunnypets.net/wp-content/uploads/2011/01/pet-rabbit.jpg' },
                            { name: 'Snowball', src: 'http://blogs.rgj.com/mostlydogs/files/2012/07/Snow-White-170034.jpg' }
                        ]
                    }
                ];
            }
            return PetsController;
        })();
        angular.module('MoviesApp').controller('PetController', PetsController);
    })(Controllers = MyApp.Controllers || (MyApp.Controllers = {}));
})(MyApp || (MyApp = {}));
var pets = [];
//# sourceMappingURL=controllers.js.map