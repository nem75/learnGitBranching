exports.level = {
  "goalTreeString": "{\"branches\":{\"master\":{\"target\":\"C7\",\"id\":\"master\",\"remoteTrackingBranchID\":\"o/master\"},\"o/master\":{\"target\":\"C7\",\"id\":\"o/master\",\"remoteTrackingBranchID\":null},\"issue\":{\"target\":\"C7\",\"id\":\"issue\",\"remoteTrackingBranchID\":null}},\"commits\":{\"C0\":{\"parents\":[],\"id\":\"C0\",\"rootCommit\":true},\"C1\":{\"parents\":[\"C0\"],\"id\":\"C1\"},\"C5\":{\"parents\":[\"C1\"],\"id\":\"C5\"},\"C6\":{\"parents\":[\"C5\"],\"id\":\"C6\"},\"C2\":{\"parents\":[\"C1\"],\"id\":\"C2\"},\"C3\":{\"parents\":[\"C2\"],\"id\":\"C3\"},\"C4\":{\"parents\":[\"C3\"],\"id\":\"C4\"},\"C7\":{\"parents\":[\"C4\",\"C6\"],\"id\":\"C7\"}},\"HEAD\":{\"target\":\"master\",\"id\":\"HEAD\"},\"originTree\":{\"branches\":{\"master\":{\"target\":\"C7\",\"id\":\"master\",\"remoteTrackingBranchID\":null}},\"commits\":{\"C0\":{\"parents\":[],\"id\":\"C0\",\"rootCommit\":true},\"C1\":{\"parents\":[\"C0\"],\"id\":\"C1\"},\"C2\":{\"parents\":[\"C1\"],\"id\":\"C2\"},\"C3\":{\"parents\":[\"C2\"],\"id\":\"C3\"},\"C4\":{\"parents\":[\"C3\"],\"id\":\"C4\"},\"C5\":{\"parents\":[\"C1\"],\"id\":\"C5\"},\"C6\":{\"parents\":[\"C5\"],\"id\":\"C6\"},\"C7\":{\"parents\":[\"C4\",\"C6\"],\"id\":\"C7\"}},\"HEAD\":{\"target\":\"master\",\"id\":\"HEAD\"}}}",
  "solutionCommand": "git pull;git checkout issue;git merge master;git checkout master;git merge issue;git push",
  "startTree": "{\"branches\":{\"master\":{\"target\":\"C1\",\"id\":\"master\",\"remoteTrackingBranchID\":\"o/master\"},\"o/master\":{\"target\":\"C1\",\"id\":\"o/master\",\"remoteTrackingBranchID\":null},\"issue\":{\"target\":\"C6\",\"id\":\"issue\",\"remoteTrackingBranchID\":null}},\"commits\":{\"C0\":{\"parents\":[],\"id\":\"C0\",\"rootCommit\":true},\"C1\":{\"parents\":[\"C0\"],\"id\":\"C1\"},\"C5\":{\"parents\":[\"C1\"],\"id\":\"C5\"},\"C6\":{\"parents\":[\"C5\"],\"id\":\"C6\"}},\"HEAD\":{\"target\":\"master\",\"id\":\"HEAD\"},\"originTree\":{\"branches\":{\"master\":{\"target\":\"C4\",\"id\":\"master\",\"remoteTrackingBranchID\":null}},\"commits\":{\"C0\":{\"parents\":[],\"id\":\"C0\",\"rootCommit\":true},\"C1\":{\"parents\":[\"C0\"],\"id\":\"C1\"},\"C2\":{\"parents\":[\"C1\"],\"id\":\"C2\"},\"C3\":{\"parents\":[\"C2\"],\"id\":\"C3\"},\"C4\":{\"parents\":[\"C3\"],\"id\":\"C4\"}},\"HEAD\":{\"target\":\"master\",\"id\":\"HEAD\"}}}",
  "compareOnlyMasterHashAgnostic": false,
  "disabledMap": {"git rebase": true},
  "name": {
    "en_US": "MT3: Issue-Branch aktualisieren per Merge"
  },
  "hint": {
    "en_US": "`git merge` erzeugt automatisch einen Commit wenn keine Konflikte auftreten."
  },
  "startDialog": {
    "en_US": {
      "childViews": [
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "## MT3: Issue-Branch aktualisieren per Merge",
              "",
              "Falls während der Arbeit an einem Issue-Branch sehr viele Änderungen auf den `master` gepusht worden sind, kann es sinnvoll sein diese in den Branch zu holen bevor man ihn reintegriert. Auf diese Weise lassen sich eventuelle Konflikte vor der Reintegration aufdecken und lösen.",
              "",
              "Eine Möglichkeit das zu tun, ist den `master` in den Branch zu mergen",
              "",
              "",
              ""
            ]
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "Dieser Level startet mit einem Issue-Branch und einem `master`, auf dem seit Erstellen des Branches drei Commits gemacht wurden.",
              "",
              "Bitte merge den `master` in den Branch, bevor du diesen in den `master` reintegrierst und pushst.",
              "",
              "*WICHTIG:* da durch den Merge von `master` in `issue` bereits ein Merge Commit entsteht, ist es in diesem Fall nicht nötig den Branch mit `--no-ff` in den `master` zu mergen. Es schadet zwar auch nicht, führt aber in diesem Level nicht zur Lösung. Probier aus wie das Ergebnis aussieht wenn man beim letzten Merge mit und ohne `--no-ff` arbeitet. Du kannst Arbeitsschritte mit `undo` zurücknehmen.",
              ""
            ]
          }
        }
      ]
    }
  }
};