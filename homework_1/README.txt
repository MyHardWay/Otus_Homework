#  Описание


Библиотека предоставляет набор функций для анализа используемых именований публичных функций и переменных проекта, загружать код проекта,
выводить отчёты, а также скрипт агрегирующий в себе весь это функционал.

Установка и Автозагрузка
===============

Необходимо загрузить исходные коды пакета в виде Zip архива - https://github.com/MyHardWay/Otus_Homework/archive/master.zip
Или клонировать репозиторий - https://github.com/MyHardWay/Otus_Homework.git

Использование 
===============

Функциональные модули:

proj_name_analyzer.py - Предоставляет набор функций для анализа используемых именований публичных функций и переменных проекта


Пример использования:

from proj_name_analyzer import get_top_functions_names_in_path
project_path = /your/project/path/
res_msg = get_top_functions_names_in_path(project_path)





reporter.py - Позволяет сохранять отчёты в csv/json файлах или выводить в консоль

Пример использования:

from reporter import reportAsJson
from proj_name_analyzer import get_top_functions_names_in_path

report_path = /your/local/dir/test.json
project_path = /your/project/path/
res_msg = get_top_functions_names_in_path(project_path)
reportAsJson(rep_msg)



loader.py - Загружает исходники с удалённого репозитория

Пример использования:

from loader import cloneGit

project_path = /your/project/path/
repo_url = 'http://your/repo/url/'
cloneGit(repo_url, project_path)


code_analyzer.py - Агрегирует в себе все возможности библиотеки и запускается из командной строки

Параметры запуска:
clone --r [Repository_url] --p [Path_to_your_project] - Клонирует удалённый репозиторий в указанную директорию
analyze (--nouns - Показывает статистику по самым используемым существительным |
	--verbs - Показывает статистику по самым используемым глаголам |
	--funcs - Показывает статистику по самым используемым существительным |
	--vars Показывает статистику по самым используемым существительным 
	) [Path_to_your_project] [Way_to_report ( --tocsv - Выводит отчёт в csv файл
						  --tojson - Выводит отчёт в json файл
 						  --toprint - Выводит отчёт в консоль
						)]

Пример использования:

python3 code_analyzer.py clone --r https://github.com/MyHardWay/Otus_Homework --p /your/local/path
python3 code_analyzer.py analyze --nouns /your/local/path --tocsv /your/local/path/file.csv




