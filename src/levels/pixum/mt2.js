exports.level = {
  "goalTreeString": "{\"branches\":{\"master\":{\"target\":\"C6\",\"id\":\"master\",\"remoteTrackingBranchID\":\"o/master\"},\"o/master\":{\"target\":\"C6\",\"id\":\"o/master\",\"remoteTrackingBranchID\":null},\"issue\":{\"target\":\"C4\",\"id\":\"issue\",\"remoteTrackingBranchID\":null}},\"commits\":{\"C0\":{\"parents\":[],\"id\":\"C0\",\"rootCommit\":true},\"C1\":{\"parents\":[\"C0\"],\"id\":\"C1\"},\"C2\":{\"parents\":[\"C1\"],\"id\":\"C2\"},\"C3\":{\"parents\":[\"C2\"],\"id\":\"C3\"},\"C4\":{\"parents\":[\"C3\"],\"id\":\"C4\"},\"C5\":{\"parents\":[\"C2\"],\"id\":\"C5\"},\"C6\":{\"parents\":[\"C4\",\"C5\"],\"id\":\"C6\"}},\"HEAD\":{\"target\":\"master\",\"id\":\"HEAD\"},\"originTree\":{\"branches\":{\"master\":{\"target\":\"C6\",\"id\":\"master\",\"remoteTrackingBranchID\":null}},\"commits\":{\"C0\":{\"parents\":[],\"id\":\"C0\",\"rootCommit\":true},\"C1\":{\"parents\":[\"C0\"],\"id\":\"C1\"},\"C2\":{\"parents\":[\"C1\"],\"id\":\"C2\"},\"C5\":{\"parents\":[\"C2\"],\"id\":\"C5\"},\"C3\":{\"parents\":[\"C2\"],\"id\":\"C3\"},\"C4\":{\"parents\":[\"C3\"],\"id\":\"C4\"},\"C6\":{\"parents\":[\"C4\",\"C5\"],\"id\":\"C6\"}},\"HEAD\":{\"target\":\"master\",\"id\":\"HEAD\"}}}",
  "solutionCommand": "git checkout master;git pull;git merge issue --no-ff;git push",
  "compareOnlyMasterHashAgnostic": false,
  "disabledMap": {},
  "name": {
    "de_DE": "MT2: Issue-Branch reintegrieren"
  },
  "startTree": "{\"branches\":{\"master\":{\"target\":\"C2\",\"id\":\"master\",\"remoteTrackingBranchID\":\"o/master\"},\"o/master\":{\"target\":\"C2\",\"id\":\"o/master\",\"remoteTrackingBranchID\":null},\"issue\":{\"target\":\"C4\",\"id\":\"issue\",\"remoteTrackingBranchID\":null}},\"commits\":{\"C0\":{\"parents\":[],\"id\":\"C0\",\"rootCommit\":true},\"C1\":{\"parents\":[\"C0\"],\"id\":\"C1\"},\"C2\":{\"parents\":[\"C1\"],\"id\":\"C2\"},\"C3\":{\"parents\":[\"C2\"],\"id\":\"C3\"},\"C4\":{\"parents\":[\"C3\"],\"id\":\"C4\"}},\"HEAD\":{\"target\":\"issue\",\"id\":\"HEAD\"},\"originTree\":{\"branches\":{\"master\":{\"target\":\"C5\",\"id\":\"master\",\"remoteTrackingBranchID\":null}},\"commits\":{\"C0\":{\"parents\":[],\"id\":\"C0\",\"rootCommit\":true},\"C1\":{\"parents\":[\"C0\"],\"id\":\"C1\"},\"C2\":{\"parents\":[\"C1\"],\"id\":\"C2\"},\"C5\":{\"parents\":[\"C2\"],\"id\":\"C5\"}},\"HEAD\":{\"target\":\"master\",\"id\":\"HEAD\"}}}",
  "hint": {
    "de_DE": "Nicht vergessen: Optionen müssen ans Ende des Kommandos, also `git merge issue --no-ff` und nicht `git merge --no-ff issue`. Echtem Git ist das egal!"
  },
  "startDialog": {
    "de_DE": {
      "childViews": [
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "## MT2: Issue-Branch reintegrieren",
              "",
              "Ist ein Issue fertig bearbeitet, wird sein Branch in den `master` reintegriert und gepusht. Danach ist der Deploy möglich.",
              "",
              "Um Problemen beim `push` weitgehend vorzubeugen muss vorher ein `pull` auf dem `master` ausgeführt werden, um eventuelle Team-Änderungen vom Server zu holen.",
              "",
              "Wenn man einfach nur irgendwie solange `pull` ausführt bis man seinen Kram auf den Server gepusht bekommt, kommt es sonst zu unnötig unübersichtlichen Auswüchsen, die allen Kollegen den Tag vermiesen.",
              "",
              ""
            ]
          }
        },
        {
          "type": "GitDemonstrationView",
          "options": {
            "beforeMarkdowns": [
              "## Die History auf dem Server sauber halten",
              "",
              "In diesem Beispiel ist ein Issue-Branch in den `master` gemergt worden, obwohl auf dem Server bereits ein neuer Commit im `master` war.",
              "",
              "Ein `push` ist jetzt nicht mehr möglich, Git warnt entsprechend. Wenn man jetzt einfach nur `pull` ausführt und dann pusht ..."
            ],
            "afterMarkdowns": [
              "Hatten sie die Spaghetti bestellt? Na denn guten Appetit.",
              "",
              "Nur: hier müssen alle Kollegen mitessen. Schönen Dank auch dafür."
            ],
            "command": "git pull; git push",
            "beforeCommand": "git clone; git co -b issue; git ci; git fakeTeamwork; git co master; git merge issue --no-ff"
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "## Dann lieber richtig",
              "",
              "So also nicht. Deshalb bitte in diesem Level (und in Echt auch)",
              "",
              "* erst mal den `master` aktualisieren,",
              "* dann `issue` in `master` mergen (`--no-ff` nicht vergessen; die Optionen müssen in dieser Lernumgebung immer ans Ende, es wäre also z.B. `git merge issue --no-ff`),",
              "* und erst dann `pushen`.",
              "",
              "Das Ergebnis wird ersichtlich übersichtlicher. Der Rest der Firma dankt's.",
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