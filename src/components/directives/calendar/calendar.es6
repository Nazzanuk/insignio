app.component('calendarItem', {
    templateUrl: 'calendar.html',
    controllerAs: 'calendar',
    bindings: {},
    controller: function ($element, $timeout) {

        var currentWeek = 0;

        var appointments = [
            [moment().add(3, 'days'), "First Stage interview with HR", "30 mins"],
            [moment().add(6, 'days'), "Second Stage interview with Team Lead"],
            [moment().add(7, 'days'), "Meet the team"]
        ];

        var getWeek = (i = 0) => moment().startOf('isoWeek').add(currentWeek + i, 'days').format('Do MMM');
        var getWeekMoment = (i = 0) => moment().startOf('isoWeek').add(currentWeek + i, 'days').add(-1,'second');

        var isValid = (date) => {
            console.log('moment(date):', moment(date));
            console.log('getWeek(0):', moment(getWeek(0)));
            console.log(moment(date).isBetween(getWeekMoment(0)), getWeekMoment(6));
            return moment(date).isBetween(getWeekMoment(0), getWeekMoment(7));
        };

        var init = () => {
        };

        init();

        _.extend(this, {
            getAppointments: () => appointments,
            changeWeek: (amount) => currentWeek += amount,
            getWeek,
            isValid,
            getDate: (string) => moment(string).format('Do'),
            getDay: (string) => moment(string).format('dddd')
        });
    }
});