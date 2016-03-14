app.service('Users', ($state, $stateParams, $timeout) => {

    var users = [
        new User('John Sanders', 'Project Manager', 'jsanders@gmail.com', undefined, 'M'),
        new User('Billy Fisher', 'Java Developer', 'bfisher@gmail.com', undefined, 'M'),
        new User('Anna Arienne', 'Front-End Developer', 'aarienne@gmail.com', undefined, 'F'),
        new User('John Phillips', 'Product Analyst', 'jphillips@gmail.com', undefined, 'M'),
        new User('Arnold King', 'Java Developer', 'jphillips@gmail.com', undefined, 'M'),
        new User('Claire Fernandez', 'Oracle Ace', 'jphillips@gmail.com', undefined, 'F'),
        new User('Lennard Timon', 'Business Analyst', 'jphillips@gmail.com', undefined, 'M'),
        new User('Maximilian Montana', 'Javascript Developer', 'jphillips@gmail.com', undefined, 'M'),
        new User('Justin Tate', 'Java Developer', 'jphillips@gmail.com', undefined, 'M'),
        new User('Shirley Garland', 'Java Developer', 'jphillips@gmail.com', undefined, 'F'),
        new User('Khloe Radcliff', 'Scrum Master', 'jphillips@gmail.com', undefined, 'F')
    ];

    var addUser = (user) => {
        users.push(user);
    };

    var init = () => {
        console.log('users', users);
        users = _.sortBy(users, 'progress').reverse();
    };

    init();

    return {
        addUser,
        getUsers: () => users,
        getUserById: (id) => _.find(users, {id: id})
    }
});

class User {
    constructor(name, job, email, progress = _.random(0, 4), gender) {

        var randImg = () => {
            return 'https://randomuser.me/api/portraits/'+ (gender == 'F' ? 'wo' : '') + 'men/' + _.random(1, 30) + '.jpg'
        };

        _.extend(this, {
            name, job, email, progress,
            id: _.uniqueId(),
            img: randImg()
        });

    }
}

