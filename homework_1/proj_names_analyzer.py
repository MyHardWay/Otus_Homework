import ast
import collections
import os


from nltk import pos_tag

from _common import (
    get_all_names, get_filled_trees, get_public_functions_names_in_trees,
    flat, split_snake_case_name_to_words
)


def get_all_words_in_path(path):
    trees = get_filled_trees(path)
    fncs = [f for f in flat([get_all_names(t) for t in trees])
            if not (f.startswith('__') and f.endswith('__'))]
    return flat([split_snake_case_name_to_words(function_name) for
                 function_name in function_names])


def get_top_verbs_in_path(path, top_size=10):
    trees = get_filled_trees(path)
    fncs = get_public_functions_names_in_trees(trees)
    verbs = flat([get_verbs_from_function_name(function_name) for
                  function_name in fncs])
    return collections.Counter(verbs).most_common(top_size)


def get_top_functions_names_in_path(path, top_size=10):
    trees = get_filled_trees(path)
    fncs = get_public_functions_names_in_trees(trees)
    return collections.Counter(nms).most_common(top_size)


if __name__ == "__main__":
    wds = []
    projects = [
        'django',
        'flask',
        'pyramid',
        'reddit',
        'requests',
        'sqlalchemy',
    ]
    for project in projects:
        path = os.path.join('.', project)
        print(path)
        wds += get_top_verbs_in_path(path)

    top_size = 200
    print('total %s words, %s unique' % (len(wds), len(set(wds))))
    for word, occurence in collections.Counter(wds).most_common(top_size):
        print(word, occurence)
