namespace EventsApp.Controllers {



    class FavoriteColorController {
        public newSandwich: any;

        submitForm() {
            alert(this.newSandwich.eggSalad);
        }

        public selectedColor: string;

        pick(color: string) {
            this.selectedColor = color;
        }
    }

    angular.module('EventsApp').controller('FavoriteColorController', FavoriteColorController);
}