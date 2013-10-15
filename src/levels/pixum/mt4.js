exports.level = {
  "goalTreeString": "{\"branches\":{\"master\":{\"target\":\"C6\",\"id\":\"master\",\"remoteTrackingBranchID\":\"o/master\"},\"o/master\":{\"target\":\"C6\",\"id\":\"o/master\",\"remoteTrackingBranchID\":null},\"issue\":{\"target\":\"C3\",\"id\":\"issue\",\"remoteTrackingBranchID\":null}},\"commits\":{\"C0\":{\"parents\":[],\"id\":\"C0\",\"rootCommit\":true},\"C1\":{\"parents\":[\"C0\"],\"id\":\"C1\"},\"C2\":{\"parents\":[\"C1\"],\"id\":\"C2\"},\"C3\":{\"parents\":[\"C2\"],\"id\":\"C3\"},\"C4\":{\"parents\":[\"C1\",\"C3\"],\"id\":\"C4\"},\"C5\":{\"parents\":[\"C1\"],\"id\":\"C5\"},\"C6\":{\"parents\":[\"C3\",\"C5\"],\"id\":\"C6\"}},\"HEAD\":{\"target\":\"master\",\"id\":\"HEAD\"},\"originTree\":{\"branches\":{\"master\":{\"target\":\"C6\",\"id\":\"master\",\"remoteTrackingBranchID\":null}},\"commits\":{\"C0\":{\"parents\":[],\"id\":\"C0\",\"rootCommit\":true},\"C1\":{\"parents\":[\"C0\"],\"id\":\"C1\"},\"C5\":{\"parents\":[\"C1\"],\"id\":\"C5\"},\"C2\":{\"parents\":[\"C1\"],\"id\":\"C2\"},\"C3\":{\"parents\":[\"C2\"],\"id\":\"C3\"},\"C6\":{\"parents\":[\"C3\",\"C5\"],\"id\":\"C6\"}},\"HEAD\":{\"target\":\"master\",\"id\":\"HEAD\"}}}",
  "solutionCommand": "git reset --hard HEAD^;git pull;git merge issue --no-ff;git push",
  "startTree": "{\"branches\":{\"master\":{\"target\":\"C4\",\"id\":\"master\",\"remoteTrackingBranchID\":\"o/master\"},\"o/master\":{\"target\":\"C1\",\"id\":\"o/master\",\"remoteTrackingBranchID\":null},\"issue\":{\"target\":\"C3\",\"id\":\"issue\",\"remoteTrackingBranchID\":null}},\"commits\":{\"C0\":{\"parents\":[],\"id\":\"C0\",\"rootCommit\":true},\"C1\":{\"parents\":[\"C0\"],\"id\":\"C1\"},\"C2\":{\"parents\":[\"C1\"],\"id\":\"C2\"},\"C3\":{\"parents\":[\"C2\"],\"id\":\"C3\"},\"C4\":{\"parents\":[\"C1\",\"C3\"],\"id\":\"C4\"}},\"HEAD\":{\"target\":\"master\",\"id\":\"HEAD\"},\"originTree\":{\"branches\":{\"master\":{\"target\":\"C5\",\"id\":\"master\",\"remoteTrackingBranchID\":null}},\"commits\":{\"C0\":{\"parents\":[],\"id\":\"C0\",\"rootCommit\":true},\"C1\":{\"parents\":[\"C0\"],\"id\":\"C1\"},\"C5\":{\"parents\":[\"C1\"],\"id\":\"C5\"}},\"HEAD\":{\"target\":\"master\",\"id\":\"HEAD\"}}}",
  "compareOnlyMasterHashAgnostic": false,
  "disabledMap": {"git rebase": true},
  "hint": {
    "en_US": "`--hard` ist NICHT der Default bei einem `git reset` sondern `--mixed`, auch wenn diese Lernumgebung anderes behauptet."
  },
  "name": {
    "en_US": "MT4: Wenn das Team dreimal pusht"
  },
  "startDialog": {
    "en_US": {
      "childViews": [
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "## MT4: Wenn das Team dreimal pusht",
              "",
              "Egal wie sorgfältig man arbeitet, natürlich passiert es einem trotzdem:",
              "",
              "* man hat brav im `master` ein `git pull` gemacht,",
              "* erst dann seinen Branch in den `master` reintegriert",
              "* und trotzdem schlägt `git push` fehl, weil _GERADEBENMALKURZ_ ein Kollege ebenfalls etwas auf den Server gepusht hat.",
              "",
              "Plöt.",
              "",
              "Und nun?"
            ]
          }
        },
        {
          "type": "GitDemonstrationView",
          "options": {
            "beforeMarkdowns": [
              "## Na dann pull ich halt einfach",
              "",
              "Was soll da schon schief gehen?",
              ""
            ],
            "afterMarkdowns": [
              "Funktionell nichts, aber schön ist anders. So bekommt man einen zusätzlichen und unnötigen Merge-Commit, den man sich auch noch in den Branch holen wird, sollte man mal den `master` in den Branch mergen.",
              "",
              "Bäh."
            ],
            "command": "git pull; git push",
            "beforeCommand": "git clone; git co -b issue; git ci; git co master; git merge issue --no-ff; git fakeTeamwork"
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "## Einen Schritt zurück",
              "",
              "Ein sehr viel ansehnlicheres Ergebnis ergibt sich, wenn man im lokalen `master` einfach den Merge-Commit zurück nimmt, pullt und dann den Merge erneut vornimmt.",
              "",
              "Das Zurücknehmen geht in diesem Fall mit",
              "",
              "`git reset --hard HEAD^`",
              "",
              "Das steht für: setze im aktuellen Branch den Zeiger `HEAD` (der zeigt auf den letzten Commit im aktuellen Branch) auf den Commit vor seiner aktuellen Position und verwerfe alle Änderungen, die dadurch verloren gehen (der Merge-Commit).",
              "",
              "Probier's aus!"
            ]
          }
        }
      ]
    }
  }
};
