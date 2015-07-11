The closure compiler is a _real_ compiler from JavaScript to JavaScript that checks and optimizes your code. The full documentation is available at [Google Developers](https://developers.google.com/closure/compiler/).

For playing around with the closure compiler you can use the [closure compiler web service UI](http://closure-compiler.appspot.com/home).

For automatation or integration of the closure compiler into your (build) system
* you can use the [closure compiler service API](https://developers.google.com/closure/compiler/docs/gettingstarted_api)
* you can download the [executable](http://dl.google.com/closure-compiler/compiler-latest.zip) and integrate it into your build system, e.g. by [jenkins](https://jenkins-ci.org/)
* you can get the [sources](https://github.com/google/closure-compiler), build them and integrate the resulting jar into your (build) system
  * therefore you need to clone the repository (or call _git submodule init_ to clone it directly to the subfolder _repository_ of this project)
  * install java >= 7
  * and apache-ant
  * finally run _ant jar_ in the folder [javascript/closure_tools/closure_compiler/repository](https://github.com/google/closure-compiler)
  * the result is located at _[javascript/closure_tools/closure_compiler](https://github.com/google/closure-compiler)/build_
