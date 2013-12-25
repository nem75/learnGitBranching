exports.level = {
  "goalTreeString": "{\"branches\":{\"master\":{\"target\":\"C6\",\"id\":\"master\",\"remoteTrackingBranchID\":\"o/master\"},\"o/master\":{\"target\":\"C6\",\"id\":\"o/master\",\"remoteTrackingBranchID\":null},\"issue\":{\"target\":\"C4\",\"id\":\"issue\",\"remoteTrackingBranchID\":null}},\"commits\":{\"C0\":{\"parents\":[],\"id\":\"C0\",\"rootCommit\":true},\"C1\":{\"parents\":[\"C0\"],\"id\":\"C1\"},\"C2\":{\"parents\":[\"C1\"],\"id\":\"C2\"},\"C3\":{\"parents\":[\"C2\"],\"id\":\"C3\"},\"C4\":{\"parents\":[\"C3\"],\"id\":\"C4\"},\"C5\":{\"parents\":[\"C2\"],\"id\":\"C5\"},\"C6\":{\"parents\":[\"C4\",\"C5\"],\"id\":\"C6\"}},\"HEAD\":{\"target\":\"master\",\"id\":\"HEAD\"},\"originTree\":{\"branches\":{\"master\":{\"target\":\"C6\",\"id\":\"master\",\"remoteTrackingBranchID\":null}},\"commits\":{\"C0\":{\"parents\":[],\"id\":\"C0\",\"rootCommit\":true},\"C1\":{\"parents\":[\"C0\"],\"id\":\"C1\"},\"C2\":{\"parents\":[\"C1\"],\"id\":\"C2\"},\"C5\":{\"parents\":[\"C2\"],\"id\":\"C5\"},\"C3\":{\"parents\":[\"C2\"],\"id\":\"C3\"},\"C4\":{\"parents\":[\"C3\"],\"id\":\"C4\"},\"C6\":{\"parents\":[\"C4\",\"C5\"],\"id\":\"C6\"}},\"HEAD\":{\"target\":\"master\",\"id\":\"HEAD\"}}}",
  "solutionCommand": "git checkout master;git pull;git merge issue --no-ff;git push",
  "compareOnlyMasterHashAgnostic": false,
  "disabledMap": {},
  "name": {
    "de_DE": "Kleine Änderung: Issue-Branch reintegrieren"
  },
  "startTree": "{\"branches\":{\"master\":{\"target\":\"C2\",\"id\":\"master\",\"remoteTrackingBranchID\":\"o/master\"},\"o/master\":{\"target\":\"C2\",\"id\":\"o/master\",\"remoteTrackingBranchID\":null},\"issue\":{\"target\":\"C4\",\"id\":\"issue\",\"remoteTrackingBranchID\":null}},\"commits\":{\"C0\":{\"parents\":[],\"id\":\"C0\",\"rootCommit\":true},\"C1\":{\"parents\":[\"C0\"],\"id\":\"C1\"},\"C2\":{\"parents\":[\"C1\"],\"id\":\"C2\"},\"C3\":{\"parents\":[\"C2\"],\"id\":\"C3\"},\"C4\":{\"parents\":[\"C3\"],\"id\":\"C4\"}},\"HEAD\":{\"target\":\"issue\",\"id\":\"HEAD\"},\"originTree\":{\"branches\":{\"master\":{\"target\":\"C5\",\"id\":\"master\",\"remoteTrackingBranchID\":null}},\"commits\":{\"C0\":{\"parents\":[],\"id\":\"C0\",\"rootCommit\":true},\"C1\":{\"parents\":[\"C0\"],\"id\":\"C1\"},\"C2\":{\"parents\":[\"C1\"],\"id\":\"C2\"},\"C5\":{\"parents\":[\"C2\"],\"id\":\"C5\"}},\"HEAD\":{\"target\":\"master\",\"id\":\"HEAD\"}}}",
  "hint": {
    "de_DE": "Nicht vergessen: Optionen müssen hier ans Ende des Kommandos, also `git merge issue --no-ff` und nicht `git merge --no-ff issue`. Echtem Git ist das egal!"
  },
  "startDialog": {
    "de_DE": {
      "childViews": [
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "## Kleine Änderung: Issue-Branch reintegrieren",
              "",
              "Wenn ein lokaler Branch in den `master` reintegriert ist, willst du ihn sicher auf den Server pushen. Sonst wird's mit dem Deploy schwierig. :)",
              "",
              "Ein Push kann nur funktionieren, wenn man in dem lokalen Branch den man pushen will alle Änderungen hat, die auch auf dem Server in diesem Branch sind. Wenn du also `master` pushen willst und bei dir lokal besteht er aus den Commits `C1`, `C2` und `C3`, auf dem Server aber aus `C1`, `C2` und `C4`, dann wird Git dich deine Änderungen nicht pushen lassen, solange `C4` nicht auch Bestandteil deines lokalen `master` ist.",
              ""
            ]
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "## \"Boah ist das alles kompliziert ey\"",
              "",
              "Naja, geht so. Nobelpreis kriegt man dafür keinen. Und: Git _irgendwie_ benutzen ist sogar sehr, sehr einfach.",
              "",
              "Interessanter wird's dann, wenn man es so benutzen will, dass z.B. die History auf dem Server übersichtlich bleibt. Aber auch da kann man vielen (kleinen) Problemen, die entstehen können, einfach vorbeugen:",
              "",
              "1. Den lokalen `master` immer \"sauber\" halten. Wenn dein `master` in der Regel ein Abbild des `master` auf dem Server ist (also möglichst immer gleich mit deinem `origin/master`), vereinfacht das die Arbeit mit und Reintegration von anderen lokalen Branches enorm.",
              "",
              "1. `git pull` frühzeitig ausführen. Also _VOR_ dem Reintegrieren eines Branches, nicht erst wenn Git dir sagt: \"Push? Haha. Nö.\"",
              "",
              "Trotzdem kann einem manchmal noch ein Commit von Kollegen dazwischen kommen, aber das schauen wir uns dann in den nächsten Leveln an.",
              ""
            ]
          }
        },
        {
          "type": "GitDemonstrationView",
          "options": {
            "beforeMarkdowns": [
              "Lass uns mal anschauen wie man's möglichst nicht machen sollte.",
              "",
              "In diesem Beispiel hast du den Branch in den `master` gemerged, obwohl es schon einen neuen Commit auf dem Server gab. `git push` verweigert dir daher den Push, denn der Commit auf dem Server ist noch nicht Bestandteil deines `master`."
            ],
            "afterMarkdowns": [
              "Das war jetzt ein klassischer \"PushPull\". Das ist, wenn man versucht zu pushen, nicht darf, und dann einfach mal eben grad `git pull` macht. Macht nix kaputt, außer der Übersichtlichkeit, weil es _IMMER_ überflüssige (und je nach dem wie alt deine lokalen Branches sind auch sehr große) Merges verursacht."
            ],
            "command": "git pull; git push",
            "beforeCommand": "git clone; git co -b feature; git ci; git fakeTeamwork; git ci; git co master; git merge feature --no-ff"
          }
        },
        {
          "type": "GitDemonstrationView",
          "options": {
            "beforeMarkdowns": [
              "Jetzt befolgen wir stattdessen den zweiten Ratschlag: `git pull` VOR dem Merge."
            ],
            "afterMarkdowns": [
              "Härrlisch. Einen Merge Commit gibt es immer noch (der Branch hat ja mehr als einen Commit -> `--no-ff` -> Merge erzwungen) aber eben nur einen, nicht zwei."
            ],
            "command": "git pull; git merge issue --no-ff; git push",
            "beforeCommand": "git clone; git co -b issue; git ci; git ci; git fakeTeamwork; git co master"
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "Alles klar? Na denn:",
              "",
              "## Ziel des Levels",
              "",
              "* erst mal den `master` aktualisieren,",
              "* dann `issue` in `master` mergen,",
              "* und erst dann `pushen`.",
              "",
              "Viel Erfolg!"
            ]
          }
        }
      ]
    }
  }
};
