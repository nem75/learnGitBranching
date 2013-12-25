exports.level = {
  "goalTreeString": "{\"branches\":{\"master\":{\"target\":\"C2\",\"id\":\"master\",\"remoteTrackingBranchID\":\"o/master\"},\"o/master\":{\"target\":\"C2\",\"id\":\"o/master\",\"remoteTrackingBranchID\":null},\"issue\":{\"target\":\"C3\",\"id\":\"issue\",\"remoteTrackingBranchID\":null}},\"commits\":{\"C0\":{\"parents\":[],\"id\":\"C0\",\"rootCommit\":true},\"C1\":{\"parents\":[\"C0\"],\"id\":\"C1\"},\"C2\":{\"parents\":[\"C1\"],\"id\":\"C2\"},\"C3\":{\"parents\":[\"C2\"],\"id\":\"C3\"}},\"HEAD\":{\"target\":\"issue\",\"id\":\"HEAD\"},\"originTree\":{\"branches\":{\"master\":{\"target\":\"C2\",\"id\":\"master\",\"remoteTrackingBranchID\":null}},\"commits\":{\"C0\":{\"parents\":[],\"id\":\"C0\",\"rootCommit\":true},\"C1\":{\"parents\":[\"C0\"],\"id\":\"C1\"},\"C2\":{\"parents\":[\"C1\"],\"id\":\"C2\"}},\"HEAD\":{\"target\":\"master\",\"id\":\"HEAD\"}}}",
  "solutionCommand": "git pull;git branch issue;git checkout issue;git commit ",
  "compareOnlyMasterHashAgnostic": false,
  "disabledMap": {},
  "startTree": "{\"branches\":{\"master\":{\"target\":\"C1\",\"id\":\"master\",\"remoteTrackingBranchID\":\"o/master\"},\"o/master\":{\"target\":\"C1\",\"id\":\"o/master\",\"remoteTrackingBranchID\":null}},\"commits\":{\"C0\":{\"parents\":[],\"id\":\"C0\",\"rootCommit\":true},\"C1\":{\"parents\":[\"C0\"],\"id\":\"C1\"}},\"HEAD\":{\"target\":\"master\",\"id\":\"HEAD\"},\"originTree\":{\"branches\":{\"master\":{\"target\":\"C2\",\"id\":\"master\",\"remoteTrackingBranchID\":null}},\"commits\":{\"C0\":{\"parents\":[],\"id\":\"C0\",\"rootCommit\":true},\"C1\":{\"parents\":[\"C0\"],\"id\":\"C1\"},\"C2\":{\"parents\":[\"C1\"],\"id\":\"C2\"}},\"HEAD\":{\"target\":\"master\",\"id\":\"HEAD\"}}}",
  "name": {
    "de_DE": "Kleine Änderungen: Issue-Branch anlegen"
  },
  "hint": {
    "de_DE": "Aktualisiere den `master`, lege einen neuen Branch `issue` an und committe dort eine Änderung."
  },
  "startDialog": {
    "de_DE": {
      "childViews": [
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "## Kleine Änderungen: Issue-Branch anlegen",
              "",
              "Du kennst das sicher: du willst nur eine kleine Änderung machen, ein úberschaubares Issue bearbeiten, und das Ergebnis soll dann auch zeitnah live gehen.",
              "",
              "Dafür gibt es gibt zwei Ansätze:",
              "",
              "1. den Git-Weg: du erstellst einen lokalen Branch;",
              "1. den \"Ich bin VCS gewohnt, wo Mergen doof ist (z.B. SVN) und will lieber auf dem trunk/master arbeiten\"-Weg.",
              "",
              "Keiner der Ansätze ist der \"richtige\" oder \"falsche\". Allerdings gibt es keinen Grund die Vorteile eines Systems (Git) von vornherein zu ignorieren, nur weil du von einem unterlegenen System (SVN) schlechte Erfahungen mitbringst. Darum beginnen wir hier mit dem ersten Weg: einen lokalen Branch erstellen."
            ]
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "## Branchen: gratis und schnell, Merge: fast umsonst dabei",
              "",
              "SVN ist nicht schlecht weil das Anlegen von Branches schlimm wäre. Es ist schlecht, weil das Mergen eines Branch in was auch immer meistens kompliziert ist. Bei Git ist das nicht so. Es lohnt sich deshalb bei der Arbeit mit Git die alte \"das ist doch eine viel zu kleine Änderung, als dass sich da ein Branch lohnen würde\"-Attitüde abzulegen. Mergen mit Git kostet fast nichts, und Branchen die Hälfte. ;)",
              "",
              "Der erste Schritt vor dem Anlegen eines neuen Branch, wenn er von einem auf `git.pixum.dev` vorhandenen Branch wie `master` abzweigt, sollte immer ein `git pull` auf dem Eltern-Branch sein. So arbeitest du auf dem neuesten Stand und minimierst das Risiko von Problemen bei der Reintegration.",
              "",
              "Sehen wir uns das ganze in Aktion an:"
            ]
          }
        },
        {
          "type": "GitDemonstrationView",
          "options": {
            "beforeMarkdowns": [
              "Zuerst aktualisieren wir also unseren Eltern-Branch, hier `master`:",
              ""
            ],
            "afterMarkdowns": [
              "Fertig.",
              "",
              "(`o/master` ist hier eine verkürzte Schreibweise, in echtem Git heißt der Remote Branch des `master` üblicherweise `origin/master`.)"
            ],
            "command": "git pull",
            "beforeCommand": "git clone; git fakeTeamwork"
          }
        },
        {
          "type": "GitDemonstrationView",
          "options": {
            "beforeMarkdowns": [
              "Als nächstes muss der Branch für das Issue angelegt und dorthin gewechselt werden. Den normalen Weg über `git branch` und `git checkout` solltest du schon kennen, aber diese Abkürzung kennst du vielleicht nicht:",
              ""
            ],
            "afterMarkdowns": [
              "Fertig und arbeitsbereit auf `issue`."
            ],
            "command": "git checkout -b issue",
            "beforeCommand": "git clone; git fakeTeamwork; git pull"
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "Nachdem der `master` aktualisiert ist, muss lediglich noch der Branch für das Issue angelegt und ausgecheckt werden, um darin zu arbeiten.",
              "",
              "### Ziel des Levels:",
              "",
              "* den `master` per `git pull` aktualisieren,",
              "* einen Branch `issue` anlegen und auschecken,",
              "* dort einen Commit machen mit `git commit`.",
              ""
            ]
          }
        }
      ]
    }
  }
};
