import { beforeEach, describe, expect, it, vi } from 'vitest';

import { MovieActorStore } from '../../src/data/api/MovieActorStore';

// TODO: mock the fetch call...

// INFO: fo now i am using this pseudoly to test the api calls but before i have api calls just male thing the logic so just want to test logicv...

// .. wontt have this in git eventualy

const groundhogResponse = {
    id: 137,
    title: 'Groundhog Day',
};

const groundhogCast = [
    { id: 1532, name: 'Bill Murray', characterName: 'Phil Connors' },
    { id: 1533, name: 'Andie MacDowell', characterName: 'Rita Hanson' },
    { id: 1534, name: 'Chris Elliott', characterName: 'Larry' },
    { id: 537, name: 'Stephen Tobolowsky', characterName: 'Ned Ryerson' },
    { id: 1535, name: 'Brian Doyle-Murray', characterName: 'Buster Green' },
    { id: 1536, name: 'Marita Geraghty', characterName: 'Nancy Taylor' },
    { id: 1537, name: 'Angela Paton', characterName: 'Mrs. Lancaster' },
    { id: 1538, name: 'Rick Ducommun', characterName: 'Gus' },
    { id: 1539, name: 'Rick Overton', characterName: 'Ralph' },
    { id: 1540, name: 'Robin Duke', characterName: 'Doris the Waitress' },
    { id: 1541, name: 'Carol Bivins', characterName: 'Anchorwoman' },
    { id: 1542, name: 'Willie Garson', characterName: "Phil's Assistant Kenny" },
    { id: 236327, name: 'Ken Hudson Campbell', characterName: 'Man in Hallway' },
    { id: 1318541, name: 'Les Podewell', characterName: 'Old Man' },
    { id: 1674112, name: 'Rod Sell', characterName: 'Groundhog Official' },
    { id: 86571, name: 'Tom Milanovich', characterName: 'State Trooper' },
    { id: 1659415, name: 'John M. Watson Sr.', characterName: 'Bartender' },
    { id: 36093, name: 'Peggy Roeder', characterName: 'Piano Teacher' },
    { id: 1524, name: 'Harold Ramis', characterName: 'Neurologist' },
    { id: 74487, name: 'David Pasquesi', characterName: 'Psychiatrist' },
    { id: 122238, name: 'Lee Sellars', characterName: 'Cop' },
    {
        id: 4353824,
        name: 'Chet Dubowski',
        characterName: 'Bank Guard Felix'
    },
    {
        id: 7690,
        name: 'C.O. Erickson',
        characterName: 'Bank Guard Herman'
    },
    {
        id: 1231189,
        name: 'Sandy Maschmeyer',
        characterName: "Phil's Movie Date"
    },
    {
        id: 4353827,
        name: "Leighanne O'Neil",
        characterName: 'Fan on Street'
    },
    {
        id: 4353829,
        name: 'Evangeline Binkley',
        characterName: 'Jeopardy! Viewer'
    },
    {
        id: 4353830,
        name: 'Samuel Mages',
        characterName: 'Jeopardy! Viewer'
    },
    { id: 4353831, name: 'Ben Zwick', characterName: 'Jeopardy! Viewer' },
    { id: 113919, name: 'Hynden Walch', characterName: 'Debbie' },
    { id: 335, name: 'Michael Shannon', characterName: 'Fred' },
    {
        id: 119229,
        name: 'Timothy Hendrickson',
        characterName: 'Waiter Bill'
    },
    {
        id: 1726420,
        name: 'Martha Webster',
        characterName: 'Waitress Alice'
    },
    { id: 592949, name: 'Angela Gollan', characterName: 'Piano Student' },
    {
        id: 4353837,
        name: 'Shaun Chaiyabhat',
        characterName: 'Boy in Tree'
    },
    { id: 1642306, name: 'Dianne B. Shaw', characterName: 'E.R. Nurse' },
    {
        id: 1178316,
        name: 'Barbara Ann Grimes',
        characterName: 'Flat Tire Lady'
    },
    { id: 4353840, name: 'Ann Heekin', characterName: 'Flat Tire Lady' },
    { id: 86565, name: 'Lucina Paquet', characterName: 'Flat Tire Lady' },
    {
        id: 223577,
        name: 'Brenda Pickleman',
        characterName: "Buster's Wife"
    },
    {
        id: 4353841,
        name: 'Amy Murdoch',
        characterName: "Buster's Daughter"
    },
    { id: 1228791, name: 'Eric Saiet', characterName: "Buster's Son" },
    {
        id: 2817429,
        name: 'Lindsay Albert',
        characterName: 'Woman with Cigarette'
    },
    { id: 4353845, name: 'Roger Adler', characterName: 'Guitar Player' },
    { id: 4353846, name: 'Ben A. Fish', characterName: 'Bass Player' },
    {
        id: 1548089,
        name: 'Don Riozz McNichols',
        characterName: 'Drum Player'
    },
    {
        id: 4353849,
        name: 'Brian Willig',
        characterName: 'Saxophone Player'
    },
    {
        id: 1775081,
        name: 'Richard Henzel',
        characterName: 'D.J. (voice)'
    },
    { id: 1173804, name: 'Rob Riley', characterName: 'D.J. (voice)' },
    {
        id: 103243,
        name: 'Tony DeGuide',
        characterName: 'Reporter (uncredited)'
    },
    {
        id: 14784,
        name: 'Reni Santoni',
        characterName: 'State Trooper (voice) (uncredited)'
    }
];



describe('MovieActorStore', () => {

    describe('getMovieByTitle', () => {
        it('should return the groundhog-day response when getting my its title', async () => {
            const movieStore = MovieActorStore.init();
            const response = await movieStore.getMovieByTitle('Groundhog Day');
            expect(response).toEqual(groundhogResponse);
        });
        it('should throw an error if it cannot find the movie', async () => {
            const movieStore = MovieActorStore.init();
            await expect(movieStore.getMovieByTitle('*(@$&@$&)EU)&)DXSEU)@')).rejects.toThrow('no movie found');
        });
    });

    describe('getCastByMovieId', () => {

        it('should return the cast of groundhog day', async () => {
            const movieStore = MovieActorStore.init();
            const response = await movieStore.getCastByMovieId(137);
            expect(response).toEqual(groundhogCast);
        });

        it('should throw an error if it cannot find the movie', async () => {
            const movieStore = MovieActorStore.init();
            await expect(movieStore.getCastByMovieId(99999999999)).rejects.toThrow('invalid movie ID');
        });
    });


    describe('getMoviesByActorId', () => {
        it('should log to console', async () => {
            const movieStore = MovieActorStore.init();
            const response = await movieStore.getMoviesByActorId(1532);
            expect(response.some((movie) => movie.title === 'Lost in Translation')).toBe(true);
            expect(response.some((movie) => movie.title === 'Broken Flowers')).toBe(true);
        });
    });
});

