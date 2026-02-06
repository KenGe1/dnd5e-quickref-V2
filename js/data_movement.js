data_movement = [
    {
        title: "Bewegen",
        optional: "Standardregel",
        icon: "run",
        subtitle: "Kosten: 1,5m pro 1,5m",
        description: "Bewegungskosten: 1,5m pro 1,5m Bewegung",
        reference: "PHB, S. 190.",
        bullets: [
            "Wenn du mehr als eine Bewegungsrate hast, etwa deine Gehgeschwindigkeit und eine Fluggeschwindigkeit, kannst du während deiner Bewegung zwischen ihnen wechseln. Jedes Mal, wenn du wechselst, ziehst du die bereits zurückgelegte Strecke von der neuen Geschwindigkeit ab.",
            "Du kannst den Raum einer nicht feindlichen Kreatur durchqueren.",
            "Du kannst den Raum einer feindlichen Kreatur nur durchqueren, wenn sie mindestens zwei Größenkategorien größer oder kleiner ist als du.",
            "Der Raum einer anderen Kreatur ist für dich schwieriges Gelände.",
            "Egal ob Freund oder Feind: Du kannst deine Bewegung nicht freiwillig in ihrem Raum beenden."
        ]
    },
    {
        title: "Klettern",
        optional: "Standardregel",
        icon: "crags",
        subtitle: "Kosten: 3m pro 1,5m",
        description: "Bewegungskosten: 3m pro 1,5m Klettern",
        reference: "PHB, S. 182.",
        bullets: [
            "Kann bei schwierigen Kletterstellen einen Stärke- (Athletik-)Wurf erfordern."
        ]
    },
    {
        title: "Schwimmen",
        optional: "Standardregel",
        icon: "at-sea",
        subtitle: "Kosten: 3m pro 1,5m",
        description: "Bewegungskosten: 3m pro 1,5m Schwimmen",
        reference: "PHB, S. 182.",
        bullets: [
            "Kann bei schwierigen Schwimmstrecken einen Stärke- (Athletik-)Wurf erfordern."
        ]
    },
    {
        title: "Sich fallen lassen",
        optional: "Standardregel",
        icon: "lob-arrow",
        subtitle: "Kosten: 0m",
        description: "Bewegungskosten: 0m (frei)",
        reference: "PHB, S. 190-191, 292.",
        bullets: [
            "Du kannst dich fallen lassen, ohne Bewegungsrate zu verbrauchen.",
            "Um dich liegend zu bewegen, musst du kriechen oder Magie wie Teleportation nutzen.",
            "Sich fallen lassen verleiht den Zustand <i>Liegend</i> (Nahkampfangriffe gegen dich haben Vorteil, Fernkampfangriffe gegen dich haben Nachteil, deine eigenen Angriffe haben Nachteil)."
        ]
    },
    {
        title: "Kriechen",
        optional: "Standardregel",
        icon: "crawl",
        subtitle: "Kosten: 3m pro 1,5m",
        description: "Bewegungskosten: 3m pro 1,5m Kriechen",
        reference: "PHB, S. 182.",
        bullets: [

        ]
    },
    {
        title: "Aufstehen",
        optional: "Standardregel",
        icon: "strong",
        subtitle: "Kosten: halbe Bewegungsrate",
        description: "Bewegungskosten: die Hälfte deiner Geschwindigkeit",
        reference: "PHB, S. 190-191.",
        bullets: [
            "Du kannst nicht aufstehen, wenn dir nicht genügend Bewegung bleibt oder wenn deine Geschwindigkeit 0 ist."
        ]
    },
    {
        title: "Hochsprung",
        optional: "Standardregel",
        icon: "wingfoot",
        subtitle: "Höhe: 3 + STÄ-Mod",
        description: "Höhe: 3 + STÄ-Mod",
        reference: "PHB, S. 182.",
        bullets: [
            "Du springst eine Anzahl von Fuß in die Höhe gleich <b>3 + deinem Stärkemodifikator</b>, wenn du dich unmittelbar vor dem Sprung mindestens 10 Fuß zu Fuß bewegst.",
            "Bei einem Hochsprung aus dem Stand springst du nur die Hälfte dieser Entfernung.",
            "Du kannst während des Sprungs die Arme um die Hälfte deiner Körpergröße über dich hinaus strecken.",
            "Unter Umständen kann die SL dir erlauben, einen Stärke- (Athletik-)Wurf zu machen, um höher zu springen als gewöhnlich."
        ]
    },
    {
        title: "Weitsprung",
        optional: "Standardregel",
        icon: "wingfoot",
        subtitle: "Weite: STÄ-Wert",
        description: "Kosten: 1,5m pro 1,5m",
        reference: "PHB, S. 182.",
        bullets: [
            "Du springst eine Anzahl von Fuß bis zu deinem <b>Stärkewert</b>, wenn du dich unmittelbar vor dem Sprung mindestens 10 Fuß (Anlauf) zu Fuß bewegst.",
            "Bei einem Weitsprung aus dem Stand springst du nur die Hälfte dieser Entfernung.",
            "Kann einen SG-10-Stärke- (Athletik-)Wurf erfordern, um ein niedriges Hindernis zu überwinden (nicht höher als ein Viertel der Sprungweite). Bei Misslingen prallst du gegen das Hindernis.",
            "Kann einen SG-10-Geschicklichkeits- (Akrobatik-)Wurf erfordern, um in schwierigem Gelände auf den Füßen zu landen. Bei Misslingen landest du liegend."
        ]
    },
    {
        title: "Improvisieren",
        optional: "Standardregel",
        icon: "juggler",
        subtitle: "Jeder Trick, der nicht auf dieser Liste steht",
        description: "Führe jede Bewegung oder jeden Trick aus, den du dir vorstellen kannst",
        bullets: [
            "Wenn du eine Bewegungsart beschreibst, die in den Regeln nicht behandelt wird, sagt dir die SL, ob sie möglich ist und welchen Wurf du ggf. machen musst, um Erfolg oder Misserfolg zu bestimmen."
        ]
    },
    {
        title: "Schwieriges Gelände",
        optional: "Standardregel",
        icon: "stone-pile",
        subtitle: "Kostenmodifikator: +1,5m pro 1,5m",
        reference: "PHB, S. 182.",
        description: "Bewegung in schwierigem Gelände kostet zusätzlich 1,5m pro 1,5m Bewegung",
        bullets: [
        ]
    },
    {
        title: "Bewegung beim Ringen",
        optional: "Standardregel",
        icon: "grab",
        subtitle: "Modifikator: Geschwindigkeit halbiert",
        description: "Ziehe oder trage die gerungene Kreatur mit dir",
        reference: "PHB, S. 195.",
        bullets: [
            "Wenn du dich bewegst, während du eine andere Kreatur ringst, ist deine Geschwindigkeit halbiert, es sei denn, die Kreatur ist zwei oder mehr Größenkategorien kleiner als du.",
            "Siehe die Aktion Angriff, um zu erfahren, wie man eine Kreatur ringt."
        ]
    },
    {
        title: "Aufsitzen/Absitzen",
        optional: "Standardregel",
        icon: "horse-head",
        subtitle: "Kosten: halbe Bewegungsrate",
        description: "Steige auf oder ab von einer Kreatur innerhalb von 5 Fuß",
        reference: "PHB, S. 198.",
        bullets: [
            "Einmal während deiner Bewegung kannst du auf eine Kreatur innerhalb von 5 Fuß auf- oder absteigen. Das kostet die Hälfte deiner Bewegung.",
            "Du kannst nicht auf- oder absteigen, wenn dir nicht genügend Bewegung bleibt oder wenn deine Geschwindigkeit 0 ist.",
            "Wenn ein Effekt dein Reittier gegen seinen Willen bewegt, während du darauf sitzt, oder wenn du liegend geworfen wirst, musst du einen SG-10-Geschicklichkeitsrettungswurf bestehen oder vom Reittier fallen und liegend in einem Feld innerhalb von 5 Fuß landen.",
            "Wenn dein Reittier liegend geworfen wird, kannst du deine Reaktion nutzen, um beim Sturz abzuspringen und auf den Füßen zu landen. Andernfalls fällst du liegend in einem Feld innerhalb von 5 Fuß neben dem Reittier."
        ]
    }    
]
