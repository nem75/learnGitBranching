exports.level = {
  "goalTreeString": "{\"branches\":{\"master\":{\"target\":\"C6\",\"id\":\"master\",\"remoteTrackingBranchID\":\"o/master\"},\"o/master\":{\"target\":\"C6\",\"id\":\"o/master\",\"remoteTrackingBranchID\":null},\"issue\":{\"target\":\"C5\",\"id\":\"issue\",\"remoteTrackingBranchID\":null}},\"commits\":{\"C0\":{\"parents\":[],\"id\":\"C0\",\"rootCommit\":true},\"C1\":{\"parents\":[\"C0\"],\"id\":\"C1\"},\"C2\":{\"parents\":[\"C1\"],\"id\":\"C2\"},\"C3\":{\"parents\":[\"C2\"],\"id\":\"C3\"},\"C4\":{\"parents\":[\"C1\",\"C3\"],\"id\":\"C4\"},\"C5\":{\"parents\":[\"C3\"],\"id\":\"C5\"},\"C6\":{\"parents\":[\"C1\",\"C5\"],\"id\":\"C6\"}},\"HEAD\":{\"target\":\"master\",\"id\":\"HEAD\"},\"originTree\":{\"branches\":{\"master\":{\"target\":\"C6\",\"id\":\"master\",\"remoteTrackingBranchID\":null}},\"commits\":{\"C0\":{\"parents\":[],\"id\":\"C0\",\"rootCommit\":true},\"C1\":{\"parents\":[\"C0\"],\"id\":\"C1\"},\"C2\":{\"parents\":[\"C1\"],\"id\":\"C2\"},\"C3\":{\"parents\":[\"C2\"],\"id\":\"C3\"},\"C5\":{\"parents\":[\"C3\"],\"id\":\"C5\"},\"C6\":{\"parents\":[\"C1\",\"C5\"],\"id\":\"C6\"}},\"HEAD\":{\"target\":\"master\",\"id\":\"HEAD\"}}}",
  "solutionCommand": "git checkout master;git reset HEAD^;git merge issue --no-ff;git push",
  "startTree": "{\"branches\":{\"master\":{\"target\":\"C4\",\"id\":\"master\",\"remoteTrackingBranchID\":\"o/master\"},\"o/master\":{\"target\":\"C1\",\"id\":\"o/master\",\"remoteTrackingBranchID\":null},\"issue\":{\"target\":\"C5\",\"id\":\"issue\",\"remoteTrackingBranchID\":null}},\"commits\":{\"C0\":{\"parents\":[],\"id\":\"C0\",\"rootCommit\":true},\"C1\":{\"parents\":[\"C0\"],\"id\":\"C1\"},\"C2\":{\"parents\":[\"C1\"],\"id\":\"C2\"},\"C3\":{\"parents\":[\"C2\"],\"id\":\"C3\"},\"C4\":{\"parents\":[\"C1\",\"C3\"],\"id\":\"C4\"},\"C5\":{\"parents\":[\"C3\"],\"id\":\"C5\"}},\"HEAD\":{\"target\":\"issue\",\"id\":\"HEAD\"},\"originTree\":{\"branches\":{\"master\":{\"target\":\"C1\",\"id\":\"master\",\"remoteTrackingBranchID\":null}},\"commits\":{\"C0\":{\"parents\":[],\"id\":\"C0\",\"rootCommit\":true},\"C1\":{\"parents\":[\"C0\"],\"id\":\"C1\"}},\"HEAD\":{\"target\":\"master\",\"id\":\"HEAD\"}}}",
  "compareOnlyMasterHashAgnostic": false,
  "disabledMap": {},
  "name": {
    "de_DE": "Reset - das Undo für Lokales"
  },
  "hint": {
    "de_DE": "Probier mal nach dem Push den Merge zu resetten, neue Änderungen zu machen, und das zu pushen."
  },
  "startDialog": {
    "de_DE": {
      "childViews": [
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "## Reset - das Undo für Lokales",
              "",
              "Reset ist super wenn du einen Commit zurücknehmen willst. Oder 5. Oder 1000. Mit seinen drei wichtigsten Schaltern kannst du beeinflussen, was mit den Änderungen in den Commits gemacht werden soll, die zwischen aktueller Position und dem Commit-Ziel liegen:",
              "",
              "* `--hard` verwirft alle Änderungen,",
              "* `--mixed` übernimmt die Änderungen in die Arbeitskopie (der Default im echten Git),",
              "* `--soft` übernimmt die Änderungen in die Staging Area.",
              "",
              "Leider können wir diese Feinheiten in der Umgebung von _Learn Git Branching_ nicht durchspielen, da hier keine Dateioperationen abgebildet sind. Die einzig sinnvolle Option ist hier deshalb `git reset --hard`."
            ]
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "## Der Haken",
              "",
              "Was gepusht ist, ist gepusht. Du kannst dich natürlich in deinem lokalen Git-Repository auch fröhlich durch bereits gepushte Commits resetten. Je nach dem was du vor hast, kann das sogar sinnvoll sein.",
              "",
              "Aber sobald wieder etwas gepusht werden soll, muss es in Einklang mit dem gebracht werden, was schon auf dem Server ist. Einfach mal drei Commits hinter den remote HEAD resetten und dann pushen geht also nicht.",
              "",
              "Zum Glück. Wär blöd für die anderen Kollegen. Schauen wir mal _wie_ blöd:"
            ]
          }
        },
        {
          "type": "GitDemonstrationView",
          "options": {
            "beforeMarkdowns": [
              "Ein lokales und ein entferntes Repository. Beide auf demselben Stand. Soweit so gut. Jetzt springen wir lokal mal einen Commit zurück und machen dann einen neuen. Und dann pushen wir, da kann ja keiner was gegen haben."
            ],
            "afterMarkdowns": [
              "Oder auch doch. Ok, das war klar. Lokal ist `C1` nicht mehr im `master`, also kann Git den Push nicht zulassen."
            ],
            "command": "git reset master^; git ci; git push",
            "beforeCommand": "git clone"
          }
        },
        {
          "type": "GitDemonstrationView",
          "options": {
            "beforeMarkdowns": [
              "Na dann schieben wir, nur um nochmal zu zeigen wie doof _das_ ist, ein `git pull` und `git push` hinterher."
            ],
            "afterMarkdowns": [
              "\"Hurra!\" Alles wieder im Einklang. Das kannst du schon so machen, aber dann ist es halt sch...lecht."
            ],
            "command": "git pull; git push",
            "beforeCommand": "git clone; git reset C0; git ci"
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "Das war also eine wenig sinnvolle Anwengund von `git reset`. Zum Glück gibt es auch sinnvolle:",
              "",
              "In diesem Level hast du einen lokalen Branch für ein Issue mit zwei Commits. Er ist in den `master` gemerged, eigentlich alles gut.",
              "",
              "Dann fällt dir ein, dass du noch was vergessen hast. Also wieder in den Branch gewechselt und dort noch schnell etwas committet.",
              "",
              "Jetzt könntest du einfach noch mal mergen. Aber eigentlich brauchen die Kollegen keinen zweiten Merge Commit auf dem Server.",
              "",
              "## Ziel des Levels",
              "",
              "Also: ersten Merge Commit per `git reset` rückgängig machen und neu mergen, dann pushen."
            ]
          }
        }
      ]
    }
  }
};
