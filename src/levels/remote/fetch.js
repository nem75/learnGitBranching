exports.level = {
  "goalTreeString": "{\"branches\":{\"master\":{\"target\":\"C2\",\"id\":\"master\"},\"bugFix\":{\"target\":\"C3\",\"id\":\"bugFix\"},\"o/master\":{\"target\":\"C5\",\"id\":\"o/master\"},\"o/bugFix\":{\"target\":\"C7\",\"id\":\"o/bugFix\"}},\"commits\":{\"C0\":{\"parents\":[],\"id\":\"C0\",\"rootCommit\":true},\"C1\":{\"parents\":[\"C0\"],\"id\":\"C1\"},\"C2\":{\"parents\":[\"C1\"],\"id\":\"C2\"},\"C3\":{\"parents\":[\"C1\"],\"id\":\"C3\"},\"C4\":{\"parents\":[\"C2\"],\"id\":\"C4\"},\"C6\":{\"parents\":[\"C3\"],\"id\":\"C6\"},\"C5\":{\"parents\":[\"C4\"],\"id\":\"C5\"},\"C7\":{\"parents\":[\"C6\"],\"id\":\"C7\"}},\"HEAD\":{\"target\":\"bugFix\",\"id\":\"HEAD\"},\"originTree\":{\"branches\":{\"master\":{\"target\":\"C5\",\"id\":\"master\"},\"bugFix\":{\"target\":\"C7\",\"id\":\"bugFix\"}},\"commits\":{\"C0\":{\"parents\":[],\"id\":\"C0\",\"rootCommit\":true},\"C1\":{\"parents\":[\"C0\"],\"id\":\"C1\"},\"C2\":{\"parents\":[\"C1\"],\"id\":\"C2\"},\"C3\":{\"parents\":[\"C1\"],\"id\":\"C3\"},\"C4\":{\"parents\":[\"C2\"],\"id\":\"C4\"},\"C5\":{\"parents\":[\"C4\"],\"id\":\"C5\"},\"C6\":{\"parents\":[\"C3\"],\"id\":\"C6\"},\"C7\":{\"parents\":[\"C6\"],\"id\":\"C7\"}},\"HEAD\":{\"target\":\"bugFix\",\"id\":\"HEAD\"}}}",
  "solutionCommand": "git fetch",
  "startTree": "{\"branches\":{\"master\":{\"target\":\"C2\",\"id\":\"master\"},\"bugFix\":{\"target\":\"C3\",\"id\":\"bugFix\"},\"o/master\":{\"target\":\"C2\",\"id\":\"o/master\"},\"o/bugFix\":{\"target\":\"C3\",\"id\":\"o/bugFix\"}},\"commits\":{\"C0\":{\"parents\":[],\"id\":\"C0\",\"rootCommit\":true},\"C1\":{\"parents\":[\"C0\"],\"id\":\"C1\"},\"C2\":{\"parents\":[\"C1\"],\"id\":\"C2\"},\"C3\":{\"parents\":[\"C1\"],\"id\":\"C3\"}},\"HEAD\":{\"target\":\"bugFix\",\"id\":\"HEAD\"},\"originTree\":{\"branches\":{\"master\":{\"target\":\"C5\",\"id\":\"master\"},\"bugFix\":{\"target\":\"C7\",\"id\":\"bugFix\"}},\"commits\":{\"C0\":{\"parents\":[],\"id\":\"C0\",\"rootCommit\":true},\"C1\":{\"parents\":[\"C0\"],\"id\":\"C1\"},\"C2\":{\"parents\":[\"C1\"],\"id\":\"C2\"},\"C3\":{\"parents\":[\"C1\"],\"id\":\"C3\"},\"C4\":{\"parents\":[\"C2\"],\"id\":\"C4\"},\"C5\":{\"parents\":[\"C4\"],\"id\":\"C5\"},\"C6\":{\"parents\":[\"C3\"],\"id\":\"C6\"},\"C7\":{\"parents\":[\"C6\"],\"id\":\"C7\"}},\"HEAD\":{\"target\":\"bugFix\",\"id\":\"HEAD\"}}}",
  "name": {
    "en_US": "Git Fetchin'",
    "de_DE": "Git Fetch"
  },
  "hint": {
    "en_US": "just run git fetch!",
    "de_DE": "Einfach git fetch ausführen!"
  },
  "startDialog": {
    "en_US": {
      "childViews": [
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "## Git Fetch",
              "",
              "Working with git remotes really just boils down to transferring data _to_ and _from_ other repositories. As long as we can send commits back and forth, we can share any type of update that is tracked by git (and thus share work, new files, new ideas, love letters, etc etc).",
              "",
              "In this lesson we will learn how to fetch data _from_ a remote repository -- the command for this is conveniently named `git fetch`.",
              "",
              "You'll notice that as we update our representation of the remote repository, our _remote_ branches will update to reflect that new representation. This ties into the previous lesson on remote branches"
            ]
          }
        },
        {
          "type": "GitDemonstrationView",
          "options": {
            "beforeMarkdowns": [
              "Before getting into the details of `git fetch`, let's see it in action! Here we have a remote repository that contains two commits that our local repository does not have."
            ],
            "afterMarkdowns": [
              "There we go! Commits `C2` and `C3` were downloaded to our local repository, and our remote branch `o/master` was updated to reflect this."
            ],
            "command": "git fetch",
            "beforeCommand": "git clone; git fakeTeamwork 2"
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "### What fetch does",
              "",
              "`git fetch` performs two main steps, and two main steps only. It:",
              "",
              "* downloads the commits that the remote has but are missing from our local repository, and...",
              "* updates where our remote branches point (for instance, `o/master`)",
              "",
              "`git fetch` essentially it brings our _local_ representation of the remote repository into synchronization with what the _actual_ remote repository looks like (right now).",
              "",
              "If you remember from the previous lesson, we said that remote branches reflect the state of the remote repositories _since_ you last talked to those remotes. `git fetch` is the way you talk to these remotes! Hopefully the connection between remote branches and `git fetch` is apparent now",
              "",
              "`git fetch` usually talks to the remote repository through the Internet (via a protocol like `http://` or `git://`).",
              ""
            ]
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "### What fetch doesn't do",
              "",
              "`git fetch`, however, does not change anything about _your_ local state. It will not update your `master` branch or change anything about how your filesystem looks right now.",
              "",
              "This is important to understand because a lot of developers think that running `git fetch` will make their local work reflect the state of the remote. It may download all the necessary data to do that, but it does _not_ actually change any of your local files. We will learn commands in later lessons to do just that :D",
              "",
              "So at the end of the day, you can think of running `git fetch` as a download step."
            ]
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "To finish the level, simply `git fetch` and download all the commits!"
            ]
          }
        }
      ]
    },
    "de_DE": {
      "childViews": [
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "## Git Fetch",
              "",
              "In Git mit entfernten Repositorys zu arbeiten lässt sich wirklich auf das Hin- und Zurückübertragen von Daten reduzieren. Solange wir Commits hin und her schicken können, können wir jede Art Update teilen, das von Git getrackt wird (und somit Arbeit, neue Dateien, neue Ideen, Liebesbriefe etc. teilen).",
              "",
              "In diesem Level werden wir lernen, wie man Daten _von_ einem entfernten Repository holt -- der entsprechende Befehl heißt praktischerweise `git fetch`.",
              "",
              "Dir wird auffallen, dass mit der Aktualisierung unserer Darstellung des entfernten Repositorys die _Remote_ Branches auf den neuesten Stand gebracht werden. Das passt zum vorherigen Level über Remote Branches."
            ]
          }
        },
        {
          "type": "GitDemonstrationView",
          "options": {
            "beforeMarkdowns": [
              "Bevor wir uns die Einzelheiten von `git fetch` ansehen wollen wir es mal in Aktion sehen. Wir haben hier ein entferntes Repository, das zwei Commits hat die in unserem lokalen Repository fehlen."
            ],
            "afterMarkdowns": [
              "Das war's! Die Commits `C2` und `C3` wurden zu unserem Repository heruntergeladen und unser Remote Branch `o/master` wurde aktualisiert."
            ],
            "command": "git fetch",
            "beforeCommand": "git clone; git fakeTeamwork 2"
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "### Was Fetch tut",
              "",
              "`git fetch` führt genau zwei Schritte aus:",
              "",
              "* Es lädt die Commits herunter, die im lokalen Repository fehlen, und ...",
              "* aktualisiert die Remote Branches wo nötig (zum Beispiel, `o/master`).",
              "",
              "`git fetch` synchronisiert im Prinzip unsere _lokale_ Abbildung des entfernten Repositorys mit dem wie das entfernte Repository _tatsächlich_ aussieht (in diesem Moment).",
              "",
              "Wie du dich vielleicht erinnerst, haben wir im letzten Level gesagt, dass die Remote Branches den Zustand der Branches auf dem entfernten Repository darstellen _seit_ du das letzte Mal dieses Repository angesprochen hast. `git fetch` ist die Methode mit der du das Repository ansprichst! Der Zusammenhang zwischen Remote Branches und `git fetch` ist damit hoffentlich klar.",
              "",
              "`git fetch` kommuniziert mit dem entfernten Repository in der Regel über das Internet (über ein Protokoll wie `http://` oder `git://`).",
              ""
            ]
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "### Was Fetch nicht tut",
              "",
              "`git fetch` ändert allerdings überhaupt nichts an _deinen_ lokalen Branches. Es aktualisiert nicht deinen `master` oder ändert irgendetwas an deinem Checkout.",
              "",
              "Das ist wichtig zu wissen, denn eine Menge Entwickler glauben, wenn sie `git fetch` ausführen würden ihre lokalen Branches auf den Stand des entfernten Repositorys gebracht. Es lädt zwar alle Daten herunter, damit man diese Aktualisierung durchführen kann, aber es ändert _nichts_ an deinen lokalen Branches. Wir werden in späteren Level Befehle genau dafür kennenlernen. :D",
              "",
              "Am Ende des Tages kannst du dir `git fetch` also als den Donwload-Schritt vorstellen."
            ]
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "Um diesen Level zu schaffen musst du einfach nur `git fetch` ausführen, um alle Commits herunterzuladen!"
            ]
          }
        }
      ]
    }
  }
};
