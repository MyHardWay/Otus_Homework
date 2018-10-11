import csv
import json


def reportAsPrint(result):
    res_str = 'Result is: %s' % result
    print(res_str)


def reportAsJson(result, path_):
    with open(path_, 'w') as outfile:
        json.dump(result, outfile)


def reportAsCsv(result, path_):
    with open(path_, 'w', newline='') as outfile:
        wr = csv.writer(outfile, quoting=csv.QUOTE_ALL)
        wr.writerow(result)
