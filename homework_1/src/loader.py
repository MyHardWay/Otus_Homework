from git import Repo


def cloneGit(git_url, path_):
    Repo.clone_from(git_url, path_)
