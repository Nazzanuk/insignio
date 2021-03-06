app.config(($stateProvider, $urlRouterProvider, $locationProvider) => {

    //this controls the animations for each transition
    var resolve = {
        timeout: ($timeout, State) => {
            $('[screen]').removeClass('active');
            $timeout(() => $('[screen]').addClass('active'), 350);
            State.hideSidebar();
            return $timeout(300);
        }
    };

    // For any unmatched url, redirect to /
    $urlRouterProvider.otherwise("/");

    // Now set up the states
    $stateProvider
        .state('splash', {
            url: "/",
            templateUrl: "splash-screen.html",
            resolve
        })
        .state('home', {
            url: "/home",
            templateUrl: "home-screen.html",
            controller: 'HomeScreen',
            resolve
        })
        .state('user', {
            url: "/user/:id",
            templateUrl: "user-screen.html",
            controller: 'UserScreen',
            resolve
        })
        .state('new', {
            url: "/new",
            templateUrl: "new-screen.html",
            controller: 'NewScreen',
            resolve
        })
        .state('calendar', {
            url: "/user/:id/calendar",
            templateUrl: "calendar-screen.html",
            controller: 'CalendarScreen',
            resolve
        })
        .state('documents', {
            url: "/user/:id/documents",
            templateUrl: "documents-screen.html",
            controller: 'DocumentsScreen',
            resolve
        })
        .state('signedDocs', {
            url: "/user/:id/signed-docs",
            templateUrl: "signed-docs-screen.html",
            controller: 'SignedDocsScreen',
            resolve
        })
        .state('job', {
            url: "/job/:id",
            templateUrl: "job-screen.html",
            controller: 'JobScreen',
            resolve
        })
        .state('verify', {
            url: "/user/:id/verify",
            templateUrl: "verify-screen.html",
            controller: 'VerifyScreen',
            resolve
        });

    //use real urls instead of hashes
    //$locationProvider.html5Mode(true);
});