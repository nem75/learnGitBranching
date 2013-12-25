exports.level = {
"goalTreeString": "%7B%22branches%22%3A%7B%22master%22%3A%7B%22target%22%3A%22C8%22%2C%22id%22%3A%22master%22%2C%22remoteTrackingBranchID%22%3A%22o/master%22%7D%2C%22o/master%22%3A%7B%22target%22%3A%22C8%22%2C%22id%22%3A%22o/master%22%2C%22remoteTrackingBranchID%22%3Anull%7D%2C%22issue%22%3A%7B%22target%22%3A%22C7%27%22%2C%22id%22%3A%22issue%22%2C%22remoteTrackingBranchID%22%3Anull%7D%7D%2C%22commits%22%3A%7B%22C0%22%3A%7B%22parents%22%3A%5B%5D%2C%22id%22%3A%22C0%22%2C%22rootCommit%22%3Atrue%7D%2C%22C1%22%3A%7B%22parents%22%3A%5B%22C0%22%5D%2C%22id%22%3A%22C1%22%7D%2C%22C2%22%3A%7B%22parents%22%3A%5B%22C1%22%5D%2C%22id%22%3A%22C2%22%7D%2C%22C4%22%3A%7B%22parents%22%3A%5B%22C2%22%5D%2C%22id%22%3A%22C4%22%7D%2C%22C3%22%3A%7B%22parents%22%3A%5B%22C1%22%5D%2C%22id%22%3A%22C3%22%7D%2C%22C7%22%3A%7B%22parents%22%3A%5B%22C4%22%5D%2C%22id%22%3A%22C7%22%7D%2C%22C5%22%3A%7B%22parents%22%3A%5B%22C3%22%5D%2C%22id%22%3A%22C5%22%7D%2C%22C6%22%3A%7B%22parents%22%3A%5B%22C5%22%5D%2C%22id%22%3A%22C6%22%7D%2C%22C2%27%22%3A%7B%22parents%22%3A%5B%22C6%22%5D%2C%22id%22%3A%22C2%27%22%7D%2C%22C4%27%22%3A%7B%22parents%22%3A%5B%22C2%27%22%5D%2C%22id%22%3A%22C4%27%22%7D%2C%22C7%27%22%3A%7B%22parents%22%3A%5B%22C4%27%22%5D%2C%22id%22%3A%22C7%27%22%7D%2C%22C8%22%3A%7B%22parents%22%3A%5B%22C6%22%2C%22C7%27%22%5D%2C%22id%22%3A%22C8%22%7D%7D%2C%22tags%22%3A%7B%7D%2C%22HEAD%22%3A%7B%22target%22%3A%22master%22%2C%22id%22%3A%22HEAD%22%7D%2C%22originTree%22%3A%7B%22branches%22%3A%7B%22master%22%3A%7B%22target%22%3A%22C8%22%2C%22id%22%3A%22master%22%2C%22remoteTrackingBranchID%22%3Anull%7D%7D%2C%22commits%22%3A%7B%22C0%22%3A%7B%22parents%22%3A%5B%5D%2C%22id%22%3A%22C0%22%2C%22rootCommit%22%3Atrue%7D%2C%22C1%22%3A%7B%22parents%22%3A%5B%22C0%22%5D%2C%22id%22%3A%22C1%22%7D%2C%22C3%22%3A%7B%22parents%22%3A%5B%22C1%22%5D%2C%22id%22%3A%22C3%22%7D%2C%22C5%22%3A%7B%22parents%22%3A%5B%22C3%22%5D%2C%22id%22%3A%22C5%22%7D%2C%22C6%22%3A%7B%22parents%22%3A%5B%22C5%22%5D%2C%22id%22%3A%22C6%22%7D%2C%22C2%27%22%3A%7B%22parents%22%3A%5B%22C6%22%5D%2C%22id%22%3A%22C2%27%22%7D%2C%22C4%27%22%3A%7B%22parents%22%3A%5B%22C2%27%22%5D%2C%22id%22%3A%22C4%27%22%7D%2C%22C7%27%22%3A%7B%22parents%22%3A%5B%22C4%27%22%5D%2C%22id%22%3A%22C7%27%22%7D%2C%22C8%22%3A%7B%22parents%22%3A%5B%22C6%22%2C%22C7%27%22%5D%2C%22id%22%3A%22C8%22%7D%7D%2C%22tags%22%3A%7B%7D%2C%22HEAD%22%3A%7B%22target%22%3A%22master%22%2C%22id%22%3A%22HEAD%22%7D%7D%7D",
  "solutionCommand": "git checkout master;git pull;git rebase master issue;git checkout master;git merge issue --no-ff;git push",
  "startTree": "{\"branches\":{\"master\":{\"target\":\"C3\",\"id\":\"master\",\"remoteTrackingBranchID\":\"o/master\"},\"o/master\":{\"target\":\"C3\",\"id\":\"o/master\",\"remoteTrackingBranchID\":null},\"issue\":{\"target\":\"C7\",\"id\":\"issue\",\"remoteTrackingBranchID\":null}},\"commits\":{\"C0\":{\"parents\":[],\"id\":\"C0\",\"rootCommit\":true},\"C1\":{\"parents\":[\"C0\"],\"id\":\"C1\"},\"C2\":{\"parents\":[\"C1\"],\"id\":\"C2\"},\"C4\":{\"parents\":[\"C2\"],\"id\":\"C4\"},\"C3\":{\"parents\":[\"C1\"],\"id\":\"C3\"},\"C7\":{\"parents\":[\"C4\"],\"id\":\"C7\"}},\"tags\":{},\"HEAD\":{\"target\":\"issue\",\"id\":\"HEAD\"},\"originTree\":{\"branches\":{\"master\":{\"target\":\"C6\",\"id\":\"master\",\"remoteTrackingBranchID\":null}},\"commits\":{\"C0\":{\"parents\":[],\"id\":\"C0\",\"rootCommit\":true},\"C1\":{\"parents\":[\"C0\"],\"id\":\"C1\"},\"C3\":{\"parents\":[\"C1\"],\"id\":\"C3\"},\"C5\":{\"parents\":[\"C3\"],\"id\":\"C5\"},\"C6\":{\"parents\":[\"C5\"],\"id\":\"C6\"}},\"tags\":{},\"HEAD\":{\"target\":\"master\",\"id\":\"HEAD\"}}}",
  "compareOnlyMasterHashAgnostic": false,
  "disabledMap": {},
  "name": {
    "de_DE": "Kleine Änderung wird größer: Branch aktuell halten"
  },
  "hint": {
    "de_DE": "Wenn man Änderungen von übergeordneten Branches wie master in rein lokale Branches holen will, ist git rebase immer ok."
  },
  "startDialog": {
    "de_DE": {
      "childViews": [
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "## Kleine Änderung wird größer: Branch aktuell halten",
              "",
              "Es lässt sich nicht immer vermeiden: der Fünfminüter, den du hinter Issue XY vermutet hast, entpuppt sich als Mini-Projekt und zieht sich über zwei Wochen. Dumme Sache, aber so ist das halt.",
              "",
              "Während du also so an dem Issue in seinem lokalen Branch arbeitest, kommen in den `master` mehr und mehr neue Änderungen rein.",
              "",
              "Die solltest du immer mal wieder -- spätestens aber bevor du deinen Issue-Branch in den `master` reintegrierst! -- in den Branch holen. Das führt dazu, dass du eventuelle Konflikte frühzeitig erkennst und beheben kannst. Und es sorgt für eine schmerzfreie Reintegration in den `master`.",
              "",
              "Der beste Weg, um einen lokalen Branch aktuell zu halten, ist `git rebase`. Es sorgt für eine lineare History und vermeidet Merge-Commits, die nicht wirklich nötig sind. Ich demonstriere das mal gerade:"
            ]
          }
        },
        {
          "type": "GitDemonstrationView",
          "options": {
            "beforeMarkdowns": [
              "Branch `issue` hat Änderungen, der `master` auf dem Server hat einige neue. Die wollen wir auch im Branch haben:"
            ],
            "afterMarkdowns": [
              "Und da sind sie. Die History von `issue` ist verändert worden (die Commits aus `master` gehören jetzt dazu und die anderen wurden kopiert), aber das ist in Ordnung. Da der Branch lokal ist und ihn außer dir niemand nutzt, kannst du da die History so oft verändern wie du willst."
            ],
            "command": "git co master; git pull; git rebase master issue",
            "beforeCommand": "git clone; git co -b issue; git ci; git fakeTeamwork; git ci"
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "## History Verändering",
              "",
              "Kurze Zwischenbemerkung: die Befehle `git rebase` und `git reset` verändern die History eines Branches. Und zwar nicht nur in dem Sinne wie `git commit`, das einfach nur immer wieder etwas an einen Branch anhängt. Sondern _rückwirkend_, indem sie den aktuellen und die vergangenen Commits eines Branches verändern.",
              "",
              "Daraus ergibt sich, dass du einen Branch, der auch auf dem Server liegt, _NIE_ mit Rebase oder Reset verändern solltest. Das führt zwangsläufig dazu, dass deine History von der auf dem Server abweicht. Und das führt, wie du ja mittlerweile weißt, unweigerlich dazu, dass Git dich nicht mehr pushen lässt. Spätestens dann musst du deine Änderungen, die du durch Rebase oder Reset gemacht hast, wieder zurücknehmen.",
              "",
              "Oder du pullst dann einfach nochmal und pushst dann -- BITTE NICHT. Aber das zeige ich alles noch einmal ausführlich in einem späteren Level."
            ]
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "Für jetzt reicht es dir zu merken: Änderungen von \"oben\" (z.B. `master`) nach \"unten\" in einen _lokalen_ Branch kannst du gerne per Rebase transportieren.",
              "",
              "## Ziel des Levels",
              "",
              "* `master` aktualisieren",
              "* Änderungen in den Branch bringen",
              "* Branch reintegrieren und pushen",
              "",
              "Viel Erfolg!"
            ]
          }
        }
      ]
    }
  }
};
