exports.level = {
  "goalTreeString": "%7B%22branches%22%3A%7B%22master%22%3A%7B%22target%22%3A%22C3%27%22%2C%22id%22%3A%22master%22%2C%22remoteTrackingBranchID%22%3A%22o/master%22%7D%2C%22o/master%22%3A%7B%22target%22%3A%22C3%27%22%2C%22id%22%3A%22o/master%22%2C%22remoteTrackingBranchID%22%3Anull%7D%2C%22issue%22%3A%7B%22target%22%3A%22C3%27%22%2C%22id%22%3A%22issue%22%2C%22remoteTrackingBranchID%22%3Anull%7D%7D%2C%22commits%22%3A%7B%22C0%22%3A%7B%22parents%22%3A%5B%5D%2C%22id%22%3A%22C0%22%2C%22rootCommit%22%3Atrue%7D%2C%22C1%22%3A%7B%22parents%22%3A%5B%22C0%22%5D%2C%22id%22%3A%22C1%22%7D%2C%22C3%22%3A%7B%22parents%22%3A%5B%22C1%22%5D%2C%22id%22%3A%22C3%22%7D%2C%22C2%22%3A%7B%22parents%22%3A%5B%22C1%22%5D%2C%22id%22%3A%22C2%22%7D%2C%22C3%27%22%3A%7B%22parents%22%3A%5B%22C2%22%5D%2C%22id%22%3A%22C3%27%22%7D%7D%2C%22tags%22%3A%7B%7D%2C%22HEAD%22%3A%7B%22target%22%3A%22master%22%2C%22id%22%3A%22HEAD%22%7D%2C%22originTree%22%3A%7B%22branches%22%3A%7B%22master%22%3A%7B%22target%22%3A%22C3%27%22%2C%22id%22%3A%22master%22%2C%22remoteTrackingBranchID%22%3Anull%7D%7D%2C%22commits%22%3A%7B%22C0%22%3A%7B%22parents%22%3A%5B%5D%2C%22id%22%3A%22C0%22%2C%22rootCommit%22%3Atrue%7D%2C%22C1%22%3A%7B%22parents%22%3A%5B%22C0%22%5D%2C%22id%22%3A%22C1%22%7D%2C%22C2%22%3A%7B%22parents%22%3A%5B%22C1%22%5D%2C%22id%22%3A%22C2%22%7D%2C%22C3%27%22%3A%7B%22parents%22%3A%5B%22C2%22%5D%2C%22id%22%3A%22C3%27%22%7D%7D%2C%22tags%22%3A%7B%7D%2C%22HEAD%22%3A%7B%22target%22%3A%22master%22%2C%22id%22%3A%22HEAD%22%7D%7D%7D",
  "solutionCommand": "git checkout master;git pull;git rebase master issue;git checkout master;git merge issue;git push",
  "startTree": "{\"branches\":{\"master\":{\"target\":\"C1\",\"id\":\"master\",\"remoteTrackingBranchID\":\"o/master\"},\"o/master\":{\"target\":\"C1\",\"id\":\"o/master\",\"remoteTrackingBranchID\":null},\"issue\":{\"target\":\"C3\",\"id\":\"issue\",\"remoteTrackingBranchID\":null}},\"commits\":{\"C0\":{\"parents\":[],\"id\":\"C0\",\"rootCommit\":true},\"C1\":{\"parents\":[\"C0\"],\"id\":\"C1\"},\"C3\":{\"parents\":[\"C1\"],\"id\":\"C3\"}},\"tags\":{},\"HEAD\":{\"target\":\"issue\",\"id\":\"HEAD\"},\"originTree\":{\"branches\":{\"master\":{\"target\":\"C2\",\"id\":\"master\",\"remoteTrackingBranchID\":null}},\"commits\":{\"C0\":{\"parents\":[],\"id\":\"C0\",\"rootCommit\":true},\"C1\":{\"parents\":[\"C0\"],\"id\":\"C1\"},\"C2\":{\"parents\":[\"C1\"],\"id\":\"C2\"}},\"tags\":{},\"HEAD\":{\"target\":\"master\",\"id\":\"HEAD\"}}}",
  "name": {
    "de_DE": "Kein Merge dank Rebase"
  },
  "hint": {
    "de_DE": "Du kannst auch pull --rebase machen, aber issue und master sollen am Ende auf demselben Stand sein!"
  },
  "startDialog": {
    "de_DE": {
      "childViews": [
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "## Kein Merge dank Rebase",
              "",
              "Nun haben wir alles durch. Du machst immer fesch Branches für deine Änderungen, du weißt wann du `--no-ff` benutzen sollst (wenn der Branch mehr als einen Commit hat) und wann nicht (wenn er nur einen hat) -- da kann doch nichts mehr kommen, oder?",
              "",
              "Leider arbeiten wir hier mit mehreren Leuten. Da kann immer was kommen. Und das kommt auch.",
              "",
              "Lass uns mal ansehen was passiert, wenn du deinen Single-Commit-Branch reintegrieren willst ohne einen Merge-Commit zu erzeugen, aber ein Kollege dir schon neue Änderungen auf den Server geschoben hat ..."
            ]
          }
        },
        {
          "type": "GitDemonstrationView",
          "options": {
            "beforeMarkdowns": [
              "Du hast soweit alles richtig gemacht: `issue` ist zurück in den `master` gemerged, es gab einen fast-forward, alles supi.",
              "",
              "Leider geht das `git push` nicht, weil es neue Änderungen auf dem Server gibt. Also probierst du:"
            ],
            "afterMarkdowns": [
              "Tja. Den Merge beim Integrieren von `issue` hast du erfolgreich vermieden, aber das hier war jetzt nicht so berühmt. Versuchen wir's anders ..."
            ],
            "command": "git pull; git push",
            "beforeCommand": "git clone; git fakeTeamwork; git co -b issue; git co issue; git ci; git co master; git merge issue"
          }
        },
        {
          "type": "GitDemonstrationView",
          "options": {
            "beforeMarkdowns": [
              "Nochmal von vorn. Diesmal machst du's besser: vor dem Merge des lokalen Branches `issue` erst mal den `master` per `git pull` aktualisieren -- immer eine gute Idee."
            ],
            "afterMarkdowns": [
              "Ja blöd. Vom Ansatz her besser, aber im Ergebnis immer noch unschön ... wo kommt denn der Merge schon wieder her?"
            ],
            "command": "git pull; git merge issue; git push",
            "beforeCommand": "git clone; git fakeTeamwork; git co -b issue; git co issue; git ci; git co master"
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "## Divergenzen, Divergenzen",
              "",
              "In diesen beiden Beispielen hat es keinen fast-forward beim Mergen von `issue` in `master` gegeben. Wieso?",
              "",
              "Naja, weil es nicht geht. Git kann den `master` nur \"vorspulen\", wenn `master` ein Vorfahr von `issue` ist. Nach dem Pull war es das aber jeweils nicht mehr, da hatten sich die Wege von `issue` und `master` getrennt.",
              "",
              "Wir nennen das auch: die Branches sind divergent. Und dann ist nix mit fast-forward.",
              "",
              "Noch eine Bemerkung zum ersten Beispiel: was wir da gesehen haben, war wieder der \"PushPull\", der uns schon im vorherigen Level begegnet ist. Also ein \"achMenschDerPushKlapptNichtDannPullIchMalUndPushDannGleich\"-Vorgang, der _IMMER_ zu sehr unnötigen Merge Commits und zu hässlicher History auf dem Server führt. Vermeide ihn wo immer es nur geht.",
              "",
              "So, jetzt zum richtigen Weg:"
            ]
          }
        },
        {
          "type": "GitDemonstrationView",
          "options": {
            "beforeMarkdowns": [
              "Um den fast-forward zu bekommen, muss nach dem Pull der `master` wieder zu einem direkten Vorfahr von `issue` werden. Wie wir das hinkriegen? Mit einem Rebase!"
            ],
            "afterMarkdowns": [
              "Und da ist er endlich! Wenn man jetzt pusht, haben wir eine wunderbar übersichtliche History. Aber was, wenn ausgerechnet nach dem Merge noch eine neue Änderung auf den Server kommt?"
            ],
            "command": "git rebase master issue; git co master; git merge issue",
            "beforeCommand": "git clone; git fakeTeamwork; git co -b issue; git co issue; git ci; git co master; git pull"
          }
        },
        {
          "type": "GitDemonstrationView",
          "options": {
            "beforeMarkdowns": [
              "Alles richtig gemacht, alles sieht super aus, und was ist? `git push` -- nänänäää. Wieder neue Änderungen auf dem Server, wieder nix. OCHMENSCHEYKEINBOCKMEHR.",
              "",
              "Ruhig Blut. Die Abhilfe: letzten Schritt (den Merge/Fast-Forward) zurücknehmen, und nochmal Pull + Rebase:"
            ],
            "afterMarkdowns": [
              "Und schon kannst du den Merge wiederholen, mit demselben schönen Ergebnis. Dass du dann bestimmt auch endlich pushen kannst. Wenn nicht grad 10:05 ist. Dann trink erst mal 'nen Kaffee. Oder wiederhol diesen Schritt hier, bis es klappt."
            ],
            "command": "git reset master^ --hard; git pull; git rebase master issue",
            "beforeCommand": "git clone; git fakeTeamwork; git co -b issue; git co issue; git ci; git co master; git pull; git rebase master issue; git co master; git merge issue; git fakeTeamwork"
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "Aber so kompliziert wie im letzten Beispiel wird's in diesem Level gar nicht.",
              "",
              "## Ziel des Levels",
              "",
              "* pullen",
              "* `master` wieder zum Vorfahr von `issue` machen",
              "* `issue` reintegrieren",
              "* pushen",
              "",
              "Viel Erfolg!",
              "",
              "",
              ""
            ]
          }
        }
      ]
    }
  }
};
