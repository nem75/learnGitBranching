exports.level = {
  "goalTreeString": "{\"branches\":{\"master\":{\"target\":\"C2\",\"id\":\"master\",\"remoteTrackingBranchID\":\"o/master\"},\"o/master\":{\"target\":\"C2\",\"id\":\"o/master\",\"remoteTrackingBranchID\":null},\"issue\":{\"target\":\"C2\",\"id\":\"issue\",\"remoteTrackingBranchID\":null}},\"commits\":{\"C0\":{\"parents\":[],\"id\":\"C0\",\"rootCommit\":true},\"C1\":{\"parents\":[\"C0\"],\"id\":\"C1\"},\"C2\":{\"parents\":[\"C1\"],\"id\":\"C2\"}},\"HEAD\":{\"target\":\"master\",\"id\":\"HEAD\"},\"originTree\":{\"branches\":{\"master\":{\"target\":\"C2\",\"id\":\"master\",\"remoteTrackingBranchID\":null}},\"commits\":{\"C0\":{\"parents\":[],\"id\":\"C0\",\"rootCommit\":true},\"C1\":{\"parents\":[\"C0\"],\"id\":\"C1\"},\"C2\":{\"parents\":[\"C1\"],\"id\":\"C2\"}},\"HEAD\":{\"target\":\"master\",\"id\":\"HEAD\"}}}",
  "solutionCommand": "git checkout master;git merge issue;git push",
  "startTree": "{\"branches\":{\"master\":{\"target\":\"C1\",\"id\":\"master\",\"remoteTrackingBranchID\":\"o/master\"},\"o/master\":{\"target\":\"C1\",\"id\":\"o/master\",\"remoteTrackingBranchID\":null},\"issue\":{\"target\":\"C2\",\"id\":\"issue\",\"remoteTrackingBranchID\":null}},\"commits\":{\"C0\":{\"parents\":[],\"id\":\"C0\",\"rootCommit\":true},\"C1\":{\"parents\":[\"C0\"],\"id\":\"C1\"},\"C2\":{\"parents\":[\"C1\"],\"id\":\"C2\"}},\"HEAD\":{\"target\":\"issue\",\"id\":\"HEAD\"},\"originTree\":{\"branches\":{\"master\":{\"target\":\"C1\",\"id\":\"master\",\"remoteTrackingBranchID\":null}},\"commits\":{\"C0\":{\"parents\":[],\"id\":\"C0\",\"rootCommit\":true},\"C1\":{\"parents\":[\"C0\"],\"id\":\"C1\"}},\"HEAD\":{\"target\":\"master\",\"id\":\"HEAD\"}}}",
  "compareOnlyMasterHashAgnostic": false,
  "disabledMap": {"git rebase": true},
  "hint": {
    "de_DE": "Wenn es zwischenzeitlich Änderungen auf dem Server im `master` gab, ergibt sich auch ohne `--no-ff` ein Merge Commit, weil `issue` und `master` divergieren."
  },
  "name": {
    "de_DE": "MT3: Issue-Branch reintegrieren ohne Merge Commit"
  },
  "startDialog": {
    "de_DE": {
      "childViews": [
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "## MT3: Issue-Branch reintegrieren ohne Merge Commit",
              "",
              "In aller Regel benutzen wir beim Reintegrieren in den Master ein `git merge --no-ff`. Das `--no-ff` verhindert einen sogenannten \"fast forward\" und erzwingt einen Merge Commit.",
              "",
              "Das ist sinnvoll solange dein Branch mehr als einen Commit enthält. Falls durch deinen Branch nämlich fehlerhafter Code deployt wird, muss nur `git revert <hash des Merge Commits>` ausgeführt werden, um deine Reintegration zurück zu nehmen."
            ]
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "## Keine Regel ohne Ausnahme",
              "",
              "Wenn dein Branch allerdings eh nur einen Commit enthält, ist das `--no-ff` überflüssig. Es wegzulassen sorgt in dem Fall für eine lineare und übersichtlichere History.",
              "",
              "Reintegriere in diesem Level den Branch `issue` ohne `--no-ff` in den `master`.",
              "",
              "Das Ergebnis ist ein \"fast forward\", das heißt der `master` wird mit `issue` \"gleichgesetzt\", ohne dass ein Merge Commit entsteht. Das ist möglich, da `issue` nur Änderungen enthält, die auf den neuesten Stand von `master` aufbauen. Hätte es zwischenzeitlich in `master` auch Änderungen gegeben (oder kämen diese zum Beispiel durch ein `git pull` herein) so wäre kein fast forward möglich und es würde wieder ein Merge Commit entstehen (obwohl `issue` nach wie vor nur einen Commit enthält).",
              ""
            ]
          }
        }
      ]
    }
  }
};
