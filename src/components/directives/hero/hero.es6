app.component('heroItem', {
    templateUrl: 'hero.html',
    controllerAs: 'hero',
    bindings: {
        img: '@',
        heading: '@',
        subheading: '@'
    },
    controller: function ($element, $timeout) {

        var init = () => {};

        init();

        _.extend(this, {});
    }
});
