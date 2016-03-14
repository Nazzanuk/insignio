app.controller('CalendarScreen', ($scope, $stateParams, State) => {

    var init = () => {};

    init();

    _.extend($scope, {

        isRecruiter: State.isRecruiter
    });
});