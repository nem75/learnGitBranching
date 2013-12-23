exports.level = {
  "goalTreeString": "%7B%22branches%22%3A%7B%22master%22%3A%7B%22target%22%3A%22C2%27%22%2C%22id%22%3A%22master%22%2C%22remoteTrackingBranchID%22%3A%22o/master%22%7D%2C%22o/master%22%3A%7B%22target%22%3A%22C2%27%22%2C%22id%22%3A%22o/master%22%2C%22remoteTrackingBranchID%22%3Anull%7D%2C%22issue%22%3A%7B%22target%22%3A%22C2%27%22%2C%22id%22%3A%22issue%22%2C%22remoteTrackingBranchID%22%3Anull%7D%7D%2C%22commits%22%3A%7B%22C0%22%3A%7B%22parents%22%3A%5B%5D%2C%22id%22%3A%22C0%22%2C%22rootCommit%22%3Atrue%7D%2C%22C1%22%3A%7B%22parents%22%3A%5B%22C0%22%5D%2C%22id%22%3A%22C1%22%7D%2C%22C2%22%3A%7B%22parents%22%3A%5B%22C1%22%5D%2C%22id%22%3A%22C2%22%7D%2C%22C3%22%3A%7B%22parents%22%3A%5B%22C1%22%5D%2C%22id%22%3A%22C3%22%7D%2C%22C2%27%22%3A%7B%22parents%22%3A%5B%22C3%22%5D%2C%22id%22%3A%22C2%27%22%7D%7D%2C%22HEAD%22%3A%7B%22target%22%3A%22master%22%2C%22id%22%3A%22HEAD%22%7D%2C%22originTree%22%3A%7B%22branches%22%3A%7B%22master%22%3A%7B%22target%22%3A%22C2%27%22%2C%22id%22%3A%22master%22%2C%22remoteTrackingBranchID%22%3Anull%7D%7D%2C%22commits%22%3A%7B%22C0%22%3A%7B%22parents%22%3A%5B%5D%2C%22id%22%3A%22C0%22%2C%22rootCommit%22%3Atrue%7D%2C%22C1%22%3A%7B%22parents%22%3A%5B%22C0%22%5D%2C%22id%22%3A%22C1%22%7D%2C%22C3%22%3A%7B%22parents%22%3A%5B%22C1%22%5D%2C%22id%22%3A%22C3%22%7D%2C%22C2%27%22%3A%7B%22parents%22%3A%5B%22C3%22%5D%2C%22id%22%3A%22C2%27%22%7D%7D%2C%22HEAD%22%3A%7B%22target%22%3A%22master%22%2C%22id%22%3A%22HEAD%22%7D%7D%7D",
  "solutionCommand": "git checkout master;git pull;git checkout issue;git rebase master;git checkout master;git merge issue;git push",
  "startTree": "{\"branches\":{\"master\":{\"target\":\"C1\",\"id\":\"master\",\"remoteTrackingBranchID\":\"o/master\"},\"o/master\":{\"target\":\"C1\",\"id\":\"o/master\",\"remoteTrackingBranchID\":null},\"issue\":{\"target\":\"C2\",\"id\":\"issue\",\"remoteTrackingBranchID\":null}},\"commits\":{\"C0\":{\"parents\":[],\"id\":\"C0\",\"rootCommit\":true},\"C1\":{\"parents\":[\"C0\"],\"id\":\"C1\"},\"C2\":{\"parents\":[\"C1\"],\"id\":\"C2\"}},\"HEAD\":{\"target\":\"issue\",\"id\":\"HEAD\"},\"originTree\":{\"branches\":{\"master\":{\"target\":\"C3\",\"id\":\"master\",\"remoteTrackingBranchID\":null}},\"commits\":{\"C0\":{\"parents\":[],\"id\":\"C0\",\"rootCommit\":true},\"C1\":{\"parents\":[\"C0\"],\"id\":\"C1\"},\"C3\":{\"parents\":[\"C1\"],\"id\":\"C3\"}},\"HEAD\":{\"target\":\"master\",\"id\":\"HEAD\"}}}",
  "compareOnlyMasterHashAgnostic": false,
  "disabledMap": {},
  "name": {
    "de_DE": "MT6: Weniger Merge, mehr Rebase!"
  },
  "hint": {
    "de_DE": "Wenn der Branch nur einen Commit hat oder die letzte Aktion ein Merge des master in den Branch war, braucht man kein `--no-ff` zu setzen."
  },
  "startDialog": {
    "de_DE": {
      "childViews": [
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "## MT6: Weniger Merge, mehr Rebase!",
              "",
              "Merge Commits sind gut, aber zuviel davon machen die History unübersichtlich. Dieser Grundsatz zog sich durch die bisherigen Level und gilt auch weiter.",
              "",
              "Eine weitere Möglichkeit, Merge Commits zu vermeiden, bietet sich bei der Arbeit mit lokalen Branches wie sie zum Beispiel bei MT an der Tagesordnung sind: Aktualisieren des Branches per `git rebase`.",
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
              "## Merge merge",
              "",
              "Selbst wenn man korrekt merged und reintegriert - falls ein Branch mal längere Zeit lebt und der `master` öfter in den Branch gemerged wird, entsteht trotzdem jedes mal ein Commit."
            ],
            "afterMarkdowns": [
              "... und so weiter. Mit `git rebase` geht das schöner."
            ],
            "command": "git pull; git co issue; git merge master; git fakeTeamwork; git co master; git pull; git co issue; git merge master",
            "beforeCommand": "git clone; git co -b issue; git ci; git fakeTeamwork; git co master"
          }
        },
        {
          "type": "GitDemonstrationView",
          "options": {
            "beforeMarkdowns": [
              "## Rebase rebase",
              "",
              "Durch den Rebase werden die _Inhalte_ der Commits im Branch genommen und auf die Commits im Master aufgespielt."
            ],
            "afterMarkdowns": [
              "Der Unterschied ist ziemlich offensichtlich.",
              "",
              "",
              ""
            ],
            "command": "git pull; git co issue; git rebase master; git fakeTeamwork; git co master; git pull; git co issue; git rebase master",
            "beforeCommand": "git clone; git co -b issue; git ci; git fakeTeamwork; git co master"
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "## Rebase: auch bei Eintags-Branches sinnvoll",
              "",
              "Das eben gezeigte Beispiel ist ein Anwendungsfall für `git rebase`. Es verhindert mehrere Merge Commits im Branch, am Ende gibt es dann nur einen sauberen `merge --no-ff` bei der Reintegration des Issue in den `master`.",
              "",
              "Aber auch bei einem 1-Commit-Branch wie in diesem Level kann ein Rebase sinnvoll sein:",
              "",
              "Du hast einen Branch `issue` in dem du einen Commit gemacht hast, der also gerne ohne `--no-ff` in den `master` gemerged werden darf.",
              "",
              "Nur: auf dem Server wurde derweil etwas in den `master` committet. Hoarr.",
              "",
              "Hole die Änderungen in dein lokales Repository, rebase deinen Branch auf den `master` und merge ihn danach sauber in den `master`."
            ]
          }
        }
      ]
    }
  }
};
