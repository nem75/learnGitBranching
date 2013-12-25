exports.level = {
  "goalTreeString": "{\"branches\":{\"master\":{\"target\":\"C6\",\"id\":\"master\",\"remoteTrackingBranchID\":\"o/master\"},\"o/master\":{\"target\":\"C6\",\"id\":\"o/master\",\"remoteTrackingBranchID\":null},\"issue\":{\"target\":\"C3\",\"id\":\"issue\",\"remoteTrackingBranchID\":null}},\"commits\":{\"C0\":{\"parents\":[],\"id\":\"C0\",\"rootCommit\":true},\"C1\":{\"parents\":[\"C0\"],\"id\":\"C1\"},\"C2\":{\"parents\":[\"C1\"],\"id\":\"C2\"},\"C3\":{\"parents\":[\"C2\"],\"id\":\"C3\"},\"C4\":{\"parents\":[\"C1\",\"C3\"],\"id\":\"C4\"},\"C5\":{\"parents\":[\"C1\"],\"id\":\"C5\"},\"C6\":{\"parents\":[\"C3\",\"C5\"],\"id\":\"C6\"}},\"HEAD\":{\"target\":\"master\",\"id\":\"HEAD\"},\"originTree\":{\"branches\":{\"master\":{\"target\":\"C6\",\"id\":\"master\",\"remoteTrackingBranchID\":null}},\"commits\":{\"C0\":{\"parents\":[],\"id\":\"C0\",\"rootCommit\":true},\"C1\":{\"parents\":[\"C0\"],\"id\":\"C1\"},\"C5\":{\"parents\":[\"C1\"],\"id\":\"C5\"},\"C2\":{\"parents\":[\"C1\"],\"id\":\"C2\"},\"C3\":{\"parents\":[\"C2\"],\"id\":\"C3\"},\"C6\":{\"parents\":[\"C3\",\"C5\"],\"id\":\"C6\"}},\"HEAD\":{\"target\":\"master\",\"id\":\"HEAD\"}}}",
  "solutionCommand": "git reset --hard HEAD^;git pull;git merge issue --no-ff;git push",
  "startTree": "{\"branches\":{\"master\":{\"target\":\"C4\",\"id\":\"master\",\"remoteTrackingBranchID\":\"o/master\"},\"o/master\":{\"target\":\"C1\",\"id\":\"o/master\",\"remoteTrackingBranchID\":null},\"issue\":{\"target\":\"C3\",\"id\":\"issue\",\"remoteTrackingBranchID\":null}},\"commits\":{\"C0\":{\"parents\":[],\"id\":\"C0\",\"rootCommit\":true},\"C1\":{\"parents\":[\"C0\"],\"id\":\"C1\"},\"C2\":{\"parents\":[\"C1\"],\"id\":\"C2\"},\"C3\":{\"parents\":[\"C2\"],\"id\":\"C3\"},\"C4\":{\"parents\":[\"C1\",\"C3\"],\"id\":\"C4\"}},\"HEAD\":{\"target\":\"master\",\"id\":\"HEAD\"},\"originTree\":{\"branches\":{\"master\":{\"target\":\"C5\",\"id\":\"master\",\"remoteTrackingBranchID\":null}},\"commits\":{\"C0\":{\"parents\":[],\"id\":\"C0\",\"rootCommit\":true},\"C1\":{\"parents\":[\"C0\"],\"id\":\"C1\"},\"C5\":{\"parents\":[\"C1\"],\"id\":\"C5\"}},\"HEAD\":{\"target\":\"master\",\"id\":\"HEAD\"}}}",
  "compareOnlyMasterHashAgnostic": false,
  "disabledMap": {"git rebase": true},
  "hint": {
    "de_DE": "Hier ist es egal, aber in echtem Git ist es ein großer Unterschied, ob du reset mit --hard oder ohne angibst."
  },
  "name": {
    "de_DE": "Wenn das Team dreimal pusht"
  },
  "startDialog": {
    "de_DE": {
      "childViews": [
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "## Wenn das Team dreimal pusht",
              "",
              "Ich hatte diese Situation in einem vorherigen Level schon mal in einem kleinen Beispiel gezeigt. Sie ist aber wichtig genug um ihr einen eigenen Level einzuräumen:",
              "",
              "Du hast alles richtig gemacht, vor dem Anlegen des Branch gepullt, den Branch immer wieder mit `git rebase` aktualisiert, vor dem Reintegrieren in den `master` wieder gepullt usw. usf. Alles super.",
              "",
              "Und dann: `git push`. Und dann: nix ist.",
              "",
              "... weil _GERADEBENMALKURZ_ ein Kollege ebenfalls etwas auf den Server gepusht hat. Gnarf!",
              "",
              "Und nun?"
            ]
          }
        },
        {
          "type": "GitDemonstrationView",
          "options": {
            "beforeMarkdowns": [
              "PushPull to the rescue! Was soll da schon schief gehen?"
            ],
            "afterMarkdowns": [
              "Naja, kaputt geht nichts. Außer der Übersichtlichkeit. Also wer ganz dubiose Änderungen gemacht hat und das verschleiern will, der kann so vorgehen. Aber wer nichts zu verbergen hat, der macht es lieber so:"
            ],
            "command": "git push; git pull; git push",
            "beforeCommand": "git clone; git co -b issue; git ci; git ci; git co master; git merge issue --no-ff; git fakeTeamwork"
          }
        },
        {
          "type": "GitDemonstrationView",
          "options": {
            "beforeMarkdowns": [
              "Es gibt verschiedene Wege, wie du diese Situation sauber lösen kannst. Hier ist einer:"
            ],
            "afterMarkdowns": [
              "Es sind drei simple Schritte: auf den Commit vor dem Merge zurückgehen (`git reset`), die Änderungen vom Server holen (`git pull`) und dann den Merge wiederholen."
            ],
            "command": "git reset master^ --hard; git pull; git merge issue --no-ff",
            "beforeCommand": "git clone; git co -b issue; git ci; git ci; git co master; git merge issue --no-ff; git fakeTeamwork"
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "## Variationen",
              "",
              "Wenn `issue` nur aus einem einzigen Commit besteht, ist die ideale Lösung der Situation aus dem letzten Beispiel eine andere. Schau ein paar Level vor diesem nach, falls du sie vergessen hast.",
              "",
              "Eine andere Möglichkeit wäre ein `git pull --rebase` auszuführen. Aber Achtung! Falls du das tun willst, und dein Branch mehr als einen Commit hat, wie in diesem Beispiel der Fall, benutze **unbedingt** den zusätzlichen Schalter `--preserve-merges`. Sonst wird durch den Rebase der Merge-Commit \"zerstört\" und in die einzelnen Commits des Branches aufgeteilt, und das soll auf keinen Fall passieren!"
            ]
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "## Ziel des Levels",
              "",
              "* den Merge-Commit rückgängig machen,",
              "* die Änderungen vom Server holen",
              "* den Merge wiederholen",
              "",
              "Viel Erfolg!"
            ]
          }
        }
      ]
    }
  }
};
