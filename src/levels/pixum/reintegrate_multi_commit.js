exports.level = {
  "goalTreeString": "{\"branches\":{\"master\":{\"target\":\"C4\",\"id\":\"master\",\"remoteTrackingBranchID\":null},\"issue\":{\"target\":\"C3\",\"id\":\"issue\",\"remoteTrackingBranchID\":null}},\"commits\":{\"C0\":{\"parents\":[],\"id\":\"C0\",\"rootCommit\":true},\"C1\":{\"parents\":[\"C0\"],\"id\":\"C1\"},\"C2\":{\"parents\":[\"C1\"],\"id\":\"C2\"},\"C3\":{\"parents\":[\"C2\"],\"id\":\"C3\"},\"C4\":{\"parents\":[\"C1\",\"C3\"],\"id\":\"C4\"}},\"tags\":{},\"HEAD\":{\"target\":\"master\",\"id\":\"HEAD\"}}",
  "solutionCommand": "git checkout master;git merge issue --no-ff",
  "startTree": "{\"branches\":{\"master\":{\"target\":\"C1\",\"id\":\"master\",\"remoteTrackingBranchID\":null},\"issue\":{\"target\":\"C3\",\"id\":\"issue\",\"remoteTrackingBranchID\":null}},\"commits\":{\"C0\":{\"parents\":[],\"id\":\"C0\",\"rootCommit\":true},\"C1\":{\"parents\":[\"C0\"],\"id\":\"C1\"},\"C2\":{\"parents\":[\"C1\"],\"id\":\"C2\"},\"C3\":{\"parents\":[\"C2\"],\"id\":\"C3\"}},\"tags\":{},\"HEAD\":{\"target\":\"issue\",\"id\":\"HEAD\"}}",
  "name": {
    "de_DE": "Reintegrieren: mehrere Commits"
  },
  "hint": {
    "de_DE": "Vergiss nicht die Option `--no-ff` anzuhängen"
  },
  "startDialog": {
    "de_DE": {
      "childViews": [
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "## Reintegration: mehrere Commits",
              "",
              "Nachdem du deine Arbeit in einem lokalen Branch, zum Beispiel für ein Issue, abgeschlossen hast, kommt der große Moment wo du diese Änderungen deployen möchtest.",
              "",
              "Soso.",
              "",
              "Dann musst du die Änderungen",
              "",
              "* in den lokalen `master` integrieren",
              "* und dann auf den Server pushen.",
              "",
              "Hier soll es zunächst um den ersten Schritt gehen.",
              ""
            ]
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "## Reintegration in master: Merge-Commit",
              "",
              "Grundsätzlich möchte ich, dass bei Pixum bei der Reintegration von Änderungen in den `master` ein Merge-Commit erzeugt wird.",
              "",
              "Dadurch muss auch nur dieser Merge-Commit per `git revert` neutralisiert werden, falls die Änderungen kritische Fehler enthalten.",
              "",
              "Das ist deshalb wichtig zu wissen, weil Git unter Umständen keinen echten Merge macht.",
              "",
              "\"Ja wie jetzt?\" -- Guckst du hier:"
            ]
          }
        },
        {
          "type": "GitDemonstrationView",
          "options": {
            "beforeMarkdowns": [
              "Die Arbeit ist abgeschlossen, wir sind in den `master` gewechselt und jetzt kommt der Merge:"
            ],
            "afterMarkdowns": [
              "Denkste! Git schaut beim Merge, ob das Ziel der Aktion (hier: `master`) vielleicht ein Vorfahr der Quelle (hier: `issue`) ist. Wenn ja, macht es keinen Merge sondern einen sogenannten `fast-forward`. Das heißt es \"spult\" das Ziel (`master`) einfach an die Stelle der Quelle (`issue`) vor. Schöner Mist.",
              ""
            ],
            "command": "git merge issue",
            "beforeCommand": "git checkout -b issue; git ci; git ci; git co master"
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "## 20 Reverts über der Schmerzgrenze",
              "",
              "Ok, in diesem Beispiel war das jetzt kein Beinbruch, du machst damit auch niemals etwas kaputt.",
              "",
              "Es ist nur so: wenn dein `issue` aus 21 Commits bestand und irgendeiner davon macht den Kunden das Bestellen unmöglich muss jetzt ein Kollege alle 21 Commits einzeln per `git revert` beseitigen, anstatt einfach nur einen Merge-Commit.",
              "",
              "Er wird sich dann sicherlich bei dir noch mal persönlich bedanken.",
              "",
              "Besser (und richtig) geht es so:"
            ]
          }
        },
        {
          "type": "GitDemonstrationView",
          "options": {
            "beforeMarkdowns": [
              "Gleiche Situation, leicht andere Vorgehensweise -- per Option `--no-ff` sagen wir Git ausdrücklich: \"egal was ist, mach AUFJEDENFALL einen Merge-Commit, danke\"."
            ],
            "afterMarkdowns": [
              "Und das macht es auch."
            ],
            "command": "git merge issue --no-ff",
            "beforeCommand": "git checkout -b issue; git ci; git ci; git co master"
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "## Ziel des Levels",
              "",
              "Und jetzt kommst du. Wechsel zum `master` und reintegriere `issue` dort per Merge - aber richtig.",
              "",
              "Viel Erfolg! :)"
            ]
          }
        }
      ]
    }
  }
};
