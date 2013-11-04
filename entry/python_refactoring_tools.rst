================================================================
Pythonコードのリファクタリングのお供に
================================================================

:updated: 2013-11-04
:version: 0.1.0
:author: tell-k

PyLint
---------------------------------------------

http://www.pylint.org/

参考
++++++++++++

PyLint で Python コードの質をチェックする
  http://momijiame.tumblr.com/post/19955517467/pylint-python

pyflakes
---------------------------------------------

https://pypi.python.org/pypi/pyflakes

* PylintよりもライトなSyntaxチェックツール
* 個人的にはPyLintよりも好み

pyChecker
----------------------------------------------

http://pychecker.sourceforge.net/

pipでインストールできないの悲しいので使った事ない。あんまり使ってる人を見た事がない。

参考
+++++++++++++++++++++

python用の構文チェックpychecker
  http://d.hatena.ne.jp/leetmikeal/20120730/1343654465

pep8
--------------------------------------------

https://pypi.python.org/pypi/pep8

pep8に従ってるかチェックしてくれるツール

PEP 8 -- Style Guide for Python Code
  http://www.python.org/dev/peps/pep-0008/

* 参考

flake8
--------------------------------------------

https://pypi.python.org/pypi/flake8/

pyflakes + pep8 + 

* pyflakes + pep8
* a McCabe complexity checker.
* http://www.hexacosa.net/blog/detail/151/
* https://github.com/nvie/vim-flake8

pep257
--------------------------------------------

* PEP257にマッチしてくれるかチェックしてくれるツール

autopep8
--------------------------------------------

* https://github.com/hhatto/autopep8
* http://momijiame.tumblr.com/post/42168625947/python-pep8-autopep8
* http://blog.kzfmix.com/entry/1362570296

autoflake
--------------------------------------------

* https://github.com/myint/autoflake

docformatter
--------------------------------------------

* https://github.com/myint/docformatter

unify
--------------------------------------------

* https://pypi.python.org/pypi/unify

pyformat
--------------------------------------------

* https://github.com/myint/pyformat

jedi
--------------------------------------------

* http://d.hatena.ne.jp/heavenshell/20121203/1354534796
* https://pypi.python.org/pypi/jedi/
* http://mattn.kaoriya.net/software/vim/20121018212621.htm

rope
--------------------------------------------

* http://d.hatena.ne.jp/longicorn/20120307
* http://methane.hatenablog.jp/entry/2013/01/11/ropevim%E3%82%92%E3%82%A4%E3%83%B3%E3%82%B9%E3%83%88%E3%83%BC%E3%83%AB%E3%81%97%E3%81%A6%E3%81%BF%E3%82%8B
* http://methane.hatenablog.jp/entry/2013/01/11/ropevim_%E3%82%92%E4%BD%BF%E3%81%86

radon
--------------------------------------------

* https://pypi.python.org/pypi/restview

* http://ja.wikipedia.org/wiki/%E5%BE%AA%E7%92%B0%E7%9A%84%E8%A4%87%E9%9B%91%E5%BA%A6
* http://www.klocwork.com/products/documentation/current-ja/McCabe_%E5%BE%AA%E7%92%B0%E7%9A%84%E8%A4%87%E9%9B%91%E5%BA%A6
* http://a-programmer.blog.so-net.ne.jp/2007-07-30

eradicate
--------------------------------------------

* eradicate

misspell-check
--------------------------------------------

* https://github.com/lyda/misspell-check

metrics
--------------------------------------------

* https://pypi.python.org/pypi/metrics

PyMetrics
--------------------------------------------

* https://github.com/ipmb/PyMetrics


.. include:: /include/disqus.rst

.. include:: /include/socialbox.rst
