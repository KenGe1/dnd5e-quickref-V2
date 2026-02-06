data_movement = [
    {
        title: "Bewegen",
        optional: "Standardregel",
        icon: "run",
        subtitle: "Kosten: 1,5m pro 1,5m",
        description: "Bewegungskosten: 1,5m pro 1,5m Bewegung",
        reference: "PHB, S. 24-25, 374.",
        bullets: [
            "Wenn du mehr als eine Bewegungsrate hast, etwa deine Gehgeschwindigkeit und eine Fluggeschwindigkeit, kannst du während deiner Bewegung zwischen ihnen wechseln. Jedes Mal, wenn du wechselst, ziehst du die bereits zurückgelegte Strecke von der neuen Geschwindigkeit ab.",
            "Du kannst den Raum eines Verbündeten, einer Kreatur mit dem Zustand <i>Handlungsunfähig</i>, einer winzigen Kreatur oder einer Kreatur, die zwei Größenkategorien größer oder kleiner ist als du, durchqueren.",
            "Der Raum einer anderen Kreatur ist für dich schwieriges Gelände, außer die Kreatur ist winzig oder dein Verbündeter.",
            "Du kannst deine Bewegung nicht freiwillig in einem Raum beenden, der von einer anderen Kreatur besetzt ist. Beendest du aus irgendeinem Grund eine Runde in einem Raum mit einer anderen Kreatur, erhältst du den Zustand <i>Liegend</i>, es sei denn, du bist winzig oder größer als die andere Kreatur."
        ]
    },
    {
        title: "Klettern",
        optional: "Standardregel",
        icon: "crags",
        subtitle: "Kosten: +1,5m pro 1,5m",
        description: "Bewegungskosten: jeder Fuß Bewegung kostet 1 zusätzlichen Fuß",
        reference: "PHB, S. 363.",
        bullets: [
            "Jeder Fuß Bewegung kostet 1 zusätzlichen Fuß Bewegung, solange du kletterst. Wenn du eine Klettergeschwindigkeit hast, ignorierst du diese Zusatzkosten.",
            "Kann bei schwierigen Kletterstellen einen Stärke- (Athletik-)Wurf erfordern."
        ]
    },
    {
        title: "Schwimmen",
        optional: "Standardregel",
        icon: "at-sea",
        subtitle: "Kosten: +1,5m pro 1,5m",
        description: "Bewegungskosten: jeder Fuß Bewegung kostet 1 zusätzlichen Fuß",
        reference: "PHB, S. 376.",
        bullets: [
            "Jeder Fuß Bewegung kostet 1 zusätzlichen Fuß Bewegung, solange du schwimmst. Wenn du eine Schwimmgeschwindigkeit hast, ignorierst du diese Zusatzkosten.",
            "Kann einen Stärke- (Athletik-)Wurf erfordern, wenn du in rauer See schwimmst."
        ]
    },
    {
        title: "Fliegen",
        optional: "Standardregel",
        icon: "angel-wings",
        subtitle: "Kosten: 1,5m pro 1,5m",
        description: "Bewegungskosten: 1,5m pro 1,5m Flug",
        reference: "PHB, S. 367.",
        bullets: [
            "Solange du eine Fluggeschwindigkeit hast, kannst du in der Luft bleiben, bis du landest, fällst oder stirbst.",
            "Während du fliegst, fällst du, wenn du den Zustand <i>Handlungsunfähig</i> oder <i>Liegend</i> hast oder wenn deine Fluggeschwindigkeit auf 0 reduziert wird.",
            "Du kannst in diesen Umständen in der Luft bleiben, wenn du schweben kannst."
        ]
    },
    {
        title: "Sich fallen lassen",
        optional: "Standardregel",
        icon: "falling",
        subtitle: "Kosten: 0m",
        description: "Bewegungskosten: 0m (frei)",
        reference: "PHB, S. 25, 372.",
        bullets: [
            "Du kannst dich fallen lassen, ohne Bewegungsrate zu verbrauchen.",
            "Um dich liegend zu bewegen, musst du kriechen oder Magie wie Teleportation nutzen.",
            "Sich fallen lassen verleiht den Zustand <i>Liegend</i>."
        ]
    },
    {
        title: "Kriechen",
        optional: "Standardregel",
        icon: "crawl",
        subtitle: "Kosten: +1,5m pro 1,5m",
        description: "Bewegungskosten: jeder Fuß Bewegung kostet 1 zusätzlichen Fuß",
        reference: "PHB, S. 364.",
        bullets: [
            "Jeder Fuß Bewegung kostet 1 zusätzlichen Fuß Bewegung, solange du kriechst."
        ]
    },
    {
        title: "Aufstehen",
        optional: "Standardregel",
        icon: "strong",
        subtitle: "Kosten: halbe Bewegungsrate",
        description: "Bewegungskosten: die Hälfte deiner Geschwindigkeit, abgerundet.",
        reference: "PHB, S. 372.",
        bullets: [
            "Du kannst nicht aufstehen, wenn dir nicht genügend Bewegung bleibt oder wenn deine Geschwindigkeit 0 ist."
        ]
    },
    {
        title: "Hochsprung",
        optional: "Standardregel",
        icon: "wingfoot",
        subtitle: "Kosten: 1,5m",
        description: "Bewegungskosten: 1,5m pro 1,5m Sprung",
        reference: "PHB, S. 368.",
        bullets: [
            "Du springst eine Anzahl von Fuß in die Höhe gleich <b>3 + deinem Stärkemodifikator</b>, wenn du dich unmittelbar vor dem Sprung mindestens 10 Fuß zu Fuß bewegst.",
            "Bei einem Hochsprung aus dem Stand springst du nur die Hälfte dieser Entfernung.",
            "Du kannst während des Sprungs die Arme um die Hälfte deiner Körpergröße über dich hinaus strecken. Damit erreichst du eine Distanz gleich der Sprunghöhe plus 1,5-mal deiner Körpergröße.",
            "Unter Umständen kann die SL dir erlauben, einen Stärke- (Athletik-)Wurf zu machen, um höher zu springen als gewöhnlich."
        ]
    },
    {
        title: "Weitsprung",
        optional: "Standardregel",
        icon: "wingfoot",
        subtitle: "Kosten: 1,5m pro 1,5m",
        description: "Bewegungskosten: 1,5m pro 1,5m Sprung",
        reference: "PHB, S. 370.",
        bullets: [
            "Du springst eine Anzahl von Fuß bis zu deinem <b>Stärkewert</b>, wenn du dich unmittelbar vor dem Sprung mindestens 10 Fuß zu Fuß bewegst.",
            "Bei einem Weitsprung aus dem Stand springst du nur die Hälfte dieser Entfernung.",
            "Wenn du in schwierigem Gelände landest, musst du einen SG-10-Geschicklichkeits- (Akrobatik-)Wurf bestehen oder erhältst den Zustand <i>Liegend</i>.",
            "Kann einen SG-10-Stärke- (Athletik-)Wurf erfordern, um ein niedriges Hindernis zu überwinden (nicht höher als ein Viertel der Sprungweite). Bei Misslingen prallst du gegen das Hindernis."
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
        reference: "PHB, S. 25, 366.",
        description: "Bewegung in schwierigem Gelände kostet zusätzlich 1,5m pro 1,5m Bewegung",
        bullets: [
            "Jeder Fuß Bewegung kostet 1 zusätzlichen Fuß.",
            "Schwieriges Gelände ist nicht kumulativ; ein Feld ist entweder schwieriges Gelände oder nicht."
        ]
    },
    {
        title: "Bewegung beim Ringen",
        optional: "Standardregel",
        icon: "grab",
        subtitle: "Kosten: +1,5m pro 1,5m",
        description: "Ziehe oder trage die gerungene Kreatur mit dir",
        reference: "PHB, S. 367.",
        bullets: [
            "Wenn du dich bewegst, während du eine andere Kreatur ringst, kostet jeder Fuß Bewegung 1 zusätzlichen Fuß, es sei denn, die gerungene Kreatur ist winzig oder du bist zwei oder mehr Größenkategorien größer als sie."
        ]
    },
    {
        title: "Reisetempo",
        optional: "Standardregel",
        icon: "run",
        subtitle: "Reisen außerhalb des Kampfes",
        description: "Reisetempo für schnelles, normales und langsames Reisen außerhalb des Kampfes.",
        reference: "PHB, S. 20",
        bullets: [
            "Lege eine Marschordnung fest, während ihr reist.",
            "<table><tr><th style='text-align:left'>Tempo</th><th></th><th></th><th>Minute</th><th></th><th></th><th>Stunde</th><th></th><th></th><th>Tag</th></tr><tr><td>Schnell</td><td></td><td></td><td>400 Fuß</td><td></td><td></td><td>4 Meilen</td><td></td><td></td><td>30 Meilen</td></tr><tr><td>Normal</td><td></td><td></td><td>300 Fuß</td><td></td><td></td><td>3 Meilen</td><td></td><td></td><td>24 Meilen</td></tr><tr><td>Langsam</td><td></td><td></td><td>200 Fuß</td><td></td><td></td><td>2 Meilen</td><td></td><td></td><td>18 Meilen</td></tr></table>",
            "<b>Schnelles Reisen</b> gibt Reisenden Nachteil auf Weisheits- (Wahrnehmung- oder Überlebens-)Würfe und Geschicklichkeits- (Heimlichkeit-)Würfe.",
            "<b>Normales Reisen</b> gibt Nachteil auf Geschicklichkeits- (Heimlichkeit-)Würfe.",
            "<b>Langsames Reisen</b> gibt Vorteil auf Weisheits- (Wahrnehmung- oder Überlebens-)Würfe.",
            "Reisende in Wagen, Kutschen oder anderen Landfahrzeugen wählen das Tempo wie gewohnt. Charaktere auf Wasserfahrzeugen sind auf die Geschwindigkeit des Fahrzeugs beschränkt und wählen kein Tempo."
        ]
    }
]
