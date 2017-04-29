'use strict';
angular.module('ExperimentApp')

.constant('QUESTIONS', {
    NL: {
        title: 'Vragenlijst over muziek- en taalachtergrond',
        subtitle: 'Na deze vragenlijst zie je hoe goed je de test hebt gedaan!',
        title_music: 'Muziek Achtergrond',
        birthdate: '1) Geboortedatum (dd-mm-jjjj)',
        sex: '2) Geslacht',
        education: '3) Hoogst afgeronde opleiding:',
        musiclessons: '4) Heeft u muzieklessen gevolgd?',
        yearsofmusiclessons: '5) Zoja, hoeveel jaren les heeft u gehad?',
        ageofmusiclessonsstart: '6) Zoja, hoe oud was u toen u deze lessen heeft gehad?',
        playmusicalinstrumentyesno: '7) Bespeelt u een muziekinstrument?',
        whichmusicalinstrument: '8) Zoja, welke?',
        followdancelessonsyesno: '9) Heeft u danslessen gevolgd?',
        yearsofdancelessons: '10) Zoja, hoeveel jaren les heeft u gehad?',
        hoursperdaymusiclistening: '11) Hoeveel uren luistert u gemiddeld per dag naar muziek?',
        favoritemusicalgenre: '12) Welke muziekgenre luistert u graag?',
        title_language: 'Taal Achtergrond',
        nativelanguage: '1) Wat is uw moedertaal?',
        otherfluentlanguage: '2) Welke andere taal spreekt u vloeind naast uw moedertaal?',
        skilllevelotherfluentlanguage: '3) Hoe goed is uw vaardigheid in deze andere taal (talen) in vergelijking met je moedertaal?',
        skilllevelotherfluentlanguageAnswers: [
            {
                value: '10',
                answer: '10: Net zo goed als mijn moedertaal',
            },
            {
                value: '9',
                answer: '9: Bijna net zo goed als mijn moedertaal',
            },
            {
                value: '8',
                answer: '8: Heel goed, maar minder goed dan mijn moedertaal',
            },
            {
                value: '7',
                answer: '7: Vrij goed',
            },
            {
                value: '6',
                answer: '6: Gemiddeld niveau',
            },
            {
                value: '5',
                answer: '5: Gemiddeld niveau',
            },
            {
                value: '4',
                answer: '4: Beginnersniveau',
            },
            {
                value: '3',
                answer: '3: Beginnersniveau',
            },
            {
                value: '2',
                answer: '2: Rudimentair',
            },
            {
                value: '1',
                answer: '1: Rudimentair'
            }
        ],
        ageotherfluentlanguage: '4)	Hoe oud was u toen u deze andere taal (talen) geleerd heeft?',
        howoftenperweekusingnativelanguage: '5)	Hoe vaak per week gebruikt u uw moedertaal?',
        howoftenperweekusingotherfluentlanguage: '6) Hoe vaak per week gebruikt u deze andere taal (talen)?',
        gotoresults: 'Ga naar de resultaten'
    },
    TR: {

    },
    EN: {

    }
})