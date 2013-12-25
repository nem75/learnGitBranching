exports.level = {
  "goalTreeString": "%7B%22branches%22%3A%7B%22master%22%3A%7B%22target%22%3A%22C7%22%2C%22id%22%3A%22master%22%2C%22remoteTrackingBranchID%22%3Anull%7D%2C%22feature%22%3A%7B%22target%22%3A%22C6%27%22%2C%22id%22%3A%22feature%22%2C%22remoteTrackingBranchID%22%3Anull%7D%7D%2C%22commits%22%3A%7B%22C0%22%3A%7B%22parents%22%3A%5B%5D%2C%22id%22%3A%22C0%22%2C%22rootCommit%22%3Atrue%7D%2C%22C1%22%3A%7B%22parents%22%3A%5B%22C0%22%5D%2C%22id%22%3A%22C1%22%7D%2C%22C2%22%3A%7B%22parents%22%3A%5B%22C1%22%5D%2C%22id%22%3A%22C2%22%7D%2C%22C3%22%3A%7B%22parents%22%3A%5B%22C1%22%5D%2C%22id%22%3A%22C3%22%7D%2C%22C4%22%3A%7B%22parents%22%3A%5B%22C3%22%5D%2C%22id%22%3A%22C4%22%7D%2C%22C5%22%3A%7B%22parents%22%3A%5B%22C2%22%2C%22C4%22%5D%2C%22id%22%3A%22C5%22%7D%2C%22C6%22%3A%7B%22parents%22%3A%5B%22C5%22%5D%2C%22id%22%3A%22C6%22%7D%2C%22C7%22%3A%7B%22parents%22%3A%5B%22C4%22%5D%2C%22id%22%3A%22C7%22%7D%2C%22C2%27%22%3A%7B%22parents%22%3A%5B%22C7%22%5D%2C%22id%22%3A%22C2%27%22%7D%2C%22C6%27%22%3A%7B%22parents%22%3A%5B%22C2%27%22%5D%2C%22id%22%3A%22C6%27%22%7D%7D%2C%22tags%22%3A%7B%7D%2C%22HEAD%22%3A%7B%22target%22%3A%22feature%22%2C%22id%22%3A%22HEAD%22%7D%7D",
  "solutionCommand": "git rebase master feature",
  "startTree": "{\"branches\":{\"master\":{\"target\":\"C7\",\"id\":\"master\",\"remoteTrackingBranchID\":null},\"feature\":{\"target\":\"C6\",\"id\":\"feature\",\"remoteTrackingBranchID\":null}},\"commits\":{\"C0\":{\"parents\":[],\"id\":\"C0\",\"rootCommit\":true},\"C1\":{\"parents\":[\"C0\"],\"id\":\"C1\"},\"C2\":{\"parents\":[\"C1\"],\"id\":\"C2\"},\"C3\":{\"parents\":[\"C1\"],\"id\":\"C3\"},\"C4\":{\"parents\":[\"C3\"],\"id\":\"C4\"},\"C5\":{\"parents\":[\"C2\",\"C4\"],\"id\":\"C5\"},\"C6\":{\"parents\":[\"C5\"],\"id\":\"C6\"},\"C7\":{\"parents\":[\"C4\"],\"id\":\"C7\"}},\"tags\":{},\"HEAD\":{\"target\":\"master\",\"id\":\"HEAD\"}}",
  "name": {
    "de_DE": "Lokalen Branch bereinigen"
  },
  "hint": {
    "de_DE": "Du kannst das Wechseln in einen Branch und den Rebase mit einem einzigen Befehl bewirken."
  },
  "startDialog": {
    "de_DE": {
      "childViews": [
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "## Lokalen Branch von Merge auf Rebase \"umstellen\"",
              "",
              "Ich hab's in einem der vorherigen Level gesagt: wenn du Änderungen aus z.B. dem `master` in einen lokalen \"Kind-Branch\" bringen willst, benutz am besten `git rebase`. Dadurch bekommst du die Änderungen und vermeidest unnötige Merge-Commits.",
              "",
              "Was ist aber wenn du noch einen lokalen Branch hast, in den du schon X mal den `master` (oder einen anderen Branch) gemerged hast? Lässt sich der irgendwie um die Merge Commits bereinigen?",
              "",
              "Schauen wir mal ..."
            ]
          }
        },
        {
          "type": "GitDemonstrationView",
          "options": {
            "beforeMarkdowns": [
              "Hier haben wir einen lokalen Branch `local` mit einigen Änderungen und einem Merge Commit, vom Nachziehen von Änderungen aus dem `master`. Und nun?",
              ""
            ],
            "afterMarkdowns": [
              "Nur den Branch auf den `master` rebasen? Das ist schon fast _zu_ einfach.",
              "",
              "Durch den Rebase passieren genau die zwei Dinge, die wir wollen: alle bisherigen Änderungen des `master` kommen auch in den Branch. Und alle Merge-Commits fallen weg. Magic!!1"
            ],
            "command": "git rebase master",
            "beforeCommand": "git co -b local; git ci; git co master; git ci; git co local; git merge master; git ci; git co master; git ci; git co local"
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "## Abrakadabra!",
              "",
              "Ist eigentlich ganz einfach:",
              "",
              "* `git rebase` ignoriert per Default immer Merge Commits und konzentriert sich auf die Commits, in denen sich tatsächlich Inhalte ändern;",
              "* es geht also auch hier zum letzten gemeinsamen Vorfahr der beiden Branches zurück (`C1`),",
              "* ermittelt alle \"echten\" Commits in `local`,",
              "* und hängt Kopien davon an `master` an.",
              "",
              "Ergo: Merge-Commits futsch, übrige Commits von `local` an `master` angehängt, d.h. alle Commits von `master` gehören nun auch zu `local`.",
              "",
              "Whoop!",
              "",
              "(Wenn man die Merge-Commits erhalten will, kann man das mit `git rebase --preserve-merges` tun.)"
            ]
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "Simpel, oder?",
              "",
              "## Ziel des Levels",
              "",
              "* Merge-Commits los werden;",
              "* den Branch auf den Stand des `master` bringen.",
              "",
              "Damit's nicht zu einfach wird: die Ideal-Lösung braucht nur einen einzigen Befehl. :)",
              "",
              "Viel Erfolg!",
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
