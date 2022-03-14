import { publish } from 'gh-pages';

publish(
    'build-final',
    {
        branch: 'master',
        repo: 'https://github.com/cowardswithbadges/cwb_production.git',
        user: {
            name: 'Daren', 
            email: 'cowardswithbadges@gmail.com'
        },
        dotfiles: true
    },
    () => {
        console.log('Deploy Complete!');
    }
);