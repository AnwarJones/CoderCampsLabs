namespace EventsApp.Controllers {    

    class FavoriteColorController {

        public num1: number;
        public num2: number;
        public result;

        addSandwich() {
            this.result = (this.num1+this.num2)
        }

        //public selectedColor: string;

        //pick(color: string) {
        //    this.selectedColor = color;
        }

    angular.module('EventsApp').controller('FavoriteColorController', FavoriteColorController);
}