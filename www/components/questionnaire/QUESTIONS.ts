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
        title: 'Müzik ve Dil Geçmişi Anketi',
        subtitle: 'Bu anketi tamamladıktan sonra testteki performansınızı görebilirsiniz.',
        title_music: 'Müzik geçmişi',
        birthdate: '1) Doğum tarihi (Gün-ay-yıl)',
        sex: '2) Cinsiyet',
        education: '3) Tamamlanmış en yüksek eğitim seviyesi:',
        musiclessons: '4) Daha önce müzik dersi aldınız mı?',
        yearsofmusiclessons: '5) Eğer daha önce müzik dersi aldıysanız, kaç yıl ders aldınız?',
        ageofmusiclessonsstart: '6) Eğer daha önce müzik dersi aldıysanız, bu dersi alırken kaç yaşındaydınız?',
        playmusicalinstrumentyesno: '7) Bir müzik aleti çalıyor musunuz?',
        whichmusicalinstrument: '8) Eğer bir önceki soruya yanıtınız evet ise, hangi müzik aletini çalıyorsunuz?',
        followdancelessonsyesno: '9) Daha önce dans dersi aldınız mı?',
        yearsofdancelessons: '10) Eğer daha önce dans dersi aldıysanız, kaç yıl ders aldınız?',
        hoursperdaymusiclistening: '11) Ortalama olarak bir günde kaç saat müzik dinliyorsunuz?',
        favoritemusicalgenre: '12) Hangi müzik türlerini dinlemekten hoşlanırsınız?',
        title_language: 'Dil anketi',
        nativelanguage: '1) Ana diliniz nedir?',
        otherfluentlanguage: '2) Ana diliniz dışında hangi dil(ler)i akıcı olarak konuşuyorsunuz?',
        skilllevelotherfluentlanguage: '3) Bu dil(ler)deki becerileriniz ana dilinizle kıyaslandığında nasıldır?',
        skilllevelotherfluentlanguageAnswers: [
            {
                value: '10',
                answer: '10: Ana dilim kadar iyi',
            },
            {
                value: '9',
                answer: '9: Neredeyse ana dilim kadar iyi',
            },
            {
                value: '8',
                answer: '8: Çok iyi, ancak ana dilim kadar iyi değil',
            },
            {
                value: '7',
                answer: '7: Oldukça iyi',
            },
            {
                value: '6',
                answer: '6: Ortalama',
            },
            {
                value: '5',
                answer: '5: Ortalama',
            },
            {
                value: '4',
                answer: '4: Başlangıç seviyesinde',
            },
            {
                value: '3',
                answer: '3: Başlangıç seviyesinde',
            },
            {
                value: '2',
                answer: '2: Temel seviyede',
            },
            {
                value: '1',
                answer: '1: Temel seviyede'
            }
        ],
        ageotherfluentlanguage: '4)	İkinci dilinizi öğrendiğinizde kaç yaşındaydınız?',
        howoftenperweekusingnativelanguage: '5)	Bir hafta içinde ana dilinizi ne sıklıkta kullanıyorsunuz?',
        howoftenperweekusingotherfluentlanguage: '6) İkinci dilinizi bir hafta içinde ne sıklıkta kullanıyorsunuz?',
        gotoresults: 'Sonuçlara gidin'
    },
    EN: {

    }
})