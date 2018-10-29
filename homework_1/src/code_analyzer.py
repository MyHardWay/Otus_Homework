import argparse

from loader import cloneGit
from proj_names_analyzer import PyAnalyzer
from reporter import reportAsPrint, reportAsJson, reportAsCsv

parser = argparse.ArgumentParser()
subparsers = parser.add_subparsers(dest='command')
clone_parser = subparsers.add_parser('clone')
clone_parser.add_argument('--r', required=True, help='Repository Url')
clone_parser.add_argument('--p', required=True, help='Path')

analyze_parser = subparsers.add_parser('analyze')
action_group = analyze_parser.add_mutually_exclusive_group(required=True)
action_group.add_argument(
    '--nouns', nargs=1, help='Show statics for most popular nouns.'
)
action_group.add_argument(
    '--verbs', nargs=1, help='Show statics for most popular verbs'
)
action_group.add_argument(
    '--funcs', nargs=1, help='Show statics for most words for functions'
)
action_group.add_argument(
    '--vars', nargs=1,
    help='Show statics for most words for local variables'
)
reporter_group = analyze_parser.add_mutually_exclusive_group(required=True)
reporter_group.add_argument(
    '--tocsv', nargs=1, help='Report as csv. Need '
)
reporter_group.add_argument('--tojson', nargs=1, help='Report as json')
reporter_group.add_argument(
    '--toprint', action='store_false',
    help='Show statics for most words for local variables'
)


def getReportMsg(args_):
    if args_.nouns:
        msg = PyAnalyzer.get_top_nouns_in_path(args_.nouns[0])
    elif args_.verbs:
        msg = PyAnalyzer.get_top_verbs_in_path(args_.verbs[0])
    elif args._funcs:
        msg = PyAnalyzer.get_top_functions_names_in_path(args_.funcs[0])
    elif args_.vars:
        msg = PyAnalyzer.get_top_variables_names_in_path(args_.vars[0])
    return msg


def makeReport(args_, msg):
    if args_.tocsv:
        reportAsCsv(msg, args_.tocsv[0])
    elif args_.tojson:
        reportAsJson(msg, args_.tojson[0])
    elif args_.toprint:
        reportAsPrint(msg)


if __name__ == "__main__":
    args_ = parser.parse_args()
    if args_.command == 'clone':
        repo = args_.r
        path_ = args_.p
        cloneGit(repo, path_)
    elif args_.command == 'analyze':
        msg = getReportMsg(args_)
        makeReport(args_, msg)
