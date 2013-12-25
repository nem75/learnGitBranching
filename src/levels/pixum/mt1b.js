exports.level = {
  "goalTreeString": "{\"branches\":{\"master\":{\"target\":\"C2\",\"id\":\"master\",\"remoteTrackingBranchID\":null},\"issue\":{\"target\":\"C2\",\"id\":\"issue\",\"remoteTrackingBranchID\":null}},\"commits\":{\"C0\":{\"parents\":[],\"id\":\"C0\",\"rootCommit\":true},\"C1\":{\"parents\":[\"C0\"],\"id\":\"C1\"},\"C2\":{\"parents\":[\"C1\"],\"id\":\"C2\"}},\"tags\":{},\"HEAD\":{\"target\":\"master\",\"id\":\"HEAD\"}}",
  "solutionCommand": "git checkout master;git merge issue",
  "startTree": "{\"branches\":{\"master\":{\"target\":\"C1\",\"id\":\"master\",\"remoteTrackingBranchID\":null},\"issue\":{\"target\":\"C2\",\"id\":\"issue\",\"remoteTrackingBranchID\":null}},\"commits\":{\"C0\":{\"parents\":[],\"id\":\"C0\",\"rootCommit\":true},\"C1\":{\"parents\":[\"C0\"],\"id\":\"C1\"},\"C2\":{\"parents\":[\"C1\"],\"id\":\"C2\"}},\"tags\":{},\"HEAD\":{\"target\":\"issue\",\"id\":\"HEAD\"}}",
  "name": {
    "de_DE": "Reintegration: einzelner Commit"
  },
  "hint": {
    "de_DE": "Du kannst dir --no-ff sparen, falls dein Branch nur eine Fortsetzung von master ist"
  },
  "startDialog": {
    "de_DE": {
      "childViews": [
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "## Reintegration: einzelner Commit",
              "",
              "Im vorherigen Level wurde es indirekt schon gesagt: wir wollen bei Pixum _grundsätzlich_ einen Merge-Commit erzeugen, wenn wir Änderungen in den `master` integrieren.",
              "",
              "Aber nicht _ausschließlich_. Es gibt eine Ausnahme: wenn wir nur einen einzelnen Commit reintegrieren wollen."
            ]
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "## Manchmal reicht schon einer",
              "",
              "Es ist ja nicht unüblich: kleine Aufgaben und Issues sind oft mit einem einzigen Commit erledigt.",
              "",
              "Lass dich dadurch aber nicht davon abhalten, auch für diese zunächst einen lokalen Branch anzulegen. Schließlich kannst du nie sicher sein, dass nur ein Commit nötig sein wird. Und ein Branch ist immer besser als eine \"dreckige\" Arbeitskopie.",
              "",
              "Sollte es dann am Ende nur ein Commit gewesen sein, können wir die Reintegration ein bisschen vereinfachen.",
              "",
              "Schauen wir mal:"
            ]
          }
        },
        {
          "type": "GitDemonstrationView",
          "options": {
            "beforeMarkdowns": [
              "Erst mal der Standardweg: mit `--no-ff`."
            ],
            "afterMarkdowns": [
              "Wie gehabt. Allerdings: nötig ist das nicht. Wir haben jetzt zwei Commits (`C2` und `C3`), die beide nur eine inhaltliche Änderung mitbringen (die aus `C2`). `C3` ist also eigentlich überflüssig."
            ],
            "command": "git merge issue --no-ff",
            "beforeCommand": "git co -b issue; git ci; git co master"
          }
        },
        {
          "type": "GitDemonstrationView",
          "options": {
            "beforeMarkdowns": [
              "Stattdessen können wir _ausnahmsweise_ den `--no-ff` Schalter weglassen:"
            ],
            "afterMarkdowns": [
              "Das ist ok! Da wir eh nur einen Commit im Branch hatten, brauchen wir nicht noch den Merge Commit zusätzlich. Sollte ein Fehler drin sein, ist ja trotzdem nur dieser eine Commit zu reverten. Alles gut. Und übersichtlicher."
            ],
            "command": "git merge issue",
            "beforeCommand": "git co -b issue; git ci; git co master"
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "## Ziel des Levels",
              "",
              "Wechsel in den `master` und reintegriere den Branch so, wie es sich für einen Branch mit einem einzigen Commit gehört.",
              "",
              "Viel Erfolg!"
            ]
          }
        }
      ]
    }
  }
};