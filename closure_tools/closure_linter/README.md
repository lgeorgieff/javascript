[Closure Linter](https://developers.google.com/closure/utilities/) is a python tool written by Google. It can be used to check the style of JavaScript code. It offers only little custimzation possibiities regarding the JavaScript code and focuses on the official [Google JavaScript style guide](http://google-styleguide.googlecode.com/svn/trunk/javascriptguide.xml).

# Installation
1. Install [python 2.7.X](https://www.python.org/downloads/)
1. Download the code from the [Closure Linter GitHub repository](https://github.com/google/closure-linter).
  * _git clone https://github.com/google/closure-linter.git_
1. _cd &lt;Closure Linter repository&gt;_
1. _sudo python setup.py install_

Finally you can use the executables:
* gjslint
* fixjsstyle

# Usage
## gjslint
_gjslint_ will check your JavaScript files for invalid code style and print error messages on the console/_stdout_. It does not fix them and it also does not report programming errors. For checking your code with respect to coding errors you have to use other tools, e.g. the [closure compiler](../closure_compiler/README.md).

The basic approach is to check a single JavaScript file, e.g. _gjslint test.js_. This performs the stantdard checks for the file _test.js_. If the file is valid according to the [Google JavaScript style guide](http://google-styleguide.googlecode.com/svn/trunk/javascriptguide.xml), a short message is printed on the screen and the exit code of _gjslint_ is _0_. In error case the errors including the erorr IDs are printed on the console (_stdout_) and the return value of _gjslint_ is _1_.

With _gjslint --help_ you get the full list of options _gjslint_ offers. The following sections will describe only a few of them.

### Disabling Checks
In error case _gjslint_ outputs data like this:
```
Line 8, E:0110: Line too long (116 characters).
Line 9, E:0110: Line too long (111 characters).
Line 11, E:0110: Line too long (117 characters).
Line 12, E:0110: Line too long (111 characters).
Line 15, E:0110: Line too long (93 characters).
Line 19, E:0001: Extra space after "my_fun"
Line 20, E:0002: Missing space after "+"
Found 7 errors, including 0 new errors, in 1 file (0 files OK).

Some of the errors reported by GJsLint may be auto-fixable using the script
fixjsstyle. Please double check any changes it makes and report any bugs. The
script can be run by executing:

fixjsstyle test.js
```

You can use the test script [test.js](test.js) for testing. It should produce exaclty the same output as shown before.

For disabling specific errors you may use the switch _--disable_. It allows you to specify the errors that should be ignored, e.g. _gjslint --disable 0110 test.js_. If you want to specify several error types to be ignored you can use _gjslint --disable 0110,0001 test.js_. In this case the result will be the following one:
```
Line 20, E:0002: Missing space after "+"
Found 1 error, including 0 new errors, in 1 file (0 files OK).

Some of the errors reported by GJsLint may be auto-fixable using the script
fixjsstyle. Please double check any changes it makes and report any bugs. The
script can be run by executing:

fixjsstyle --disable 0110,0001 test.js
```

The same result also can be achieved by specifying the line length and ignoring extra spaces (_0001_), i.e. _gjslint --max_line_length 120 --disable 0001 test.js_

You may use the switch _--jslint&#95;error_ to specify additional code style checks or you may use the switch _--strict_ to enforce checking against the stricter closure style.

If you want to enforce the checking of existing documentation ([JSDoc](../../jsdoc/README.md)), you may use the switch _--jsdoc_.

### Checking Multiple Files
_gjslint_ can be used to also check entire directories with files by specifying a path and using the command line switch _--recurse_, i.e. _gjslint --recurse ./test_. As default only JavaScript files are checked, i.e. files with a file extension set to _.js_. To take additional files into account you may use the switch _--additional&#95;extensions_, e.g. _gjslint --additional&#95;extensions JavaScript --recurse ./test_ will also check the file [/javascript/closure&#95;tools/closure&#95;linter/test/test.JavaScript](test/test.JavaScript). To check JavaScript code in HTML files you can use the switch _--check&#95;html_.

If you want to exclude certain sub directories or files from being checked by the Closure Linter tool, you may use the command line switches _-e/_ respectively _--exclude&#95;directories_ or _-x_ resepectively _--exclude&#95;files_ and set the corresponding paths as a comma separated list on the switches, e.g. _gjslint --additional&#95;extensions JavaScript --recurse ./test --exclude&#95;directories sub1_ will ignore the directory [test/sub1](test/sub1).

## fixjsstyle
_fixjsstyle_ will check your JavaScript files for invalid code style and directly fix the errors in the corresponding files. The return code of _fixjsstyle_ is _0_ for files that are valid and for files that are invalid against the [Google JavaScript style guide](http://google-styleguide.googlecode.com/svn/trunk/javascriptguide.xml).

The command line options are similar to the options that are available for _gjslint_. _fixjsstyle --help_ mentions the following additional option which is of interest _--[no]dry&#95;run_. It prevents _fixjsstyle_ from modifying the files directly but motivates the tool to print the output on _stdout_.

An example run can be started by calling _fixjsstyle test.js_. The following modifications are made to the file [test.js](test.js):
```diff
--- a/closure_tools/closure_linter/test.js
+++ b/closure_tools/closure_linter/test.js
@@ -19,8 +19,8 @@
 
 /**
 */
-function my_fun () {
-    return iDoesNotExist +2;
+function my_fun() {
+    return iDoesNotExist + 2;
 }
 
 my_fun();
```
