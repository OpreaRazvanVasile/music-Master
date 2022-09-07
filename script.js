"use strict"

const gameDataPop = [

    {
        link: `pop/3 Sud Est - ValuriP.mp3`,
        a: `3 Sud Est-Valuri`,
        b: `3 Sud Est-Amintirile`,
        c: `O-Zone-Dragostea din tei`,
        d: `3 Sud Est-Ochii Tai`,
        correct: `a`,
    },
    {
        link: `pop/alan walker-faded p.mp3 `,
        a: `AVB-Faded`,
        b: `Alan Walker-Beautiful`,
        c: `Tiesto-Just Be`,
        d: `Alan Walker-Faded`,
        correct: `d`,
    },
    {
        link: `pop/Alesso_-_Words_Feat_Zara_Larsson_(.mp3`,
        a: `Alesso&Zara Larsson-Words`,
        b: `AVB&Zara Larsson-Words`,
        c: `Tiesto&Zara Larsson-Words`,
        d: `Alesso-Words`,
        correct: `a`,
    },
    {
        link: `pop/Alexandra_Stan_-_Mr_Saxobeat.mp3`,
        a: `Alexandra Stan-Mr`,
        b: `Alexandra Stan-Mr.SaxoBeat`,
        c: `Delia-Mr`,
        d: `Alexandra Stan-Limonade`,
        correct: `b`,
    },
    {
        link: `pop/Alina Eremia - Cum se face.mp3`,
        a: `Andra-Pas Cu Pas`,
        b: `Andra-Cum Se Face`,
        c: `Alina Eremia-Cum Se Face`,
        d: `Delia-Pas Cu Pas`,
        correct: `c`,
    },
    {
        link: `pop/Alina_Eremia_x_Connect-R_-_Supertar_.mp3`,
        a: `Alina.Eremia&Connect-R-Superstar`,
        b: `Connect-R-Superstar`,
        c: `Alina.Eremia-Superstar`,
        d: `Delia&Connect-R-Superstar`,
        correct: `a`,
    },
    {
        link: `pop/AMI - Playa En Costa Rica .mp3`,
        a: `Ami-Playa`,
        b: `Ami-Playa En Maldive`,
        c: `Ami-Playa En Costa Rica`,
        d: `Ami-Playa Del Corasson`,
        correct: `c`,
    },
    {
        link: `pop/AMI- Dulce Simfonie.mp3`,
        a: `Ami-Dulce Simfonie`,
        b: `Ami-Dulce Sinfonie`,
        c: `Antonia-Dulce Simfonie`,
        d: `Alexandra Stan-Dulce Simfonie`,
        correct: `a`,
    },
    {
        link: `pop/AMI feat. Tata Vlad - Enigma.mp3`,
        a: `Ami-Enigma`,
        b: `Ami-Dulce Simfonie`,
        c: `Ami&Tata.Vlad-Enigma`,
        d: `Ami&Tata.Vlad-Cum Se Face`,
        correct: `c`,
    },
    {
        link: `pop/AMi-TE ASTEPT DISEARA.mp3`,
        a: `Ami-Te Astept`,
        b: `Ami-Dulce Simfonie`,
        c: `Delia Matache-Te Astept`,
        d: `Ami-Te Astept Diseara`,
        correct: `d`,
    },
    {
        link: `pop/Ami-tranvai.mp3`,
        a: `Ami-Tranvai`,
        b: `Ami-Te Astept Diseara`,
        c: `Ami-In Tranvai`,
        d: `Ami-Te Astept`,
        correct: `a`,
    },
    {
        link: `pop/andia_sfarsitul_lumii p.mp3`,
        a: `Andia-Sfaritul Lumii`,
        b: `Irina Rimes-Noi Doi`,
        c: `Ami-Te Astept`,
        d: `Ami-The End`,
        correct: `a`,
    },
    {
        link: `pop/Andia_x_Guess_Who_-_Pietre_pretioas.mp3`,
        a: `Adina&GuessWho-Pietre Pretioase`,
        b: `Andia-Pietre Pretioase`,
        c: `GuessWho-Pietre Pretioase`,
        d: `Ami&GuessWho-Pietre Pretioase`,
        correct: `a`,
    },
    {
        link: `pop/Andra_-_Inevitabil_va_fi_bine_O.mp3`,
        a: `Delia-Bine`,
        b: `Andra-Pas Cu Pas`,
        c: `Andra-Inevitabil Va Fi Bine`,
        d: `Antonia-Jamalia`,
        correct: `c`,
    },
    {
        link: `pop/andra_pas_cu_pasP.mp3`,
        a: `Andra-Ochii Caprui`,
        b: `Antonia-Iubirea Mea`,
        c: `Andra-Cu Pasi`,
        d: `Andra-Pas Cu Pas`,
        correct: `d`,
    },
    {
        link: `pop/Antonia - I Think I Love Him (Kean Dysso Remix).mp3`,
        a: `Antonia-I Think I Love Him`,
        b: `Alexandra Stan-I Think I Love Him`,
        c: `Delia Matache-I Think I Love Him`,
        d: `Antonia-I Think I Love Him Remix`,
        correct: `d`,
    },
    {
        link: `pop/ANTONIA - Iubirea Mea.mp3`,
        a: `Antonia-Iubirea Mea`,
        b: `Irina Rimies-Iubirea Mea`,
        c: `Raluka-Iubirea`,
        d: `Dua Lipa-My Love`,
        correct: `a`,
    },
    {
        link: `pop/ANTONIA_-_I_Think_I_Love_Him_(.mp3`,
        a: `Antonia-I Think I Love Him`,
        b: `Alexandra Stan-I Think I Love Him`,
        c: `Delia Matache-I Think I Love Him`,
        d: `Antonia-I Think I Love Him Remix`,
        correct: `a`,
    },
    {
        link: `pop/Antonia_-_Jameia.mp3`,
        a: `Antonia-Jamila`,
        b: `Antonia-Jamalia`,
        c: `Antonia-Jameia`,
        d: `Antonia-Jamallia`,
        correct: `c`,
    },
    {
        link: `pop/Ariana_Grande_-_Break_Free_ft_Zedd_.mp3`,
        a: `Ariana Grande&Zedd-Break Free`,
        b: `Dua Lipa-Break My Heart`,
        c: `Dua Lipa-Love Again`,
        d: `Ariana Grande-Side By Side`,
        correct: `a`,
    },
    {
        link: `pop/Black_Eyed_Peas_Nicky_Jam_Tyga.mp3`,
        a: `Black Eyed Peas-My Humps`,
        b: `Tayga-Taste`,
        c: `Black Eyed Peas-Vida Loca`,
        d: `Black Eyed Peas-Loca`,
        correct: `c`,
    },
    {
        link: `pop/Cabron_-_Iarna_pe_val.mp3`,
        a: `Cabron-Iarna Pe Val`,
        b: `Smiley-Irna Pe Val`,
        c: `Carbon-Nu astept Sezonu Estival`,
        d: `Cabron-Vara Nu Dorm`,
        correct: `a`,
    },
    {
        link: `pop/Connect-R_-_Vara_Nu_Dorm_O.mp3`,
        a: `Connect-R-Pe Plaja Ma Plimb`,
        b: `Connect-R-Zori Zilei Ma Prind`,
        c: `Connect-R-Vara Nu Dorm`,
        d: `Connect-R-Vara Nu Am Somn`,
        correct: `c`,
    },
    {
        link: `pop/David_Guetta_Bebe_Rexha_J_Balvin_(.mp3`,
        a: `David Guetta&J.Blavin-Say My Name`,
        b: `J.Blavin-Say My Name`,
        c: `David Guetta-Say My Name`,
        d: `David Guetta-Titanium`,
        correct: `a`,
    },
    {
        link: `pop/david_guetta_sia_flames_P.mp3`,
        a: `Sia-Flames`,
        b: `DavidGuetta&Sia-Flames`,
        c: `Sia-Chandelier `,
        d: `Sia-Unstoppable`,
        correct: `b`,
    },
    {
        link: `pop/david_guetta_titanium_.mp3`,
        a: `DavidGuetta&Sia-Flames`,
        b: `DavidGuetta&Sia-Titanium`,
        c: `DavidGuetta&Sia-She Wolf`,
        d: `DavidGuetta-Titanium`,
        correct: `b`,
    },
    {
        link: `pop/dE UNDE VI LA ORA ASTA.mp3`,
        a: `Smiley-De Unde Vi La Ora Asta?`,
        b: `Smiley-Plec Pe Marte`,
        c: `Smiley-Rita`,
        d: `Smiley-Pe Unde Ai Fost?`,
        correct: `a`,
    },
    {
        link: `pop/Delia & Macanache - Ramai cu bine .mp3`,
        a: `Delia-Ramai Cu Bine`,
        b: `Delia-Ramai Cu Mata`,
        c: `Delia&Macanache-Ramai Cu Bine`,
        d: `Delia-Ramai`,
        correct: `c`,
    },
    {
        link: `pop/Delia_-_ntre_Noi_.mp3`,
        a: `Delia-Noi`,
        b: `Andra-Iubirea Mea`,
        c: `Delia-Intre Noi`,
        d: `Antonia-Intre Noi`,
        correct: `c`,
    },
    {
        link: `pop/Delia-1234.mp3`,
        a: `Delia-Fara Tine`,
        b: `Antonia-Dragostea`,
        c: `Andrea Antonecu-Daca dragoste Nu e`,
        d: `Delia-1234`,
        correct: `d`,
    },

    {
        link: `pop/DJ PROJECT feat. AMI - 4 Camere.mp3`,
        a: `Dj Project&Ami-4Camere`,
        b: `DJ Project&Ami-Camere Ale Inimi`,
        c: `Dj Project&Roxen-Parte Din Tine`,
        d: `Dj Project&Andia-Slabiciuni`,
        correct: `a`,
    },

    {
        link: `pop/DJ Project feat. Giulia - Nu .mp3`,
        a: `Dj Project&Ema-La Timpul Lor`,
        b: `Dj Project&Giulia-NU`,
        c: `Dj Project&Roxen-Parte Din Tine`,
        d: `Dj Project&Andia-Slabiciuni`,
        correct: `b`,
    },
    {
        link: `pop/DJ Project x Roxen - Parte Din Tine _ .mp3`,
        a: `Dj Project&Ema-La Timpul Lor`,
        b: `Dj Project&Giulia-Timul`,
        c: `Dj Project&Roxen-Parte Din Tine`,
        d: `Dj Project&Andia-Slabiciuni`,
        correct: `c`,
    },
    {
        link: `pop/Dj Sava feat. Raluka - Aroma (special guest Connect R) .mp3`,
        a: `DjSava&Raluka-Aroma`,
        b: `DJProject&Raluka-Aroma`,
        c: `DjSava&Adela-Aroma`,
        d: `Raluka-Aroma`,
        correct: `a`,
    },
    {
        link: `pop/dj_project_feat_adela_fara_tine.mp3`,
        a: `Dj Project&Ema-La Timpul Lor`,
        b: `Dj Project&Giulia-Timul`,
        c: `Dj Project&Adela-Fara Tine`,
        d: `Dj Project&Andia-Slabiciuni`,
        correct: `c`,
    },
    {
        link: `pop/DJ_Project_feat_Andia_-_Slabiciuni_.mp3`,
        a: `Dj Project&Ema-La Timpul Lor`,
        b: `Dj Project&Giulia-Timul`,
        c: `Dj Project-La Timpul Lor`,
        d: `Dj Project&Andia-Slabiciuni`,
        correct: `d`,
    },
    {
        link: `pop/dj_project_feat_emaa_la_timpul_lorP.mp3`,
        a: `Dj Project&Ema-La Timpul Lor`,
        b: `Dj Project&Giulia-Timul`,
        c: `Dj Project-La Timpul Lor`,
        d: `Dj Project&Andia-Timpul`,
        correct: `a`,
    },
    {
        link: `pop/Dua Lipa - Break My Heart .mp3`,
        a: `Dua Lipa-Love Again`,
        b: `Dua Lipa-Levitating Featuring DaBaby `,
        c: `Dua Lipa-Physical `,
        d: `Dua Lipa-Break My Heart`,
        correct: `d`,
    },
    {
        link: `pop/Dua Lipa - Levitating Featuring DaBaby .mp3`,
        a: `Dua Lipa-Love Again`,
        b: `Dua Lipa-Levitating Featuring DaBaby `,
        c: `Dua Lipa-Physical `,
        d: `Dua Lipa - Break My Heart`,
        correct: `b`,
    },
    {
        link: `pop/Dua Lipa - Love Again .mp3`,
        a: `Dua Lipa-Love Again`,
        b: `Dua Lipa-Levitating Featuring DaBaby `,
        c: `Dua Lipa-Physical `,
        d: `Dua Lipa - Break My Heart`,
        correct: `a`,
    },
    {
        link: `pop/Dua Lipa - New Rules .mp3`,
        a: `Dua Lipa-Love Again`,
        b: `Dua Lipa-Levitating Featuring DaBaby `,
        c: `Dua Lipa-New Rules `,
        d: `Dua Lipa-Break My Heart`,
        correct: `c`,
    },
    {
        link: `pop/Dua_Lipa_-_Physical_.mp3`,
        a: `Dua Lipa-Love Again`,
        b: `Dua Lipa-Levitating Featuring DaBaby `,
        c: `Dua Lipa-Physical `,
        d: `Dua Lipa - Break My Heart`,
        correct: `c`,
    },
    {
        link: `pop/Ed Sheeran - Shivers .mp3`,
        a: `Ed Sheeran-Shape of You`,
        b: `Ed Sheeran-Perfect`,
        c: `Ed Sheeran-Shivers`,
        d: `Ed Sheeran-Bad Habits`,
        correct: `c`,
    },
    {
        link: `pop/Ed_Sheeran_-_Bad_Habits_O.mp3`,
        a: `Ed Sheeran-Shape of You`,
        b: `Ed Sheeran-Perfect`,
        c: `Ed Sheeran-Shivers`,
        d: `Ed Sheeran-Bad Habits`,
        correct: `d`,
    },
    {
        link: `pop/elena_feat_glance_ecou_.mp3`,
        a: `Antonia-Ecou`,
        b: `Elena&Glance-Ecou`,
        c: `Elena Georghe-OOO`,
        d: `Andra-Viata Mea`,
        correct: `b`,
    },
    {
        link: `pop/farruko_pepas_P.mp3`,
        a: `Farruko - Pepas`,
        b: `Farruko - My Lova`,
        c: `J Balvin-6 AM ft.Farruko`,
        d: `Farruko-Chillax`,
        correct: `a`,
    },
    {
        link: `pop/fluturi.mp3`,
        a: `AMI-Fluturi `,
        b: `AMI-Noaptea Vine`,
        c: `AMI-Dulce Simfonie`,
        d: `AMI-Albine`,
        correct: `a`,
    },
    {
        link: `pop/Fly Project - Get Wet .mp3`,
        a: ` Fly Project - Millerba`,
        b: `Fly Project-Toca Toca`,
        c: `Fly Project-Get Wet `,
        d: `Fly Project-Musica`,
        correct: `c`,
    },
    {
        link: `pop/giulia_un_om_cu_un_pianP.mp3`,
        a: `Giulia-Nu Sti Sa Iubesti`,
        b: `Giulia-Pianul`,
        c: `Giulia&DjProject-NU`,
        d: `Giulia-Om Cu un Pain`,
        correct: `d`,
    },
    {
        link: `pop/Good Ones (Joel Corry Remix).mp3`,
        a: `David Guetta-Titanium`,
        b: `Joel Corry Remix-Good Ones`,
        c: `David Guetta-Good Fealing`,
        d: `Black Eyed Peas-GoooD`,
        correct: `b`,
    },
    {
        link: `pop/Grasu_XXL_feat_AMI_-_Deja_Vu_.mp3`,
        a: `GrasuXXl&Ami-Deja Vu`,
        b: `Ami-Tranvai`,
        c: `GrasuXXl-Te Cunosc De Undeva`,
        d: `Ami-Te Cunoscu De Undeva`,
        correct: `a`,
    },
    {
        link: `pop/Imagine_Dragons_-_Believer_.mp3`,
        a: `Imagine Dragons-Bones`,
        b: `Imagine Dragons-Believer`,
        c: `Imagine Dragons-Radioactive`,
        d: `Imagine Dragons-Belie`,
        correct: `b`,
    },
    {
        link: `pop/Imagine_Dragons_-_Radioactive.mp3`,
        a: `Imagine Dragons-Bones`,
        b: `Imagine Dragons-Believer`,
        c: `Imagine Dragons-Radioactive`,
        d: `Imagine Dragons-Belie`,
        correct: `c`,
    },
    {
        link: `pop/INNA - Diggy Down .mp3`,
        a: `INNA-Not My Baby`,
        b: `INNA-Diggy Down `,
        c: `INNA-Ruleta`,
        d: `INNA-Heaven`,
        correct: `b`,
    },
    {
        link: `pop/INNA - Heaven (DJ Asher Remix).mp3`,
        a: `INNA-Not My Baby`,
        b: `INNAxVinka-Bebe `,
        c: `INNA-Ruleta`,
        d: `INNA-Heaven`,
        correct: `d`,
    },
    {
        link: `pop/INNA - Ruleta.mp3`,
        a: `INNA-Not My Baby`,
        b: `INNAxVinka-Bebe `,
        c: `INNA-Ruleta`,
        d: `INNA-Heaven`,
        correct: `c`,
    },
    {
        link: `pop/Inna My Beby.mp3`,
        a: `INNA-Not My Baby`,
        b: `INNAxVinka-Bebe `,
        c: `INNA-Ruleta`,
        d: `INNA-Heaven`,
        correct: `a`,
    },
    {
        link: `pop/Irina Rimes - N-avem timp Zven Remix Zeno Music..mp3`,
        a: `Andra-Inimia Imi Bate`,
        b: `Irina Rimes- N-avem timp`,
        c: `Antonia-Inima Imi Bate`,
        d: `Daniela Gyorfi-Inima `,
        correct: `b`,
    },
    {
        link: `pop/irina_rimes_ba_ba_ba.mp3`,
        a: `Andra-Inimia Imi Bate`,
        b: `Irina Rimes-Ba ba ba`,
        c: `Antonia-Inima Imi Bate`,
        d: `Daniela Gyorfi-Inima `,
        correct: `b`,
    },
    {
        link: `pop/Irina_Ross_-_Taragot.mp3`,
        a: `Nicolae Guta-Da Le Le`,
        b: `Irina Ross-Taragot`,
        c: `Irina Rimes-Taragot`,
        d: `Sandu Ciorba-Joaca Madra Me'`,
        correct: `b`,
    },
    {
        link: `pop/J_Balvin_-_6_AM_ft_Farruko_O.mp3`,
        a: `J.balvin&Farruko-6AM`,
        b: `Farruko-6AM`,
        c: `J.balvin-6AM`,
        d: `J.balvin&Farruko-4AM`,
        correct: `a`,

    },
    {
        link: `pop/J_Balvin_-_Ay_Vamos_.mp3`,
        a: `J.Balvin-Vamos`,
        b: `Farruko-Ay Mamy`,
        c: `J.Balvin-Vamonos`,
        d: `J.Balvin-Ay Vamos`,
        correct: `d`,

    },

    {
        link: `pop/jennifer_lopez_on_the_floor_ft_pitbulP.mp3`,
        a: `Madonna-On The Floor`,
        b: `Jennifer Lopez-Tonight`,
        c: `Jennifer Lopez-On The Floor`,
        d: `Jennifer Lopez-Na Na Na`,
        correct: `c`,

    },
    {
        link: `pop/Justin_Bieber_-_Intentions_O.mp3`,
        a: `Justin Bieber-Honest`,
        b: `Justin Bieber-Intentions`,
        c: `Justin Bieber-Peaches`,
        d: `Justin Bieber - Baby `,
        correct: `b`,

    },
    {
        link: `pop/Kygo_Tina_Turner_-_Whats_Love_Got_.mp3`,
        a: `Kygo&Tina Turner-What's Love`,
        b: `Kygo-What's Love`,
        c: `Tina Turner-Private Dancer `,
        d: `Tina Turner-Two People `,
        correct: `a`,

    },

    {
        link: `pop/lady_gaga_poker_face_P.mp3`,
        a: `Lady Gaga-Poker Face`,
        b: `Lady Gaga-Face Of Poker`,
        c: `Lady Gaga-Just Dance `,
        d: `Lady Gaga-Bad Romance`,
        correct: `a`,

    },
    {
        link: `pop/Lidia Buble - Sub apa .mp3`,
        a: `Lidia Buble-Le-am Spus Si Fetelor`,
        b: `Lora-Le-am Spus Si Fetelor`,
        c: `Lidia Buble-Sub Apa`,
        d: `Lora-Le-am Spus`,
        correct: `c`,

    },
    {
        link: `pop/Lidia Buble feat. Amira - Le-am spus si fetelo.mp3`,
        a: `Lidia Buble-Le-am Spus Si Fetelor`,
        b: `Lora-Le-am Spus Si Fetelor`,
        c: `Lidia Buble-Sub Apa`,
        d: `Lora-Le-am Spus`,
        correct: `a`,

    },
    {
        link: `pop/Luis_Fonsi_-_Despacito_ft_Daddy_Yanke.mp3`,
        a: `J.Balvin-DespaCito`,
        b: `Luis Gabriel-Despacito`,
        c: `Luis Fonsi-Despacito`,
        d: `Luis Fonsi-Échame La Culpa`,
        correct: `c`,

    },
    {
        link: `pop/matteo_gandesc_cu_voce_tare_P.mp3`,
        a: `Matteo-Gandesc Cu Voce Tare`,
        b: `Conect-R-Gnadesc Cu Voce Tare`,
        c: `Uddi-Buna,Marie`,
        d: `What's Up-Ma Gandesc`,
        correct: `a`,

    },
    {
        link: `pop/Miley Cyrus - Midnight Sky (.mp3`,
        a: `Miley Cyrus-Malibu `,
        b: `Miley Cyrus-Wrecking Bal`,
        c: `Miley Cyrus-Mother's Daughter `,
        d: `Miley Cyrus-Midnight Sky`,
        correct: `d`,

    },
    {
        link: `pop/Minelli Rampampam P.mp3`,
        a: `Minelli - Nothing Hurts `,
        b: `Minelli-Cofe`,
        c: `Minelli-MMM`,
        d: `Minelli - Rampampam`,
        correct: `d`,

    },
    {
        link: `pop/minelli_mmm_P.mp3`,
        a: `Minelli - Nothing Hurts `,
        b: `Minelli-Cofe`,
        c: `Minelli-MMM`,
        d: `Minelli - Rampampam`,
        correct: `c`,

    },
    {
        link: `pop/modern_talking_you_re_my_heart_you_re_my_soul_official_music_video_P.mp3`,
        a: `Modern Talking-You are My Heart`,
        b: `Modern Talking-Brother Louie`,
        c: `Modern Talking-Cheri Cheri Lady`,
        d: `Modern Talking-You Are`,
        correct: `a`,

    },
    {
        link: `pop/Nicole Cherry - Cuvintele tale.mp3`,
        a: `Nicole Cherry-Cuvintele tale `,
        b: `Nicole Cherry-Scrie-mi pe suflet`,
        c: `Nicole Cherry-Florile Tale`,
        d: `NICOLE CHERRY-Memories`,
        correct: `a`,

    },
    {
        link: `pop/Nicole Cherry - Florile Tale .mp3`,
        a: `Nicole Cherry-Cuvintele tale `,
        b: `Nicole Cherry-Scrie-mi pe suflet`,
        c: `Nicole Cherry-Florile Tale`,
        d: `NICOLE CHERRY-Memories`,
        correct: `c`,

    },
    {
        link: `pop/Nicole_Cherry_-_Scrie-mi_pe_suflet_.mp3`,
        a: `Nicole Cherry-Cuvintele tale `,
        b: `Nicole Cherry-Scrie-mi pe suflet`,
        c: `Nicole Cherry-Florile Tale`,
        d: `NICOLE CHERRY-Memories`,
        correct: `b`,

    },
    {
        link: `pop/Oana Radu - Au Ce Mi-ai Facut Tu Mie.mp3`,
        a: `Oana Radu-Au Ce Mi-ai Facut Tu Mie`,
        b: `Oana Radu-Au`,
        c: `Oana Radu-Ce Mi-Ai facut `,
        d: `Oana Radu-Iubirea mea`,
        correct: `a`,

    },
    {
        link: `pop/Alexandra Stan - I Think I Love It (Official Video - New Single 2019).mp3`,
        a: `Alexandra Stan-I Think I Love It `,
        b: `Antonia-I Think I Love It`,
        c: `Delia-I Think I Love It`,
        d: `Andra-I Think I Love It`,
        correct: `a`,

    },
    {
        link: `pop/Carla's Dreams - Te Rog .mp3`,
        a: `Carla's Dreams-Victima`,
        b: `Carla's Dreams-Te Rog`,
        c: `Carla's DreamsxEMAA-N-aud`,
        d: `Carla's Dreams-Acele`,
        correct: `b`,

    },
    {
        link: `pop/Carla's Dreams - Victima _ Official Video.mp3`,
        a: `Carla's Dreams-Victima`,
        b: `Carla's Dreams-Te Rog`,
        c: `Carla's DreamsxEMAA-N-aud`,
        d: `Carla's Dreams-Acele`,
        correct: `a`,

    },
    {
        link: `pop/Carla's Dreams x EMAA - N-aud .mp3`,
        a: `Carla's Dreams-Victima`,
        b: `Carla's Dreams-Te Rog`,
        c: `Carla's DreamsxEMAA-N-aud`,
        d: `Carla's Dreams-Acele`,
        correct: `c`,

    },
    {
        link: `pop/Doddy feat. @Oana Radu - Strig In Gura Mare.mp3`,
        a: `Oana Radu-Au Ce Mi-ai Facut Tu Mie `,
        b: `Oana Radu-Cand am o zi grea`,
        c: `Oana Radu-Tu`,
        d: `Oana Radu-Strig In Gura Mare`,
        correct: `d`,

    },
    {
        link: `pop/Xonia - I Want Cha ft. J. Balvin .mp3`,
        a: `Xonia&&J.Balvin - I Want Cha`,
        b: `Xonia-I Want Cha`,
        c: `J.Balvin - I Want Cha`,
        d: `Antonia&&J.Balvin - I Want Cha`,
        correct: `a`,

    },




]
const gameDataRap = [
    {
        link: `rap/50 Cent - Ayo Technology cut.mp3`,
        a: `50 Cent-Ayo`,
        b: `50 Cent-Ayo Technoology`,
        c: `Eminem-Lose`,
        d: `50 Cent-Ayo Technology`,
        correct: `d`,

    },
    {
        link: `rap/50 Cent - In Da Club .mp3`,
        a: `50 Cent-Ayo`,
        b: `25 Cent-In The Club`,
        c: `50 Cent-In Da Club`,
        d: `Eminem-Lose`,
        correct: `c`,

    },
    {
        link: `rap/50 Cent - Candy Shop cut.mp3`,
        a: `50 Cent-Many Men`,
        b: `Emienm-Candy Shop`,
        c: `50 Cent-Candy Shop`,
        d: `50 Cent - Window Shoppe`,
        correct: `c`,

    },
    {
        link: `rap/50 Cent - P.I.M.P. .mp3`,
        a: `50 Cent-Many Men`,
        b: `50 Cent-Candy Shop`,
        c: `50 Cent - P.I.M.P.`,
        d: `Emienm-Candy Shop`,
        correct: `c`,

    },
    {
        link: `rap/50 Cent and Eminem - You Don_'t Know.mp3`,
        a: `50 Cent and Eminem-You Don't Know`,
        b: `50 Cent-You Don't Know`,
        c: `50 Cent - P.I.M.P.`,
        d: `50 Cent-Many Men`,
        correct: `a`,

    },
    {
        link: `rap/Akon - Smack That feat Eminem.mp3`,
        a: `Akon - Smack That feat Eminem`,
        b: `Akon - Smack`,
        c: `Akon - Smack That`,
        d: `Eminem-Smack That`,
        correct: `a`,

    },
    {
        link: `rap/B.U.G. Mafia - Cine E Cu Noi (feat. Nico) .mp3`,
        a: `B.U.G. Mafia - Cine E Cu Noi`,
        b: `B.U.G. Mafia - Cine E Cu Noi (feat. Nico)`,
        c: `Paraziti-Cine E Cu Noi`,
        d: `B.U.G. Mafia - Cu Noi Cine e`,
        correct: `b`,

    },
    {
        link: `rap/B.U.G. Mafia - Romaneste.mp3`,
        a: `B.U.G. Mafia - Romaneste`,
        b: `B.U.G. Mafia - TU`,
        c: `B.U.G. Mafia-Romania`,
        d: `B.U.G. Mafia-Penitenciar`,
        correct: `a`,

    },
    {
        link: `rap/Chamillionaire - Ridin.mp3`,
        a: `Chamillionaire - Rider`,
        b: `Chamillionaire - Rid`,
        c: `Chamillionaire - Ride`,
        d: `Chamillionaire - Ridin`,
        correct: `d`,

    },
    {
        link: `rap/Cheloo -Lumea s-a schimbat .mp3`,
        a: `Parazitii - Lumea s-a schimbat`,
        b: `Cheloo -Lumea s-a schimbat`,
        c: `Cheloo -Baietii De Oras`,
        d: `Parazitii -Baietii De Oras`,
        correct: `b`,

    },
    {
        link: `rap/DOC - Multumesc .mp3`,
        a: `DOC - Treaba Mea`,
        b: `DOC - Praf`,
        c: `DOC - SUD`,
        d: `DOC - Multumesc`,
        correct: `d`,

    },
    {
        link: `rap/Don Omar - Bandolero .mp3`,
        a: `Don Omar - Bandolero`,
        b: `Don Omar - Danza Kuduro`,
        c: `Don Omar - Virtual Diva`,
        d: `Don Omar - Virtual `,
        correct: `a`,

    },
    {
        link: `rap/Dr. Dre - Kush ft. Snoop Dogg, .mp3`,
        a: `Dr. Dre - Kush`,
        b: `Dr. Dre - Kush ft. Snoop Dogg`,
        c: `Snoop Dogg- Kush`,
        d: `Dr. Dre - Still D.R.E.`,
        correct: `b`,

    },
    {
        link: `rap/Dr. Dre - Still D.R.E..mp3`,
        a: `Dr. Dre - Kush`,
        b: `Dr. Dre - Kush ft. Snoop Dogg`,
        c: `Snoop Dogg- Kush`,
        d: `Dr. Dre - Still D.R.E.`,
        correct: `d`,

    },
    {
        link: `rap/Dr. Dre - The Next Episode ( ft. Snoop Dogg, Kurupt, Nate Dogg .mp3`,
        a: `Dr. Dre - Kush`,
        b: `Dr. Dre - Kush ft. Snoop Dogg`,
        c: `Snoop Dogg- Kush`,
        d: `Dr. Dre - The Next Episode ft.Snoop Dogg`,
        correct: `d`,

    },
    {
        link: `rap/Eminem - Not Afraid.mp3`,
        a: `Eminem - Not Afraid `,
        b: `Eminem - Stan ft. Dido`,
        c: `Eminem - The Real Slim Shady`,
        d: `Eminem - Venom.`,
        correct: `a`,

    },
    {
        link: `rap/Eminem - Stan ft. Dido .mp3`,
        a: `Eminem - Not Afraid `,
        b: `Eminem - Stan ft. Dido`,
        c: `Eminem - The Real Slim Shady`,
        d: `Eminem - Venom.`,
        correct: `b`,

    },
    {
        link: `rap/Eminem - The Real Slim Shady.mp3`,
        a: `Eminem - Not Afraid `,
        b: `Eminem - Stan ft. Dido`,
        c: `Eminem - The Real Slim Shady`,
        d: `Eminem - Venom.`,
        correct: `c`,

    },
    {
        link: `rap/Eminem - Venom.mp3`,
        a: `Eminem - Not Afraid `,
        b: `Eminem - Stan ft. Dido`,
        c: `Eminem - The Real Slim Shady`,
        d: `Eminem - Venom.`,
        correct: `d`,

    },
    {
        link: `rap/Eminem - Without Me.mp3`,
        a: `Eminem - Not Afraid `,
        b: `Eminem - Stan ft. Dido`,
        c: `Eminem - The Real Slim Shady`,
        d: `Eminem - Without Me`,
        correct: `d`,

    },
    {
        link: `rap/Eminem & Snoop Dogg -From The D 2 The LBC.mp3`,
        a: `Eminem - Not Afraid `,
        b: `Eminem&Snoop Dogg -From TheD2TheLBC`,
        c: `Eminem - The Real Slim Shady`,
        d: `Eminem - Without Me`,
        correct: `b`,

    },
    {
        link: `rap/Eminem ft. Nate Dogg - Shake That.mp3`,
        a: `Eminem - Not Afraid `,
        b: `Eminem ft. Nate Dogg - Shake That`,
        c: `Eminem - The Real Slim Shady`,
        d: `Eminem - Without Me`,
        correct: `b`,

    },
    {
        link: `rap/Eminem -Lose Yourself .mp3`,
        a: `Eminem - Not Afraid `,
        b: `Eminem- Lose Yourself`,
        c: `Eminem - The Real Slim Shady`,
        d: `Eminem - Without Me`,
        correct: `b`,

    },
    {
        link: `rap/Grasu XXL - Turbofin.mp3`,
        a: `Grasu XXL - Turbofin`,
        b: `Grasu XXL- TurBo`,
        c: `Grasu - Turbofin`,
        d: `Bitza- Turbofin`,
        correct: `a`,

    },
    {
        link: `rap/Grasu XXL ft Florin Chirian-Dl Destin.mp3`,
        a: `Grasu-Destin`,
        b: `Grasu-Dl Destin`,
        c: `Grasu XXL ft Florin Chirian-Dl Destin`,
        d: `Grasu XXL-Dl Destin`,
        correct: `c`,

    },
    {
        link: `rap/Guess Who - Locul Potrivit .mp3`,
        a: `Guess Who - Locul`,
        b: `Guess Who- Unu`,
        c: `Guess Who - Locul Potrivit`,
        d: `Guess Who - Unu Altu`,
        correct: `c`,

    },
    {
        link: `rap/Guess Who - Unu Altu.mp3`,
        a: `Guess Who - Locul`,
        b: `Guess Who- Unu`,
        c: `Guess Who - Locul Potrivit`,
        d: `Guess Who - Unu Altu`,
        correct: `d`,

    },
    {
        link: `rap/La Familia - Tupeu de Borfas.mp3`,
        a: `La Familia - Tupeu de Borfas`,
        b: `La Familia -Tupeu`,
        c: `La Familia- Foame De Banii`,
        d: `La Fmilia - Salajan`,
        correct: `a`,

    },
    {
        link: `rap/Ludacris - Act A Fool.mp3`,
        a: `Ludacris-Act`,
        b: `Ludacris - Act Like a Fool`,
        c: `Ludacris - Act A Fool`,
        d: `Ludacris - Act A Fol`,
        correct: `c`,

    },
    {
        link: `rap/Mafia-40km.mp3`,
        a: `B.U.G. Mafia - Romaneste`,
        b: `B.U.G. Mafia - 40km`,
        c: `B.U.G. Mafia-Romania`,
        d: `B.U.G. Mafia-Penitenciar`,
        correct: `b`,

    },
    {
        link: `rap/Mafia-strazile.mp3`,
        a: `B.U.G. Mafia - Romaneste`,
        b: `B.U.G. Mafia - 40km`,
        c: `B.U.G. Mafia-Strazile`,
        d: `B.U.G. Mafia-Penitenciar`,
        correct: `c`,

    },
    {
        link: `rap/Mafia-viata noastra.mp3`,
        a: `B.U.G. Mafia - Romaneste`,
        b: `B.U.G. Mafia - Viata Noastra`,
        c: `B.U.G. Mafia-Strazile`,
        d: `B.U.G. Mafia-Penitenciar`,
        correct: `b`,

    },
    {
        link: `rap/Parazitii - Din coltul Blocului .mp3`,
        a: `Ombladon -Din coltul Blocului`,
        b: `Cheloo -Din coltul Blocului`,
        c: `Parazitii - Din coltul`,
        d: `Parazitii - Din coltul Blocului`,
        correct: `d`,

    },

    {
        link: `rap/Sisu Si Puya-Foame de Banii Sample.mp3`,
        a: `La Familia - Tupeu de Borfas`,
        b: `La Familia -Tupeu`,
        c: `Sisu Si Puya- Foame De Banii`,
        d: `La Fmilia - Salajan`,
        correct: `c`,

    },
    {
        link: `rap/Spike - ZEU.mp3`,
        a: `Spike-Manele`,
        b: `Spike-Minlionar`,
        c: `Spike-ZEU`,
        d: `Spike-Ziua Mea`,
        correct: `c`,

    },

    {
        link: `rap/SPiKE MANELE.mp3`,
        a: `Spike-Manele`,
        b: `Spike-Minlionar`,
        c: `Spike-ZEU`,
        d: `Spike-Ziua Mea`,
        correct: `a`,

    },
    {
        link: `rap/Vlad Dobrescu - Globul De Cristal.mp3`,
        a: `Vlad Dobrescu - Globul De Cristal`,
        b: `Vlad Dobrescu - Globul`,
        c: `Vlad Dobrescu - Cristalul`,
        d: `Doc-Globul De Cristal`,
        correct: `a`,

    },
    {
        link: `rap/Wiz Khalifa - See You Again ft. Charlie Puth .mp3`,
        a: `Wiz Khalifa - See You Again`,
        b: `Wiz Khalifa - We Dem Boyz`,
        c: `Wiz Khalifa - Black And Yellow`,
        d: `Wiz Khalifa - Roll Up`,
        correct: `a`,

    },
    {
        link: `rap/YNY Sebi - Abu Dhabi.mp3`,
        a: `YNY Sebi -Defecetul Meu`,
        b: `YNY Sebi -Defecetul`,
        c: `YNY Sebi - Abu Dhabi`,
        d: `YNY Sebi - Imi Fac Dansu`,
        correct: `c`,

    },
    {
        link: `rap/YNY Sebi - Defectul Meu.mp3`,
        a: `YNY Sebi -Defecetul Meu`,
        b: `YNY Sebi -Defecetul`,
        c: `YNY Sebi - Abu Dhabi`,
        d: `YNY Sebi - Imi Fac Dansu`,
        correct: `a`,

    },
    {
        link: `rap/Eminem - Fall..mp3`,
        a: `Eminem - Not Afraid `,
        b: `Eminem - Fall`,
        c: `Eminem - The Real Slim Shady`,
        d: `Eminem - Without Me`,
        correct: `b`,

    },
    {
        link: `rap/Eminem - When I'm Gone.mp3`,
        a: `Eminem - Not Afraid `,
        b: `Eminem - Fall`,
        c: `Eminem - When I'm Gone`,
        d: `Eminem - Without Me`,
        correct: `c`,

    },

    {
        link: `rap/Grasu XXL - _LaLa Song_.mp3`,
        a: `Grasu XXL-LaLa Song`,
        b: `Grasu-LaLa Song`,
        c: `Grasu - Turbofin`,
        d: `Bitza- Turbofin`,
        correct: `a`,

    },

    {
        link: `rap/Mike WiLL Made-It - 23 ft. Miley Cyrus, Wiz Khalifa, Juicy J.mp3`,
        a: `Miley Cyrus&&Wiz Khalia-23`,
        b: `Miley Cyrus-Wrecking Bal`,
        c: `Miley Cyrus-Mother's Daughter `,
        d: `Miley Cyrus-Midnight Sky`,
        correct: `a`,

    },

    {
        link: `rap/Ombladon feat Raku - Egali din nastere.mp3`,
        a: `Parazitii-Egali din nastere`,
        b: `Ombladon&Raku-Egali din nastere`,
        c: `Cheloo&Raku-Egali din nastere`,
        d: `B.U.G MAFIA-Egali din nastere`,
        correct: `b`,

    },

    {
        link: `rap/TROLLZ - 6ix9ine & Nicki Minaj  .mp3`,
        a: `6ix9ine & Nicki Minaj-TROLLZ`,
        b: `6ix9ine & Nicki Minaj-TROL`,
        c: `6ix9ine-TROLLZ`,
        d: `Nicki Minaj-TROLLZ`,
        correct: `a`,

    },

    {
        link: `rap/Tyga - Taste.mp3`,
        a: `Tyga-Switch Lanes `,
        b: `Tyga-Ibiza`,
        c: `Tyga-Ayy Macarena`,
        d: `Tyga-Taste`,
        correct: `d`,

    },
    // {
    //     link: `rap/`,
    //     a: ``,
    //     b: ``,
    //     c: ``,
    //     d: ``,
    //     correct: `a`,

    // },





]
const gameDatapopAndRap = [...gameDataPop, ...gameDataRap]

const gameDataOldschool = [
    {
        link: `old/3rei Sud Est - Amintirile.mp3`,
        a: `3 sud est-te plac`,
        b: `3 sud est-aminitirile`,
        c: `3 sud est-3 sud est`,
        d: `3 sud est-te plac`,
        correct: `b`,

    },
    {
        link: `old/3rei Sud Est - Cand soarele rasare.mp3`,
        a: `3 sud est-te plac`,
        b: `3 sud est-aminitirile`,
        c: `3 sud est-3 sud est`,
        d: `3 sud est-Cand sorele rasare`,
        correct: `d`,

    },
    {
        link: `old/3rei Sud Est - Iubire (Official Video) .mp3`,
        a: `3 sud est-te plac`,
        b: `3 sud est-iubire`,
        c: `3 sud est-3 sud est`,
        d: `3 sud est-Cand sorele rasare`,
        correct: `b`,

    },
    {
        link: `old/3rei Sud Est - Iubire .mp3`,
        a: `3 sud est-te plac`,
        b: `3 sud est-iubire`,
        c: `3 sud est-3 sud est`,
        d: `3 sud est-Cand sorele rasare`,
        correct: `b`,

    },
    {
        link: `old/3rei Sud Est - Te voi pierde .mp3`,
        a: `3 sud est-te voi pierde`,
        b: `3 sud est-iubire`,
        c: `3 sud est-3 sud est`,
        d: `3 sud est-Cand sorele rasare`,
        correct: `a`,

    },
    {
        link: `old/Abba - Chiquitita.mp3`,
        a: `Abba - Mamma Mia`,
        b: `Abba - Dancing Queen`,
        c: `Abba-Chiquitita`,
        d: `ABBA - Gimme!`,
        correct: `a`,

    },
    {
        link: `old/Abba - Dancing Queen.mp3`,
        a: `Abba - Mamma Mia`,
        b: `Abba - Dancing Queen`,
        c: `Abba-Chiquitita`,
        d: `ABBA - Gimme!`,
        correct: `b`,

    },
    {
        link: `old/Abba - Mamma Mia.mp3`,
        a: `Abba - Mamma Mia`,
        b: `Abba - Dancing Queen`,
        c: `Abba-Chiquitita`,
        d: `ABBA - Gimme!`,
        correct: `a`,

    },
    {
        link: `old/Ace of Base - All That She Wants .mp3`,
        a: `Ace of Base-All that you wan't`,
        b: `Abba-Chiquitita`,
        c: `ABBA - Gimme!`,
        d: `Ace of Base-All That She Wants`,
        correct: `d`,

    },
    {
        link: `old/Andra - In Noapte Ma Trezesc .mp3`,
        a: `Andra-Luna de pe cer`,
        b: `Andra-In Noapte Ma Trezesc`,
        c: `Andra-vreau sarutarea ta`,
        d: `Andra-as vrea`,
        correct: `b`,

    },
    {
        link: `old/Andra feat. Tiger 1 - Vreau sarutarea ta.mp3`,
        a: `Andra-Luna de pe cer`,
        b: `Andra-In Noapte Ma Trezesc`,
        c: `Andra-vreau sarutarea ta`,
        d: `Andra-as vrea`,
        correct: `c`,

    },
    {
        link: `old/Andre - Caravanele .mp3`,
        a: `Andre-Caravanele`,
        b: `Andre-Lasa-ma papa la mare .`,
        c: `Andre-Noapte De Vis.`,
        d: `Andre-Mos Craciun`,
        correct: `a`,

    },
    {
        link: `old/Angels - Asa's baietii.mp3`,
        a: `Andre-Caravanele`,
        b: `Angels-Asa is baietii`,
        c: `Andre-Noapte De Vis`,
        d: `Andre-Mos Craciun`,
        correct: `b`,

    },
    {
        link: `old/Blondy - Indragostiti .mp3`,
        a: `Blondy-Numele tau`,
        b: `Blondy-Te-am iubit`,
        c: `Blondy-Indragostiti`,
        d: `Blondy-Ailae`,
        correct: `c`,

    },
    {
        link: `old/Britney Spears - Oops!I Did It Again.mp3`,
        a: `Britney Spears-Toxic `,
        b: `Britney Spears-Baby One More Time`,
        c: `Britney Spears-Oops!`,
        d: `Britney Spears-Everytime`,
        correct: `c`,

    },
    {
        link: `old/Ca$$a Loco - Eterna si fascinanta Romanie.mp3`,
        a: `Cassa Loco-Eterna si fascinanta Romanie.`,
        b: `Cassa Loco-Goanga`,
        c: `Cassa Loco-La Mall`,
        d: `Cassa Loco-Romania Bogata`,
        correct: `a`,

    },
    {
        link: `old/Delia - Parfum de fericire.mp3`,
        a: `Delia-As vrea sa-mi dai`,
        b: `Andra-As vrea`,
        c: `Antonia-Parfum de fericire`,
        d: `Delia-Parfum de fericire`,
        correct: `d`,

    },
    {
        link: `old/Elvis - Blue Suede Shoes .mp3`,
        a: `Elvis-Blue Suede Shoes`,
        b: `Elvis-Blue`,
        c: `Elvis-Shoes`,
        d: `Elvis-If I Can Dream.`,
        correct: `a`,

    },
    {
        link: `old/Elvis Presley - If I Can Dream.mp3`,
        a: `Elvis-Blue Suede Shoes`,
        b: `Elvis-Blue`,
        c: `Elvis-Shoes`,
        d: `Elvis-If I Can Dream.`,
        correct: `d`,

    },
    {
        link: `old/Fizz-daca nu fizz atunci cine.mp3`,
        a: `Fizz-Esti fitioasa`,
        b: `Fizz-daca nu fizz atunci cine`,
        c: `Fizz-daca nu eu atunci cine`,
        d: `Fizz-Apasa Pedala`,
        correct: `b`,

    },
    {
        link: `old/Freddie Mercury - Living On My Own.mp3`,
        a: `Freddie Mercury-Blue Suede Shoes`,
        b: `Elvis-Blue Suede Shoes`,
        c: `Elvis-Shoes`,
        d: `Freddie Mercury-Living On My Own`,
        correct: `d`,

    },
    {
        link: `old/Hall & Oates  - Out of Touch.mp3`,
        a: `Hall & Oates - Maneater`,
        b: `Hall & Oates-Out of Love`,
        c: `Hall & Oates-Out of Touch`,
        d: `Hall & Oates - I Can't Go For That`,
        correct: `c`,

    },
    {
        link: `old/Hi-Q - Un minut .mp3`,
        a: `Hi-Q-Razna`,
        b: `Hi-Q-O ora`,
        c: `Hi-Q-O secunda`,
        d: `Hi-Q-Un minut`,
        correct: `d`,

    },
    {
        link: `old/INXS - Kiss The Dirt.mp3`,
        a: `INXS - Never Tear Us Apart`,
        b: `INXS - Mystify`,
        c: `INXS-Kiss The Dirt`,
        d: `INXS - New Sensation`,
        correct: `c`,

    }, {
        link: `old/Jessica Jay - Casablanca .mp3`,
        a: `Jessica Jay-Casablanca`,
        b: `Jessica Jay-Na Na Na`,
        c: `JESSICA JAY-BROKEN HEARTED WOMAN`,
        d: `Jessica Jay - Chilly Cha Cha`,
        correct: `a`,

    },
    {
        link: `old/L.A. - Ochii tai.mp3`,
        a: `L.A.-Niciodata`,
        b: `L.A.-Imi Amintesc`,
        c: `L.A.-Ochii tai`,
        d: `Liviu Varciu-Ochii Tai`,
        correct: `c`,

    },
    {
        link: `old/Laura Branigan - Self Control.mp3`,
        a: `Laura Branigan-Self Control`,
        b: `Laura Branigan-Gloria`,
        c: `Laura Branigan-The Power of Love`,
        d: `Laura Branigan-Shattered Glass`,
        correct: `a`,

    },
    {
        link: `old/Michael Jackson - Beat It.mp3`,
        a: `Michael Jackson-Earth Song`,
        b: `Michael Jackson-Billie Jean .`,
        c: `Michael Jackson-Beat It`,
        d: `Michael Jackson-Dirty Diana`,
        correct: `c`,

    },
    {
        link: `old/Michael Jackson - Dirty Diana.mp3`,
        a: `Michael Jackson-Earth Song`,
        b: `Michael Jackson-Billie Jean .`,
        c: `Michael Jackson-Beat It`,
        d: `Michael Jackson-Dirty Diana`,
        correct: `d`,

    },
    {
        link: `old/Michael Jackson - Earth Song.mp3`,
        a: `Michael Jackson-Earth Song`,
        b: `Michael Jackson-Billie Jean`,
        c: `Michael Jackson-Beat It`,
        d: `Michael Jackson-Dirty Diana`,
        correct: `a`,

    },

    {
        link: `old/Modern Talking - Brother Louie.mp3`,
        a: `Modern Talking-Brother Louie`,
        b: `Modern Talking-Cheri Cheri Lady`,
        c: `Modern Talking - Geronimo's Cadillac `,
        d: `Modern Talking - You're My Heart`,
        correct: `a`,

    },
    {
        link: `old/Modern Talking - Cheri Cheri Lady .mp3`,
        a: `Modern Talking-Brother Louie`,
        b: `Modern Talking-Cheri Cheri Lady`,
        c: `Modern Talking - Geronimo's Cadillac `,
        d: `Modern Talking - You're My Heart`,
        correct: `b`,

    },
    {
        link: `old/Modern Talking - Geronimo_'s Cadillac .mp3`,
        a: `Modern Talking-Brother Louie`,
        b: `Modern Talking-Cheri Cheri Lady`,
        c: `Modern Talking - Geronimo's Cadillac `,
        d: `Modern Talking - You're My Heart`,
        correct: `c`,

    },
    {
        link: `old/Modern Talking - You_'re My Heart, You_'re My Soul.mp3`,
        a: `Modern Talking-Brother Louie`,
        b: `Modern Talking-Cheri Cheri Lady`,
        c: `Modern Talking - Geronimo's Cadillac `,
        d: `Modern Talking - You're My Heart`,
        correct: `d`,

    },
    {
        link: `old/N&D - Nu ma lasa.mp3`,
        a: `N&D-Nu ma lasa`,
        b: `Delia-Nu ma lasa`,
        c: `N&D -Nu e vina mea`,
        d: `N&D -Nu vreau sa te pierd`,
        correct: `a`,

    },
    {
        link: `old/N&D -Nu e vina mea.mp3`,
        a: `N&D-Nu ma lasa`,
        b: `Delia-Nu ma lasa`,
        c: `N&D -Nu e vina mea`,
        d: `N&D -Nu vreau sa te pierd`,
        correct: `c`,

    },
    {
        link: `old/N&D -Nu vreau sa te pierd.mp3`,
        a: `N&D-Nu ma lasa`,
        b: `Delia-Nu ma lasa`,
        c: `N&D -Nu e vina mea`,
        d: `N&D -Nu vreau sa te pierd`,
        correct: `d`,

    },
    {
        link: `old/Non Stop - In urma ta .mp3`,
        a: `Non Stop-In urma ta`,
        b: `O-Zone-In Urma Ta`,
        c: `Non Stop-Iubito`,
        d: `O-zone-Dragostea Din tei`,
        correct: `a`,

    },
    {
        link: `old/Voltaj - De maine .mp3`,
        a: `Voltaj-20 De Ani`,
        b: `Voltaj-De maine`,
        c: `Voltaj-Tu`,
        d: `Voltaj-Albinuta`,
        correct: `b`,

    },
    {
        link: `old/Voltaj 20 De ani .mp3`,
        a: `Voltaj-20 De Ani`,
        b: `Voltaj-De maine`,
        c: `Voltaj-Tu`,
        d: `Voltaj-Albinuta`,
        correct: `a`,

    },
    {
        link: `old/Voltaj -Tu .mp3`,
        a: `Voltaj-20 De Ani`,
        b: `Voltaj-De maine`,
        c: `Voltaj-Tu`,
        d: `Voltaj-Albinuta`,
        correct: `c`,

    },

    {
        link: `old/O-Zone-Drgoste din Tei.mp3`,
        a: `O-Zone-Vrei sa Pleci`,
        b: `O-Zone-Drgoste din Tei`,
        c: `O-Zone-Chitarele`,
        d: `O-Zone-Maiahi`,
        correct: `b`,

    },
    {
        link: `old/ANIMAL X - Lumea animalelor .mp3`,
        a: `Animal X-Iubirea Mea`,
        b: `ANIMAL X-Lumea animalelor`,
        c: `Animal X-N-am crezut`,
        d: `Animal X-Baieti Derbedei`,
        correct: `b`,

    },
     {
        link: `old/Animal X  N-am crezut..mp3`,
        a: `Animal X-Iubirea Mea`,
        b: `ANIMAL X-Lumea animalelor`,
        c: `Animal X-N-am crezut`,
        d: `Animal X-Baieti Derbedei`,
        correct: `c`,

    },
     {
        link: `old/Animal X- Baieti Derbedei.mp3`,
        a: `Animal X-Iubirea Mea`,
        b: `ANIMAL X-Lumea animalelor`,
        c: `Animal X-N-am crezut`,
        d: `Animal X-Baieti Derbedei`,
        correct: `d`,

    },
     {
        link: `old/Animal X-Iubirea Mea.mp3`,
        a: `Animal X-Iubirea Mea`,
        b: `ANIMAL X-Lumea animalelor`,
        c: `Animal X-N-am crezut`,
        d: `Animal X-Baieti Derbedei`,
        correct: `a`,

    },
     {
        link: `old/Animal X-Sa Pot Ierta.mp3`,
        a: `Animal X-Iubirea Mea`,
        b: `ANIMAL X-Lumea animalelor`,
        c: `Animal X-Sa Pot Ierta`,
        d: `Animal X-Baieti Derbedei`,
        correct: `c`,

    },
     {
        link: `old/Sandra - In The Heat Of The Night .mp3`,
        a: `Sandra-In The Heat Of The Night`,
        b: `Sandra-In The Heat O The Night`,
        c: `Sandra-In The Heat Of The Niight`,
        d: `Sandra-In Thhe Heat Of The Niight`,
        correct: `a`,

    },
     {
        link: `old/SNAP! - Rhythm Is A Dancer .mp3`,
        a: `SNAP-Rhythm Is A Dancer`,
        b: `SNAP-Rhythmo`,
        c: `SNAP-Dance`,
        d: `SNAP-Dance with me`,
        correct: `a`,

    },
     {
        link: `old/Sonique - It Feels So Good .mp3`,
        a: `Sonique - It Feels So Good`,
        b: `Sonique - It Fels So Good`,
        c: `Sonique - It Feels So God`,
        d: `Sonique - It Feels So Goo`,
        correct: `a`,

    },
     {
        link: `old/Videoclip Animal X - _Pentru ea_.mp3.mp3`,
        a: `Animal X-Iubirea Mea`,
        b: `ANIMAL X-Lumea animalelor`,
        c: `Animal X -Pentru ea`,
        d: `Animal X-Baieti Derbedei`,
        correct: `c`,

    },
     {
        link: `old/What Goes Around...Comes Around.mp3`,
        a: `Justin Timberlake-What Goes Around`,
        b: `Justin Timberlake-Sexy Back`,
        c: `Timberland-What Goes Around`,
        d: `Eminem-What Goes Around`,
        correct: `a`,

    },
]

const gameDataPopAndOld = [...gameDataOldschool, ...gameDataPop];


const gameDataUntold = [
    {
        link: `untold/04.RAM - RAMsterdam .mp3`,
        a: `RAM-RAMsterdam`,
        b: `RAM-Rmexico`,
        c: `Perry ONeil - Wave Force`,
        d: `RAM-Amsterdam`,
        correct: `a`,

    },
    {
        link: `untold/4.Perry ONeil - Wave Force..mp3`,
        a: `RAM-RAMsterdam`,
        b: `RAM-Rmexico`,
        c: `Perry ONeil - Wave Force`,
        d: `RAM-Amsterdam`,
        correct: `c`,

    },
    {
        link: `untold/17.Darren Porter & Ferry Tayle - Neptune's Siren (Original Mix).mp3.mp3`,
        a: `AVB-Accelerate`,
        b: `DarrenPorter&FerryTayle-Neptune Siren`,
        c: `Perry ONeil - Wave Force`,
        d: `Alesso-If I Lose Myself`,
        correct: `b`,

    },
    {
        link: `untold/Accelerate_Extended_Mix.mp3.mp3`,
        a: `AVB-Accelerate`,
        b: `DarrenPorter&FerryTayle-Neptune Siren`,
        c: `Perry ONeil - Wave Force`,
        d: `Alesso-If I Lose Myself`,
        correct: `a`,

    },
    {
        link: `untold/Age of Love.mp3`,
        a: `AVB-Accelerate`,
        b: `Alesso-If I Lose Myself`,
        c: `boris brejcha-Age of Love`,
        d: `charlotte de witte-Age of Love`,
        correct: `d`,

    },
    {
        link: `untold/Alesso vs OneRepublic - If I Lose Myself .mp3`,
        a: `AVB-Accelerate`,
        b: `DarrenPorter&FerryTayle-Neptune Siren`,
        c: `Perry ONeil - Wave Force`,
        d: `Alesso-If I Lose Myself`,
        correct: `d`,

    },
    {
        link: `untold/Aly  Fila feat. Jwaydan  We Control The Sunlight .mp3`,
        a: `Aly&&Fila-We Control The Sunlight`,
        b: `Armin-We Control The Sunlight`,
        c: `Aly&&Fila-I Control The Sunlight`,
        d: `Armin-I Control The Sunlight`,
        correct: `a`,

    },
    {
        link: `untold/Arksun - Arisen (Original Mix).mp3`,
        a: `Arksun-Arisen`,
        b: `DarrenPorter&FerryTayle-Neptune Siren`,
        c: `Perry ONeil - Wave Force`,
        d: `Alesso-If I Lose Myself`,
        correct: `a`,

    },
    {
        link: `untold/Armin van Buuren  Garibay - Phone Down .mp3`,
        a: `Armin van Buuren-Stickup`,
        b: `Armin van Buuren-Sirius `,
        c: `AVB&Michelle-Hold On`,
        d: `AVB&Garibay-Phone Down`,
        correct: `d`,

    },
    {
        link: `untold/Armin van Buuren - Stickup.mp3`,
        a: `Armin van Buuren-Stickup`,
        b: `Armin van Buuren-Sirius `,
        c: `AVB&Michelle-Hold On`,
        d: `AVB&Garibay-Phone Down`,
        correct: `a`,

    },
    {
        link: `untold/Armin van Buuren _ AVIRA - Sirius .mp3`,
        a: `Armin van Buuren-Stickup`,
        b: `Armin van Buuren-Sirius `,
        c: `AVB&Michelle-Hold On`,
        d: `AVB&Garibay-Phone Down`,
        correct: `b`,

    },
    {
        link: `untold/Armin van Buuren _ Davina Michelle - Hold On .mp3`,
        a: `Armin van Buuren-Stickup`,
        b: `Armin van Buuren-Sirius `,
        c: `AVB&Michelle-Hold On`,
        d: `AVB&Garibay-Phone Down`,
        correct: `c`,

    },
    {
        link: `untold/Armin van Buuren feat. HALIENE - Song I Sing .mp3`,
        a: `Armin van Buuren-Stickup`,
        b: `Armin van Buuren-Sirius `,
        c: `AVB&HALIENE-Song I Sing `,
        d: `AVB&Garibay-Phone Down`,
        correct: `c`,

    },
    {
        link: `untold/Armin van Buuren vs Shapov - La Résistance De LAmour .mp3`,
        a: `Armin van Buuren-Stickup`,
        b: `Armin van Buuren-The Last Dancer`,
        c: `AVB&HALIENE-Song I Sing `,
        d: `AVB&Shapov-La.Résistance.De.LAmour`,
        correct: `d`,

    },
    {
        link: `untold/Armin van Buuren vs Shapov - The Last Dancer .mp3`,
        a: `Armin van Buuren-Stickup`,
        b: `Armin van Buuren-The Last Dancer`,
        c: `AVB&HALIENE-Song I Sing`,
        d: `AVB&Shapov-La.Résistance.De.LAmour`,
        correct: `b`,

    },
    {
        link: `untold/Ascension - Someone (Giuseppe Ottaviani Extended Remix) .mp3`,
        a: `Ascension-Someone`,
        b: `AXMO-The Mind`,
        c: `AXMO-Music`,
        d: `Armin van Buuren-Stickup`,
        correct: `a`,

    },
    {
        link: `untold/AXMO - The Mind .mp3`,
        a: `Ascension-Someone`,
        b: `AXMO-The Mind`,
        c: `AXMO-Music`,
        d: `Armin van Buuren-Stickup`,
        correct: `b`,

    },
    {
        link: `untold/Dash Berlin feat. Bo Bruce - Coming Home.mp3`,
        a: `Dash Berlin-Coming Home`,
        b: `AXMO-The Mind`,
        c: `Ascension-Someone`,
        d: `AVB&HALIENE-Song I Sing`,
        correct: `a`,

    },
    {
        link: `untold/David Guetta - She Wolf (Falling To Pieces) ft. Sia .mp3`,
        a: `David Guetta-She Wolf`,
        b: `David Guetta-Dreams`,
        c: `David&MORTEN-Kill Me Slow`,
        d: `David&MORTEN-Never Be Alone`,
        correct: `a`,

    },
    {
        link: `untold/David Guetta & MORTEN - Dreams (ft. Lanie Gardner).mp3`,
        a: `David Guetta-She Wolf`,
        b: `David Guetta-Dreams`,
        c: `David&MORTEN-Kill Me Slow`,
        d: `David&MORTEN-Never Be Alone`,
        correct: `b`,

    },
    {
        link: `untold/David Guetta & MORTEN - Kill Me Slow.mp3`,
        a: `David Guetta-She Wolf`,
        b: `David Guetta-Dreams`,
        c: `David&MORTEN-Kill Me Slow`,
        d: `David&MORTEN-Never Be Alone`,
        correct: `c`,

    },
    {
        link: `untold/David Guetta & MORTEN feat. Aloe Blacc - Never Be Alone.mp3`,
        a: `David Guetta-She Wolf`,
        b: `David Guetta-Dreams`,
        c: `David&MORTEN-Kill Me Slow`,
        d: `David&MORTEN-Never Be Alone`,
        correct: `d`,

    },
    {
        link: `untold/David Guetta & MORTEN ft. John Martin - Impossible.mp3`,
        a: `David Guetta-She Wolf`,
        b: `David&MORTEN-Impossible`,
        c: `David&MORTEN-Kill Me Slow`,
        d: `David&MORTEN-Never Be Alone`,
        correct: `b`,

    },
    {
        link: `untold/David Guetta Feat. Kid Cudi - Memories .mp3`,
        a: `David Guetta-Memories`,
        b: `David&MORTEN-Impossible`,
        c: `David&MORTEN-Kill Me Slow`,
        d: `David&MORTEN-Never Be Alone`,
        correct: `a`,

    },
    {
        link: `untold/David Guetta feat. Sia - Titanium.mp3`,
        a: `David Guetta&Sia-Titanium`,
        b: `David&MORTEN-Impossible`,
        c: `David&MORTEN-Kill Me Slow`,
        d: `David&MORTEN-Never Be Alone`,
        correct: `a`,

    },
    {
        link: `untold/David Guetta feat.Akon - Sexy Girl.mp3`,
        a: `David&MORTEN-Impossible`,
        b: `David&MORTEN-Kill Me Slow`,
        c: `David&MORTEN-Never Be Alone`,
        d: `David&Akon-Sexy Girl`,
        correct: `a`,

    },
    {
        link: `untold/Detroit 3 AM.mp3`,
        a: `David&MORTEN-Impossible`,
        b: `David&MORTEN-Detroit 3 AM`,
        c: `David&MORTEN-Never Be Alone`,
        d: `David&Akon-Sexy Girl`,
        correct: `a`,

    },
    {
        link: `untold/DJ Tiesto - Adagio For Strings..mp3`,
        a: `Tiesto-Adagio For Strings`,
        b: `Tiesto-Just Be`,
        c: `Tiesto-suburban train`,
        d: `Tiesto - Traffic`,
        correct: `a`,

    },
    {
        link: `untold/DJ Tiësto Just Be (Antillas Club Mix)..mp3`,
        a: `Tiesto-Adagio For Strings`,
        b: `Tiesto-Just Be`,
        c: `Tiesto-suburban train`,
        d: `Tiesto - Traffic`,
        correct: `b`,

    },
    {
        link: `untold/Eminem - The Real Slim Shady W&W remix.mp3`,
        a: `W&W remix-the Real Slim Shady`,
        b: `Tiesto-Just Be`,
        c: `Tiesto-suburban train`,
        d: `Tiesto - Traffic`,
        correct: `a`,

    },
    {
        link: `untold/Emir Guven - Save My Soul.mp3.mp3`,
        a: `Emir Guven-Save My Soul`,
        b: `Emir Guven-My Soul`,
        c: `Emir Guven-Traffic`,
        d: `Emir Guven-Save Me`,
        correct: `a`,

    },
    {
        link: `untold/Ferry Corsten vs Armin van Buuren - Brute .mp3`,
        a: `Ferry Corsten-Brute`,
        b: `Ferry Corsten vs AVB-Brute`,
        c: `AVB-Brute`,
        d: `Emir Guven-My Soul`,
        correct: `b`,

    },
    {
        link: `untold/I Never Do .mp3`,
        a: `Christopher Corrigan-I Never Do`,
        b: `Armin-I Never Do`,
        c: `Emir Guven-Save My Soul`,
        d: `Tiesto-I Never Do`,
        correct: `a`,

    },
    {
        link: `untold/Key4050_-_Cisza_.mp3`,
        a: `Key4050-Cisza`,
        b: `KEY4050-Equinox`,
        c: `KEY4050-Good Morning`,
        d: `Key4050 - Higher Sense`,
        correct: `a`,

    },
    {
        link: `untold/Let's Love (David Guetta & MORTEN Future Rave Remix).mp3`,
        a: `David Guetta-She Wolf`,
        b: `David&MORTEN-Impossible`,
        c: `David&MORTEN-Let's Love`,
        d: `David&MORTEN-Never Be Alone`,
        correct: `c`,

    },
    {
        link: `untold/Miles Away.mp3`,
        a: `Armin van Buuren-Miles Away`,
        b: `Armin van Buuren-The Last Dancer`,
        c: `AVB&HALIENE-Song I Sing `,
        d: `AVB&Shapov-La.Résistance.De.LAmour`,
        correct: `a`,

    },
    {
        link: `untold/New ProjectAge Of Love - The Age Of Love (Charlotte de Witte & Enrico Sangiuliano Remix).mp3`,
        a: `AVB-Accelerate`,
        b: `Alesso-If I Lose Myself`,
        c: `charlotte de witte-Age of Love Remix`,
        d: `charlotte de witte-Age of Love`,
        correct: `c`,

    },
    {
        link: `untold/New ProjectPaul Denton - Rise Up.mp3`,
        a: `Paul Denton-Rise`,
        b: `Paul Denton-Rise Up`,
        c: `Paul Denton-You`,
        d: `Paul Denton-Song I Sing`,
        correct: `b`,

    },
    {
        link: `untold/No Fun (Extended Mix)..mp3`,
        a: `Armin van Buuren-Miles Away`,
        b: `Armin van Buuren-The Last Dancer`,
        c: `AVB-No Fun`,
        d: `AVB&Shapov-La.Résistance.De.LAmour`,
        correct: `c`,

    },
    {
        link: `untold/NWYR - Mind Control..mp3`,
        a: `NWYR-Mind Control`,
        b: `AXMO-The Mind`,
        c: `AXMO-Music`,
        d: `Armin van Buuren-Stickup`,
        correct: `a`,

    },
    {
        link: `untold/Paul Van Dyk feat. Johnny McDaid - Home.mp3`,
        a: `Paul Van Dyk-Here`,
        b: `Paul Van Dyk-Home`,
        c: `Paul Denton-Rise Up`,
        d: `Emir Guven-Save My Soul`,
        correct: `b`,

    },
    {
        link: `untold/Push - Universal Nation .mp3`,
        a: `Push-Universal Nation`,
        b: `Tiesto-Universal Nation`,
        c: `Push-Universal`,
        d: `Push-Universal Love`,
        correct: `a`,

    },
    {
        link: `untold/Push-Universal Nation(Tiësto Remix-Live)..mp3`,
        a: `Push-Universal Nation`,
        b: `Tiesto Remix-Universal Nation`,
        c: `Push-Universal`,
        d: `Push-Universal Love`,
        correct: `b`,

    },
    {
        link: `untold/Ruben de Ronde & Cubicore - Adamant .mp3`,
        a: `Paul Van Dyk-Here`,
        b: `Paul Van Dyk-Home`,
        c: `Paul Denton-Rise Up`,
        d: `Ruben de Ronde-Adamant`,
        correct: `d`,

    },
    {
        link: `untold/Snatt  Vix feat. Diana Leah - Soapte .mp3`,
        a: `Bogdan Vix&Diana-Soapte`,
        b: `Bogdan Vix&Diana-As Vrea`,
        c: `Bogdan Vix&Diana-Sa pot Uita`,
        d: `Ruben de Ronde-Adamant`,
        correct: `a`,

    },
    {
        link: `untold/Steve Aoki  Alok - Do It Again .mp3`,
        a: `Tiesto-Do It Again`,
        b: `Steve Aoki-Do It Again   `,
        c: `Dj Rush-Do It Again`,
        d: `3 Are Legend-Do It Again`,
        correct: `b`,

    },
    {
        link: `untold/Superman.mp3`,
        a: `Armin van Buuren-Miles Away`,
        b: `Armin van Buuren-The Last Dancer`,
        c: `AVB-No Fun`,
        d: `Armin Van Buuren-Superman`,
        correct: `d`,

    },
    {
        link: `untold/The Noble Six - Firewalker .mp3`,
        a: `The Noble Six-Fire`,
        b: `The Noble Six-Firewalker`,
        c: `Armin Van Buuren-Brute`,
        d: `Ferry Corsten-FireWalker`,
        correct: `b`,

    },
    {
        link: `untold/Tiesto  SWACQ - Party Time .mp3`,
        a: `Tiesto-Do It Again`,
        b: `Tiesto-Party Time`,
        c: `Tiesto-Dance`,
        d: `Tiesto-Up`,
        correct: `b`,

    },
    {
        link: `untold/Viva La Vida (Alex M.O.R.P.H. Extended Remix).mp3`,
        a: `Alex M.O.R.P.H.-Viva La Vida`,
        b: `The Noble Six-Viva`,
        c: `Armin Van Buuren-Viva La Vida`,
        d: `Ferry Corsten-FireWalker`,
        correct: `a`,

    },
    {
        link: `untold/Pawlowski - Cosmic Sequencer.mp3`,
        a: `Pawlowski-Cosmmic Sequencer`,
        b: `Pawloooowski-Cosmic Sequencer`,
        c: `Pawlo-Cosmic Sequencer`,
        d: `Pawlowski-Cosmic`,
        correct: `a`,

    },
    {
        link: `untold/Kensington - Sorry.mp3`,
        a: `AVB&Kensington-Sorry`,
        b: `Kensington-Sorry`,
        c: `Alexandra Badoi-Sorry`,
        d: `Armin Van Buuren-Sorry`,
        correct: `a`,

    },
    {
        link: `untold/Giuseppe Ottaviani - Linking People.mp3`,
        a: `Giuseppe Ottaviani-Linking People`,
        b: `G.O-Magico`,
        c: `G.O-Tranceland`,
        d: `G.O-Amsterdam`,
        correct: `a`,

    },
    {
        link: `untold/Galaxy (A.R.D.I. Remix).mp3`,
        a: `A.R.D.I.-Galaxy`,
        b: `Boris Brejcha-Galaxy`,
        c: `Alex M.O.R.P.H.-Galaxy`,
        d: `Armin-Galaxy`,
        correct: `a`,

    },
    {
        link: `untold/Boris Brejcha - Purple Noise.mp3`,
        a: `Boris Brejcha-Blue Lake `,
        b: `Boris Brejcha-Game Over`,
        c: `Boris Brejcha-Purple Noise`,
        d: `Boris Brejcha-Universal Love`,
        correct: `c`,

    },
    {
        link: `untold/Boris Brejcha - Game Over .mp3`,
        a: `Boris Brejcha-Blue Lake `,
        b: `Boris Brejcha-Game Over`,
        c: `Boris Brejcha-Purple Noise`,
        d: `Boris Brejcha-Universal Love`,
        correct: `b`,

    },
    {
        link: `untold/Boris Brejcha - Blue Lake (Original Mix) (320kbps)..mp3`,
        a: `Boris Brejcha-Blue Lake `,
        b: `Boris Brejcha-Game Over`,
        c: `Boris Brejcha-Purple Noise`,
        d: `Boris Brejcha-Universal Love`,
        correct: `a`,

    },
    {
        link: `untold/Alex M.O.R.P.H. & Aimoon present Northern Storm - Mission Contro.mp3`,
        a: `Alex M.O.R.P.H.-Mission Control`,
        b: `Alex M.O.R.P.H.-Viva la Vida`,
        c: `Alex M.O.R.P.H-Universal Nation`,
        d: `Tiesto-Universal Nation `,
        correct: `a`,

    },
    {
        link: `untold/Alex M.O.R.P.H. & Aimoon present Northern Storm - Mission Contro.mp3`,
        a: `Alex M.O.R.P.H.-Mission Control`,
        b: `Alex M.O.R.P.H.-Viva la Vida`,
        c: `Alex M.O.R.P.H-Universal Nation`,
        d: `Tiesto-Universal Nation `,
        correct: `a`,

    },
    {
        link: `untold/Space Diver .mp3`,
        a: `Boris Brejcha-Blue Lake `,
        b: `Boris Brejcha-Game Over`,
        c: `Boris Brejcha-Purple Noise`,
        d: `Boris Brejcha-Space Diver`,
        correct: `d`,

    },


]
const gameDataAllMusic = [...gameDataPop, ...gameDataRap, ...gameDataOldschool, ...gameDataUntold]




// const gameDataPopTwo=gameDataAllMusic.filter(music=>music.link.includes('pop'))
// console.log(gameDataPopTwo)



const singlePlayerSection = document.querySelector('.singlePlayer');
const player = document.getElementById('player');
const singlePlayer = document.getElementById('single');
const practiceMode = document.getElementById('practiceMode');
const level = document.getElementById('level');
const answer = document.querySelectorAll('.answer');
const answerEl = document.querySelectorAll('.answerElement')
const answerTxtAll = document.querySelectorAll(".answertxt")
const answerOneTxt = document.getElementById('aText');
const answerOneInput = document.getElementById('a');
const answerTwoTxt = document.getElementById('bText');
const answerTwoInput = document.getElementById('b');
const answerThreeTxt = document.getElementById('cText');
const answerThreeInput = document.getElementById('c')
const answersFourTxt = document.getElementById('dText');
const answersFourInput = document.getElementById('d');
const scoreEl = document.querySelector('.score');
const submitBtn = document.getElementById('submit');
const body = document.querySelector('.body');



let audio;
let score =0;
let currentGameData;
let playing = true;
let levelChange = 5;
let life = 5;
let e;

//Elementele Raspuns transformare din NodeArray In array
const answerElArray = [...answerEl, ...answerTxtAll];
const answerElement = [...answerEl];
const answerText = [...answerTxtAll]

//ascunderea intrebariilor implicite Html
function hiddenQuestion() {
    answerElArray.forEach(function (answer) {
        answer.classList.add('hidden')
    })
}
hiddenQuestion()

//afisarea variantelor de raspuns
function addQuestion() {
    answerElArray.forEach(answer => answer.classList.remove('hidden'))
}

//Audio Play

function audioPlay(link) {
    audio = new Audio(link)
    audio.play()
}

// Generare Elemente Array Random
function randomArray(random) {
    return random[Math.floor(Math.random() * random.length)]
}

//Afisarea Varianteleor de raspuns

function displayQueastion(currentMusic) {

    // Intrebarile Curente Generate Random

    currentGameData = randomArray(currentMusic)
    addQuestion()
    audioPlay(currentGameData.link)

    //Afisarea Intrebariilor din gameData
    answerOneTxt.innerText = currentGameData.a;
    answerTwoTxt.innerText = currentGameData.b;
    answerThreeTxt.innerText = currentGameData.c;
    answersFourTxt.innerText = currentGameData.d;

}


//Functia Nivel
function leveel(levelChange) {
    level.placeholder = `Level ${levelChange}`

    audioPlay(`sonds/[YT2mp3.info] - level one (320kbps).mp3`)

    return function (up) {

        leveel(up)
    }
}
//Animatii Style Functie
function animationStyle(fundal, animatie) {
    if (score < 60) {
        singlePlayerSection.style.backgroundImage = fundal;
        singlePlayerSection.style.backgroundSize = '100% 100%';
        singlePlayerSection.style.animation = `${animatie} 20s infinite`;
        singlePlayerSection.style.transition = `animation 1.4s linear ease`;
    }
    else if (score >= 60) {
        singlePlayerSection.style.animation = `${animatie} 20s infinite,shadow 3.9s infinite ease-in-out`
        singlePlayerSection.style.transition = `animation 1.4s linear ease`;
        singlePlayerSection.style.backgroundImage = fundal;
        singlePlayerSection.style.backgroundSize = '100% 100%';
        singlePlayerSection.style.transition = `animation 4s linear ease`;
        body.style.backgroundImage = 'none';
        body.style.backgroundColor = 'black';
        body.style.transition = `backgroundColor 1s linear ease`;
    }
}

//Deselectarea Elementelor Input Radio

function deselectElement() {
    answerElement.forEach(answer => answer.checked = false)
}

// functie care  cicleaza elemente din Selectia Radio 
const selectElement = () => {
    let raspuns;

    for (const ansswer of answerElement) {
        if (ansswer.checked === true) {
            raspuns = ansswer.id

        }
    }
    return raspuns
}



// Game over Toate functionalitatile Oprite

function gameOver() {
    singlePlayerSection.style.backgroundSize = "100%"
    hiddenQuestion()
    animationStyle(`url(img/game-over.gif)`);
    player.style.visibility = 'hidden'
    level.style.visibility = 'hidden'
    scoreEl.classList.add('hidden');
    submitBtn.textContent = `Reload`
    submitBtn.addEventListener('click', () => location.reload())


}
//Castigatoru Jocului Score 100
function gameWinner() {
    audio.pause()
    hiddenQuestion()
    singlePlayerSection.style.animation = `none`
    animationStyle(`url(img/giphyd.gif)`)
    singlePlayerSection.style.backgroundSize = `100% 100%`
    audioPlay(`sonds/Queen - We are the champions (Chorus only).mp3`)
    player.style.visibility = 'hidden'
    level.style.visibility = 'hidden'
    scoreEl.classList.add('hidden');
    submitBtn.textContent = `Reload`
    submitBtn.addEventListener('click', () => location.reload())

}

function nextLevel(nr) {
    audio.pause()
    animationStyle(`url(img/level-pop-level-up.gif)`)
    hiddenQuestion()
    leveel()(nr)
}

//Animatii in fuctie de Music Type
function animationMusicAll() {
    gameDataAllMusic.forEach(music => {

        if (music.link.includes('pop') && currentGameData.link.includes('pop')) animationStyle(`url(img/mw7rZ3.gif)`, 'backgroudChangePop15Plus')
        else if (music.link.includes('untold') && currentGameData.link.includes('untold')) animationStyle(`url('img/tumblr_mh45hoa4AC1rtutkqo1_500.webp')`, 'backgroundChangeElectronic75')
        else if (music.link.includes('rap') && currentGameData.link.includes('rap')) animationStyle(`url(img/music-artic (1).gif)`, 'backgroundChangeRap30')
        else if (music.link.includes('old') && currentGameData.link.includes('old')) animationStyle(`url(img/__-1_1_____.gif')`, 'backgroundChangeOld50')

    })
}

//Functie Trimite Raspund 

const sendAnswer = function () {
    // Vietile revin la numarul initial sau la un numar mai mic in functie de nivel


    // variabila ans preaia valorea functiei care returneaza raspunsul dat legat de id elementului a,b,c,d
    const ans = selectElement()
    deselectElement()



    //daca ans===raspuns este true ,daca e un raspuns se excuta tot codu
    if (ans) {

        //Daca Raspunsul este Corect
        if (ans === currentGameData.correct) {

            audio.pause()
            score++;
            scoreEl.textContent = score;
            //Level1 //Manipularea Elementelor in fuctie de scor//Pop Music
            if (score < 20) {
                audio.pause()

                displayQueastion(gameDataPop)
                if (score === 5) animationStyle(`url(img/InconsequentialSlushyAlbertosaurus-size_restricted.gif`, 'backgroudChangePop10')
                else if (score === 10) animationStyle(`url(img/mw7rZ3.gif)`, 'backgroudChangePop5')
                else if (score === 15) animationStyle(`url(img/mw7rZ3.gif)`, 'backgroudChangePop15Plus')
            }

            //Level 2 Rap Music
            else if (score === 20) {
                //Level Up Functie
                life = 5;
                nextLevel(2)
                setTimeout(function () {
                    displayQueastion(gameDataRap)
                    animationStyle(`url(img/kda-akali.gif)`, 'backgroundChangeRap'),
                        // singlePlayerSection.style.backgroundSize='contain cover';


                        addQuestion()
                }, 1500)


            }


            else if (score > 20 && score < 35) {
                audio.pause()

                displayQueastion(gameDataRap)
                if (score === 25) animationStyle(`url(img/9AHC.gif)`, 'backgroundChangeRap25')
                else if (score === 30) animationStyle(`url(img/music-artic (1).gif)`, 'backgroundChangeRap30')
            }

            //Nivel 3 Rap&&POP

            else if (score === 35) {
                life = 3;
                nextLevel(3)
                setTimeout(function () {
                    displayQueastion(gameDatapopAndRap)
                    animationStyle(`url(img/kda-akali.gif)`, 'backgroundChangeRapAndPop'),

                        addQuestion()
                }, 1500)

            }
            else if (score > 35 && score < 40) {
                audio.pause()

                displayQueastion(gameDatapopAndRap)
            }
            //LEVEL 4 Muzica Veche

            else if (score === 40) {
                audio.pause()
                life = 5;
                nextLevel(4)
                // displayQueastion(gameDataOldschool) 
                setTimeout(function () {
                    displayQueastion(gameDataOldschool)
                    animationStyle(`url(img/200.gif)`, 'backgroundChangeOld'),

                        addQuestion()
                }, 1500)


            }
            else if (score > 40 && score < 55) {
                // life=5
                displayQueastion(gameDataOldschool)
                if (score === 45) animationStyle(`url(img/ozone-dragostea-din-tei.gif)`, 'backgroundChangeOld45')
                else if (score === 50) animationStyle(`url(img/__-1_1_____.gif')`, 'backgroundChangeOld50')

            }

            //Level 5 Pop Si muzica veche


            else if (score === 55) {
                audio.pause()
                life = 3
                nextLevel(5)
                setTimeout(function () {
                    displayQueastion(gameDataPopAndOld)
                    animationStyle(`url(img/__-1_1_____.gif)`, 'backgroundChangeLevel55'),

                        addQuestion()
                }, 1500)
            }
            else if (score > 55 && score < 60) {
                audio.pause()
                displayQueastion(gameDataPopAndOld)
            }
            //Nivel 6 Electronic Music
            else if (score === 60) {
                audio.pause()
                life = 5;
                nextLevel(6)
                setTimeout(function () {
                    displayQueastion(gameDataUntold)
                    animationStyle(`url(img/armin-van-buuren-ultra-miami2018.gif`, 'backgroundChangeElectronic60'),
                        addQuestion()
                }, 1900)

            }

            else if (score > 60 && score < 80) {

                audio.pause()
                displayQueastion(gameDataUntold)
                if (score === 65) { animationStyle(`url(img/HIjc.gif)`, 'backgroundChangeElectronic65') }
                else if (score === 70) animationStyle(`url('img/tumblr_mh45hoa4AC1rtutkqo1_500.webp')`, 'backgroundChangeElectronic70')
                else if (score === 75) animationStyle(`url('img/tumblr_mh45hoa4AC1rtutkqo1_500.webp')`, 'backgroundChangeElectronic75')
            }

            //Level 7 Toata Muzica Precedenta
            else if (score === 80) {
                audio.pause()
                life = 5;
                nextLevel(7)
                setTimeout(function () {
                    displayQueastion(gameDataAllMusic)
                    animationStyle(`url(img/armin-van-buuren-ultra-miami2018.gif`, 'backgroundChangeElectronic60'),
                        addQuestion()
                }, 1900)
            }
            else if (score > 80 && score < 100) {
                audio.pause()
                displayQueastion(gameDataAllMusic)

                animationMusicAll()

            }
            // daca scorul este 100 jocul se termina 
            else if (score === 100) {
                gameWinner()
            }

        }//if Paranteaza :)


        //Daca Raspunsul este gresit
        else {
            deselectElement()
            // score--;

            // scoreContent();
            life--;
            // scoreEl.textContent=life
            audio.pause()

            if (score < 20) {
                audio.pause()
                displayQueastion(gameDataPop)

            }
            else if (score >= 20 && score < 35) {
                audio.pause()
                displayQueastion(gameDataRap)
            }
            else if (score >= 35 && score < 40) {
                audio.pause()

                displayQueastion(gameDatapopAndRap)
            }
            else if (score >= 40 && score < 55) {
                audio.pause()

                displayQueastion(gameDataOldschool)
            }

            else if (score >= 55 && score < 60) {
                audio.pause()
                displayQueastion(gameDataPopAndOld)
            }
            else if (score >= 60 && score < 80) {
                audio.pause()
                displayQueastion(gameDataUntold)
            }
            else if (score >= 80 && score < 100) {
                audio.pause()
                displayQueastion(gameDataAllMusic)
                animationMusicAll()
            }

            scoreEl.textContent = life;
            setTimeout(function () {
                scoreEl.textContent = score;
            }, 900)

            if (life < 0) {

                audio.pause();

                gameOver()
                audioPlay(`sonds/Game Over Voice - Sound Effect HD.mp3`);


            }
        }



    }

}
//Functie Care Recunoste Tipul de Muzica in functie de Linkul sau Folderul unde sunt depozitate in cazult Modului De Practica
function levelPlaceHolder(){
    gameDataAllMusic.forEach(music=>{
        if (music.link.includes('pop') && currentGameData.link.includes('pop')) level.placeholder=`Pop`
        else if (music.link.includes('untold') && currentGameData.link.includes('untold')) level.placeholder=`Electronic`
        else if (music.link.includes('rap') && currentGameData.link.includes('rap')) level.placeholder=`Hip&Hop`
        else if (music.link.includes('old') && currentGameData.link.includes('old')) level.placeholder=`OldSchool`
    })
} 

//Trimiterea Raspunului In cazul Modului de Practica
function sendAnswerPracticeBtn(){
    const ans = selectElement()
    deselectElement()
    // animationStyle(`url(img/MiniatureAnguishedHomalocephale-size_restricted.gif)`)

    // animationMusicAll()

    if (ans) {

        if (ans === currentGameData.correct) {
            audio.pause()
            displayQueastion(gameDataAllMusic)
            submitBtn.innerHTML = `True`;
            setTimeout(() => submitBtn.innerHTML = `Send`, 800)
            animationMusicAll()
            levelPlaceHolder()
        }
        else {


            audio.pause()
            displayQueastion(gameDataAllMusic)
            submitBtn.innerHTML = `False`;
            setTimeout(() => submitBtn.innerHTML = `Send`, 800)
            animationMusicAll()
            levelPlaceHolder()

        }






    } 
}

// Selectie mod de joc


player.addEventListener('change', function (e) {


    if (this.value === 'playeer') {

        location.reload()

    }
    else if (this.value === 'single') {

        // Level 1 Default
        levelChange = 0;
        leveel(1);
        animationStyle(`url(img/MiniatureAnguishedHomalocephale-size_restricted.gif)`)
        hiddenQuestion()
        practiceMode.style.display = 'none'


        // Timmer Jocu  incepe dupa 1,5 secunde

        setTimeout(() => {
            animationStyle(`url(img/__-1_1_____.gif)`, 'backorundChangePop'),
                displayQueastion(gameDataPop)
            singlePlayerSection.style.transition = '1.3s background'

        }, 1500)
        // Buntonul  De submit in cazul selectiei de joc
        submitBtn.addEventListener('click', sendAnswer)

    }


    else if (this.value = 'practice') {
        // hiddenQuestion()
        audioPlay(`sonds/[YT2mp3.info] - level one (320kbps).mp3`)
        animationStyle(`url(img/0a2507d992d5fae350cf7fca493b7a6f.gif)`)
        singlePlayer.style.display = 'none'
        scoreEl.style.opacity = '0'
        submitBtn.innerHTML = `Send`
        level.placeholder = `Music Type`
        setTimeout(()=>{ 
        displayQueastion(gameDataAllMusic)
        animationMusicAll()
        currentGameData;
        levelPlaceHolder()},2225)
      
        
        submitBtn.addEventListener('click',sendAnswerPracticeBtn)
    
    }






    // })

})




// score Handler

// functie Click pe Score Element daca click initial e true daca dam click pe score devine false,si daca e fals
//devine ture la un click true=false ,la alt click flase=true




let click = true

scoreEl.addEventListener('click', function () {


    if (click) {
        click = false
        scoreEl.textContent = life
    }
    else {
        click = true
        scoreEl.textContent = score
    }

})

// Enter Event

document.addEventListener('keydown',function(e){
    if(e.key==='Enter'){
        if(player.value==='single') sendAnswer()
        else if(player.value==='practice')sendAnswerPracticeBtn()
    }
    else if(e.key==='Escape'){
        location.reload()
    }
})
