app.factory('RandomGreetings', function () {

    var getRandomFromArray = function (arr) {
        return arr[Math.floor(Math.random() * arr.length)];
    };

    var greetings = [
        'Hello, world!',
        'At long last, I woof!',
        'Hello, simple human.',
        'What a lovely day!',
        'What a woof day!',
        'I\'m like any other project, except that I am yours. :)',
        'This empty string is for Lindsay Levine.',
        'こんにちは、ユーザー様。',
        'Welcome. To. WEBSITE.',
        ':D',
        'Yes, I think we\'ve met before.',
        'Hello, 1506!'
    ];

    return {
        greetings: greetings,
        getRandomGreeting: function () {
            return getRandomFromArray(greetings);
        }
    };

});
