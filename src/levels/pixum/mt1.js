exports.level = {
  "goalTreeString": "{\"branches\":{\"master\":{\"target\":\"C2\",\"id\":\"master\",\"remoteTrackingBranchID\":\"o/master\"},\"o/master\":{\"target\":\"C2\",\"id\":\"o/master\",\"remoteTrackingBranchID\":null},\"issue\":{\"target\":\"C3\",\"id\":\"issue\",\"remoteTrackingBranchID\":null}},\"commits\":{\"C0\":{\"parents\":[],\"id\":\"C0\",\"rootCommit\":true},\"C1\":{\"parents\":[\"C0\"],\"id\":\"C1\"},\"C2\":{\"parents\":[\"C1\"],\"id\":\"C2\"},\"C3\":{\"parents\":[\"C2\"],\"id\":\"C3\"}},\"HEAD\":{\"target\":\"issue\",\"id\":\"HEAD\"},\"originTree\":{\"branches\":{\"master\":{\"target\":\"C2\",\"id\":\"master\",\"remoteTrackingBranchID\":null}},\"commits\":{\"C0\":{\"parents\":[],\"id\":\"C0\",\"rootCommit\":true},\"C1\":{\"parents\":[\"C0\"],\"id\":\"C1\"},\"C2\":{\"parents\":[\"C1\"],\"id\":\"C2\"}},\"HEAD\":{\"target\":\"master\",\"id\":\"HEAD\"}}}",
  "solutionCommand": "git pull;git branch issue;git checkout issue;git commit ",
  "compareOnlyMasterHashAgnostic": false,
  "disabledMap": {},
  "startTree": "{\"branches\":{\"master\":{\"target\":\"C1\",\"id\":\"master\",\"remoteTrackingBranchID\":\"o/master\"},\"o/master\":{\"target\":\"C1\",\"id\":\"o/master\",\"remoteTrackingBranchID\":null}},\"commits\":{\"C0\":{\"parents\":[],\"id\":\"C0\",\"rootCommit\":true},\"C1\":{\"parents\":[\"C0\"],\"id\":\"C1\"}},\"HEAD\":{\"target\":\"master\",\"id\":\"HEAD\"},\"originTree\":{\"branches\":{\"master\":{\"target\":\"C2\",\"id\":\"master\",\"remoteTrackingBranchID\":null}},\"commits\":{\"C0\":{\"parents\":[],\"id\":\"C0\",\"rootCommit\":true},\"C1\":{\"parents\":[\"C0\"],\"id\":\"C1\"},\"C2\":{\"parents\":[\"C1\"],\"id\":\"C2\"}},\"HEAD\":{\"target\":\"master\",\"id\":\"HEAD\"}}}",
  "name": {
    "en_US": "MT1: Issue-Branch anlegen"
  },
  "hint": {
    "en_US": "Aktualisiere den `master`, leg einen neuen Branch `issue` an und committe dort eine Änderung."
  },
  "startDialog": {
    "en_US": {
      "childViews": [
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "## MT1: Issue-Branch anlegen",
              "",
              "Die Arbeit in Maintenance findet üblicherweise in lokalen Branches statt, einem pro MT-Issue. Nach Abschluss eines Issues wird der entsprechende Branch in den Master integriert und zwecks Deploy auf den Server gepusht.",
              "",
              "",
              ""
            ]
          }
        },
        {
          "type": "GitDemonstrationView",
          "options": {
            "beforeMarkdowns": [
              "## Und los",
              "",
              "Erster Schritt sollte also das Aktualisieren des `master` sein.",
              ""
            ],
            "afterMarkdowns": [
              "Falls das Issue schnell gelöst ist, ist durch diesen Schritt möglicherweise gar kein `pull` vor dem Pushen des reintegrierten Branches nötig.",
              "",
              "Der Branch `o/master` heißt in einer echten Git-Umgebung üblicherweise `origin/master`. Er enthält alle Commits des Branches `master` auf dem Server `origin` seit dem letzten `pull` (oder `fetch`)."
            ],
            "command": "git pull",
            "beforeCommand": "git clone; git fakeTeamwork"
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "## Das eigentliche Branchen",
              "",
              "Wenn der `master` aktualisiert ist, muss lediglich noch der Branch für das Issue angelegt und ausgecheckt werden, um darin zu arbeiten.",
              "",
              "### Ziel",
              "",
              "* den `master` per `git pull` aktualisieren,",
              "* einen Branch `issue` anlegen und auschecken,",
              "* dort einen Commit machen mit `git commit` (in unserer Übungsumgebung muss man nicht wirklich Dateien ändern und Änderungen stagen).",
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