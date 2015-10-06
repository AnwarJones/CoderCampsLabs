define(["require", "exports"], function (require, exports) {
    function doSomething() {
        console.log('something');
    }
    exports.doSomething = doSomething;
    var Animal = (function () {
        function Animal() {
        }
        return Animal;
    })();
    exports.Animal = Animal;
});
//# sourceMappingURL=utilities.js.map