import ast
import os

from nltk import pos_tag


def flat(_list):
    """ [(1,2), (3,4)] -> [1, 2, 3, 4]"""
    return sum([list(item) for item in _list], [])


def is_verb(word):
    pos_info = pos_tag([word])
    return pos_info[0][1].startswith('VB')


def split_snake_case_name_to_words(name):
    return [n for n in name.split('_') if n]


def get_trees(_path, with_filenames=False, with_file_content=False):
    trees = []
    filenames = get_py_filenames_in_path(_path)
    for filename in filenames:
        filename, main_file_content, tree = get_file_info(filename)
        if with_filenames:
            if with_file_content:
                trees.append((filename, main_file_content, tree))
            else:
                trees.append((filename, None, tree))
        else:
            trees.append((None, None, tree))
    return trees


def get_py_filenames_in_path(path):
    filenames = []
    for dirname, dirs, files in os.walk(path, topdown=True):
        for file in files:
            if file.endswith('.py'):
                filenames.append(os.path.join(dirname, file))
            if len(filenames) == 100:
                break
    return filenames


def get_verbs_from_function_name(function_name):
    return [word for word in function_name.split('_') if is_verb(word)]


def get_public_functions_names_in_trees(trees):
    fncs = flat(
        [
            [node.name.lower() for node in ast.walk(t)
             if isinstance(node, ast.FunctionDef)] for t in trees
         ]
                )
    public_fncs = [f for f in fncs
                   if not (f.startswith('__') and f.endswith('__'))]
    return public_fncs


def get_filled_trees(path=''):
    return [t for t in get_trees(path) if t]


def get_all_names(tree):
    return [node.id for node in ast.walk(tree) if isinstance(node, ast.Name)]


def get_file_info(filename):
    with open(filename, 'r', encoding='utf-8') as attempt_handler:
        main_file_content = attempt_handler.read()
    try:
        tree = ast.parse(main_file_content)
    except SyntaxError as e:
        tree = None, None, None
    return filename, main_file_content, tree
