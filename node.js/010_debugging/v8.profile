Statistical profiling result from v8.log, (7796 ticks, 0 unaccounted, 0 excluded).

 [Shared libraries]:
   ticks  total  nonlib   name
   4593   58.9%    0.0%  /usr/bin/node
     86    1.1%    0.0%  /usr/lib/libc-2.22.so
      1    0.0%    0.0%  /usr/lib/libpthread-2.22.so

 [JavaScript]:
   ticks  total  nonlib   name
    353    4.5%   11.3%  LazyCompile: *next native array-iterator.js:44:27
    305    3.9%    9.8%  Builtin: ArgumentsAdaptorTrampoline
    262    3.4%    8.4%  LazyCompile: *InnerArrayForEach native array.js:942:27
    250    3.2%    8.0%  Stub: CEntryStub
    247    3.2%    7.9%  Stub: KeyedLoadICStub
    184    2.4%    5.9%  LazyCompile: *multisplitForOf /home/lukas/Development/GitHub/javascript/node.js/010_debugging/profiling.js:49:26
    161    2.1%    5.2%  Stub: LoadICStub
    123    1.6%    3.9%  LazyCompile: *multisplitFor /home/lukas/Development/GitHub/javascript/node.js/010_debugging/profiling.js:31:24
    116    1.5%    3.7%  LazyCompile: *split native string.js:424:23
    109    1.4%    3.5%  LazyCompile: *CreateIteratorResultObject native array-iterator.js:38:36
     86    1.1%    2.8%  Stub: CallFunctionStub_Args0
     63    0.8%    2.0%  LazyCompile: *<anonymous> /home/lukas/Development/GitHub/javascript/node.js/010_debugging/profiling.js:73:34
     63    0.8%    2.0%  Builtin: JSConstructStubGeneric
     53    0.7%    1.7%  LazyCompile: *<anonymous> /home/lukas/Development/GitHub/javascript/node.js/010_debugging/profiling.js:71:24
     46    0.6%    1.5%  LazyCompile: IN native runtime.js:277:12
     42    0.5%    1.3%  Stub: CallFunctionStub_Args1
     42    0.5%    1.3%  LazyCompile: *forEach native array.js:961:22
     41    0.5%    1.3%  Stub: FastNewClosureStub
     41    0.5%    1.3%  Handler: push
     40    0.5%    1.3%  LazyCompile: *CreateArrayIterator native array-iterator.js:30:29
     34    0.4%    1.1%  Stub: ToBooleanStub(None)
     31    0.4%    1.0%  Stub: LoadFieldStub {2}
     29    0.4%    0.9%  Stub: LoadFieldStub
     29    0.4%    0.9%  Stub: LoadConstantStub
     29    0.4%    0.9%  Handler: next
     24    0.3%    0.8%  LazyCompile: *<anonymous> /home/lukas/Development/GitHub/javascript/node.js/010_debugging/profiling.js:70:24
     23    0.3%    0.7%  Stub: ToBooleanStub(None) {1}
     22    0.3%    0.7%  Handler: split
     20    0.3%    0.6%  KeyedStoreIC: symbol("ArrayIterator#next" hash 2e0a23c2)
     19    0.2%    0.6%  LazyCompile: *values native array-iterator.js:73:21
     18    0.2%    0.6%  Stub: LoadFieldStub {1}
     18    0.2%    0.6%  LazyCompile: *ArrayIterator native array-iterator.js:29:23
     17    0.2%    0.5%  Stub: LoadConstantStub {1}
     16    0.2%    0.5%  Stub: StoreTransitionStub
     16    0.2%    0.5%  Stub: StoreFieldStub
     14    0.2%    0.4%  Handler: symbol("Symbol.iterator" hash e20bfce)
      9    0.1%    0.3%  Stub: StoreFieldStub {1}
      9    0.1%    0.3%  Handler: symbol("ArrayIterator#kind" hash 1d20d3d8) {1}
      8    0.1%    0.3%  Stub: StoreTransitionStub {2}
      8    0.1%    0.3%  Stub: LoadConstantStub {3}
      8    0.1%    0.3%  LazyCompile: *testFor /home/lukas/Development/GitHub/javascript/node.js/010_debugging/profiling.js:83:18
      8    0.1%    0.3%  KeyedStoreIC: symbol("ArrayIterator#kind" hash 1d20d3d8)
      8    0.1%    0.3%  Builtin: ArrayPush
      7    0.1%    0.2%  Stub: LoadConstantStub {2}
      7    0.1%    0.2%  KeyedStoreIC: symbol("ArrayIterator#next" hash 2e0a23c2) {2}
      7    0.1%    0.2%  Handler: symbol("ArrayIterator#next" hash 2e0a23c2) {1}
      6    0.1%    0.2%  Stub: CallConstructStub
      5    0.1%    0.2%  Stub: StoreTransitionStub {1}
      5    0.1%    0.2%  Stub: StoreFastElementStub
      5    0.1%    0.2%  KeyedStoreIC: symbol("ArrayIterator#object" hash ba8f673) {1}
      4    0.1%    0.1%  Stub: ToBooleanStub(Bool)
      4    0.1%    0.1%  Stub: FastNewContextStub
      4    0.1%    0.1%  LazyCompile: *multisplitForEach /home/lukas/Development/GitHub/javascript/node.js/010_debugging/profiling.js:65:28
      4    0.1%    0.1%  KeyedStoreIC: symbol("ArrayIterator#object" hash ba8f673)
      3    0.0%    0.1%  Stub: RecordWriteStub
      3    0.0%    0.1%  Stub: FastCloneShallowArrayStub
      3    0.0%    0.1%  Handler: symbol("ArrayIterator#object" hash ba8f673) {2}
      1    0.0%    0.0%  Stub: KeyedLoadICTrampolineStub
      1    0.0%    0.0%  Stub: FastNewContextStub {1}
      1    0.0%    0.0%  LazyCompile: ~testFor /home/lukas/Development/GitHub/javascript/node.js/010_debugging/profiling.js:83:18
      1    0.0%    0.0%  LazyCompile: ~replace native string.js:152:23
      1    0.0%    0.0%  Handler: symbol("Symbol.iterator" hash e20bfce) {1}

 [C++]:
   ticks  total  nonlib   name

 [GC]:
   ticks  total  nonlib   name
    244    3.1%

 [Bottom up (heavy) profile]:
  Note: percentage shows a share of a particular caller in the total
  amount of its parent calls.
  Callers occupying less than 2.0% are not shown.

   ticks parent  name
   4593   58.9%  /usr/bin/node
   4305   93.7%    /usr/bin/node
   2018   46.9%      LazyCompile: *split native string.js:424:23
    711   35.2%        LazyCompile: *multisplitForOf /home/lukas/Development/GitHub/javascript/node.js/010_debugging/profiling.js:49:26
    668   94.0%          LazyCompile: *testFor /home/lukas/Development/GitHub/javascript/node.js/010_debugging/profiling.js:83:18
    668  100.0%            LazyCompile: ~main /home/lukas/Development/GitHub/javascript/node.js/010_debugging/profiling.js:91:15
     43    6.0%          LazyCompile: ~testFor /home/lukas/Development/GitHub/javascript/node.js/010_debugging/profiling.js:83:18
     43  100.0%            LazyCompile: ~main /home/lukas/Development/GitHub/javascript/node.js/010_debugging/profiling.js:91:15
    667   33.1%        LazyCompile: *multisplitFor /home/lukas/Development/GitHub/javascript/node.js/010_debugging/profiling.js:31:24
    630   94.5%          LazyCompile: *testFor /home/lukas/Development/GitHub/javascript/node.js/010_debugging/profiling.js:83:18
    630  100.0%            LazyCompile: ~main /home/lukas/Development/GitHub/javascript/node.js/010_debugging/profiling.js:91:15
     37    5.5%          LazyCompile: ~testFor /home/lukas/Development/GitHub/javascript/node.js/010_debugging/profiling.js:83:18
     37  100.0%            LazyCompile: ~main /home/lukas/Development/GitHub/javascript/node.js/010_debugging/profiling.js:91:15
    639   31.7%        LazyCompile: *<anonymous> /home/lukas/Development/GitHub/javascript/node.js/010_debugging/profiling.js:71:24
    639  100.0%          LazyCompile: *InnerArrayForEach native array.js:942:27
    639  100.0%            LazyCompile: *forEach native array.js:961:22
    715   16.6%      LazyCompile: *multisplitForOf /home/lukas/Development/GitHub/javascript/node.js/010_debugging/profiling.js:49:26
    677   94.7%        LazyCompile: *testFor /home/lukas/Development/GitHub/javascript/node.js/010_debugging/profiling.js:83:18
    677  100.0%          LazyCompile: ~main /home/lukas/Development/GitHub/javascript/node.js/010_debugging/profiling.js:91:15
    677  100.0%            Function: ~<anonymous> /home/lukas/Development/GitHub/javascript/node.js/010_debugging/profiling.js:1:11
     38    5.3%        LazyCompile: ~testFor /home/lukas/Development/GitHub/javascript/node.js/010_debugging/profiling.js:83:18
     38  100.0%          LazyCompile: ~main /home/lukas/Development/GitHub/javascript/node.js/010_debugging/profiling.js:91:15
     38  100.0%            Function: ~<anonymous> /home/lukas/Development/GitHub/javascript/node.js/010_debugging/profiling.js:1:11
    627   14.6%      LazyCompile: *multisplitFor /home/lukas/Development/GitHub/javascript/node.js/010_debugging/profiling.js:31:24
    584   93.1%        LazyCompile: *testFor /home/lukas/Development/GitHub/javascript/node.js/010_debugging/profiling.js:83:18
    584  100.0%          LazyCompile: ~main /home/lukas/Development/GitHub/javascript/node.js/010_debugging/profiling.js:91:15
    584  100.0%            Function: ~<anonymous> /home/lukas/Development/GitHub/javascript/node.js/010_debugging/profiling.js:1:11
     43    6.9%        LazyCompile: ~testFor /home/lukas/Development/GitHub/javascript/node.js/010_debugging/profiling.js:83:18
     43  100.0%          LazyCompile: ~main /home/lukas/Development/GitHub/javascript/node.js/010_debugging/profiling.js:91:15
     43  100.0%            Function: ~<anonymous> /home/lukas/Development/GitHub/javascript/node.js/010_debugging/profiling.js:1:11
    568   13.2%      LazyCompile: *<anonymous> /home/lukas/Development/GitHub/javascript/node.js/010_debugging/profiling.js:73:34
    567   99.8%        LazyCompile: *InnerArrayForEach native array.js:942:27
    567  100.0%          LazyCompile: *forEach native array.js:961:22
    567  100.0%            LazyCompile: *<anonymous> /home/lukas/Development/GitHub/javascript/node.js/010_debugging/profiling.js:71:24
    263    6.1%      LazyCompile: IN native runtime.js:277:12
    263  100.0%        LazyCompile: *InnerArrayForEach native array.js:942:27
    263  100.0%          LazyCompile: *forEach native array.js:961:22
    263  100.0%            LazyCompile: *<anonymous> /home/lukas/Development/GitHub/javascript/node.js/010_debugging/profiling.js:71:24

    353    4.5%  LazyCompile: *next native array-iterator.js:44:27
    348   98.6%    LazyCompile: *multisplitForOf /home/lukas/Development/GitHub/javascript/node.js/010_debugging/profiling.js:49:26
    329   94.5%      LazyCompile: *testFor /home/lukas/Development/GitHub/javascript/node.js/010_debugging/profiling.js:83:18
    329  100.0%        LazyCompile: ~main /home/lukas/Development/GitHub/javascript/node.js/010_debugging/profiling.js:91:15
    329  100.0%          Function: ~<anonymous> /home/lukas/Development/GitHub/javascript/node.js/010_debugging/profiling.js:1:11
    329  100.0%            LazyCompile: ~Module._compile module.js:379:37
     19    5.5%      LazyCompile: ~testFor /home/lukas/Development/GitHub/javascript/node.js/010_debugging/profiling.js:83:18
     19  100.0%        LazyCompile: ~main /home/lukas/Development/GitHub/javascript/node.js/010_debugging/profiling.js:91:15
     19  100.0%          Function: ~<anonymous> /home/lukas/Development/GitHub/javascript/node.js/010_debugging/profiling.js:1:11
     19  100.0%            LazyCompile: ~Module._compile module.js:379:37

    305    3.9%  Builtin: ArgumentsAdaptorTrampoline
    111   36.4%    LazyCompile: *<anonymous> /home/lukas/Development/GitHub/javascript/node.js/010_debugging/profiling.js:71:24
    111  100.0%      LazyCompile: *InnerArrayForEach native array.js:942:27
    111  100.0%        LazyCompile: *forEach native array.js:961:22
    111  100.0%          LazyCompile: *<anonymous> /home/lukas/Development/GitHub/javascript/node.js/010_debugging/profiling.js:70:24
    111  100.0%            LazyCompile: *InnerArrayForEach native array.js:942:27
     93   30.5%    LazyCompile: *InnerArrayForEach native array.js:942:27
     93  100.0%      LazyCompile: *forEach native array.js:961:22
     55   59.1%        LazyCompile: *<anonymous> /home/lukas/Development/GitHub/javascript/node.js/010_debugging/profiling.js:71:24
     55  100.0%          LazyCompile: *InnerArrayForEach native array.js:942:27
     55  100.0%            LazyCompile: *forEach native array.js:961:22
     30   32.3%        LazyCompile: *<anonymous> /home/lukas/Development/GitHub/javascript/node.js/010_debugging/profiling.js:70:24
     30  100.0%          LazyCompile: *InnerArrayForEach native array.js:942:27
     30  100.0%            LazyCompile: *forEach native array.js:961:22
      8    8.6%        LazyCompile: *multisplitForEach /home/lukas/Development/GitHub/javascript/node.js/010_debugging/profiling.js:65:28
      8  100.0%          LazyCompile: *testFor /home/lukas/Development/GitHub/javascript/node.js/010_debugging/profiling.js:83:18
      8  100.0%            LazyCompile: ~main /home/lukas/Development/GitHub/javascript/node.js/010_debugging/profiling.js:91:15
     47   15.4%    LazyCompile: *multisplitForOf /home/lukas/Development/GitHub/javascript/node.js/010_debugging/profiling.js:49:26
     43   91.5%      LazyCompile: *testFor /home/lukas/Development/GitHub/javascript/node.js/010_debugging/profiling.js:83:18
     43  100.0%        LazyCompile: ~main /home/lukas/Development/GitHub/javascript/node.js/010_debugging/profiling.js:91:15
     43  100.0%          Function: ~<anonymous> /home/lukas/Development/GitHub/javascript/node.js/010_debugging/profiling.js:1:11
     43  100.0%            LazyCompile: ~Module._compile module.js:379:37
      4    8.5%      LazyCompile: ~testFor /home/lukas/Development/GitHub/javascript/node.js/010_debugging/profiling.js:83:18
      4  100.0%        LazyCompile: ~main /home/lukas/Development/GitHub/javascript/node.js/010_debugging/profiling.js:91:15
      4  100.0%          Function: ~<anonymous> /home/lukas/Development/GitHub/javascript/node.js/010_debugging/profiling.js:1:11
      4  100.0%            LazyCompile: ~Module._compile module.js:379:37
     38   12.5%    LazyCompile: *multisplitFor /home/lukas/Development/GitHub/javascript/node.js/010_debugging/profiling.js:31:24
     36   94.7%      LazyCompile: *testFor /home/lukas/Development/GitHub/javascript/node.js/010_debugging/profiling.js:83:18
     36  100.0%        LazyCompile: ~main /home/lukas/Development/GitHub/javascript/node.js/010_debugging/profiling.js:91:15
     36  100.0%          Function: ~<anonymous> /home/lukas/Development/GitHub/javascript/node.js/010_debugging/profiling.js:1:11
     36  100.0%            LazyCompile: ~Module._compile module.js:379:37
      2    5.3%      LazyCompile: ~testFor /home/lukas/Development/GitHub/javascript/node.js/010_debugging/profiling.js:83:18
      2  100.0%        LazyCompile: ~main /home/lukas/Development/GitHub/javascript/node.js/010_debugging/profiling.js:91:15
      2  100.0%          Function: ~<anonymous> /home/lukas/Development/GitHub/javascript/node.js/010_debugging/profiling.js:1:11
      2  100.0%            LazyCompile: ~Module._compile module.js:379:37

    262    3.4%  LazyCompile: *InnerArrayForEach native array.js:942:27
    262  100.0%    LazyCompile: *forEach native array.js:961:22
    182   69.5%      LazyCompile: *<anonymous> /home/lukas/Development/GitHub/javascript/node.js/010_debugging/profiling.js:71:24
    182  100.0%        LazyCompile: *InnerArrayForEach native array.js:942:27
    182  100.0%          LazyCompile: *forEach native array.js:961:22
    182  100.0%            LazyCompile: *<anonymous> /home/lukas/Development/GitHub/javascript/node.js/010_debugging/profiling.js:70:24
     65   24.8%      LazyCompile: *<anonymous> /home/lukas/Development/GitHub/javascript/node.js/010_debugging/profiling.js:70:24
     65  100.0%        LazyCompile: *InnerArrayForEach native array.js:942:27
     65  100.0%          LazyCompile: *forEach native array.js:961:22
     65  100.0%            LazyCompile: *multisplitForEach /home/lukas/Development/GitHub/javascript/node.js/010_debugging/profiling.js:65:28
     15    5.7%      LazyCompile: *multisplitForEach /home/lukas/Development/GitHub/javascript/node.js/010_debugging/profiling.js:65:28
     15  100.0%        LazyCompile: *testFor /home/lukas/Development/GitHub/javascript/node.js/010_debugging/profiling.js:83:18
     15  100.0%          LazyCompile: ~main /home/lukas/Development/GitHub/javascript/node.js/010_debugging/profiling.js:91:15
     15  100.0%            Function: ~<anonymous> /home/lukas/Development/GitHub/javascript/node.js/010_debugging/profiling.js:1:11

    250    3.2%  Stub: CEntryStub
    103   41.2%    /usr/bin/node
     40   38.8%      LazyCompile: *multisplitForOf /home/lukas/Development/GitHub/javascript/node.js/010_debugging/profiling.js:49:26
     39   97.5%        LazyCompile: *testFor /home/lukas/Development/GitHub/javascript/node.js/010_debugging/profiling.js:83:18
     39  100.0%          LazyCompile: ~main /home/lukas/Development/GitHub/javascript/node.js/010_debugging/profiling.js:91:15
     39  100.0%            Function: ~<anonymous> /home/lukas/Development/GitHub/javascript/node.js/010_debugging/profiling.js:1:11
      1    2.5%        LazyCompile: ~testFor /home/lukas/Development/GitHub/javascript/node.js/010_debugging/profiling.js:83:18
      1  100.0%          LazyCompile: ~main /home/lukas/Development/GitHub/javascript/node.js/010_debugging/profiling.js:91:15
      1  100.0%            Function: ~<anonymous> /home/lukas/Development/GitHub/javascript/node.js/010_debugging/profiling.js:1:11
     18   17.5%      LazyCompile: IN native runtime.js:277:12
     18  100.0%        LazyCompile: *InnerArrayForEach native array.js:942:27
     18  100.0%          LazyCompile: *forEach native array.js:961:22
     18  100.0%            LazyCompile: *<anonymous> /home/lukas/Development/GitHub/javascript/node.js/010_debugging/profiling.js:71:24
     17   16.5%      LazyCompile: *split native string.js:424:23
      7   41.2%        LazyCompile: *multisplitForOf /home/lukas/Development/GitHub/javascript/node.js/010_debugging/profiling.js:49:26
      7  100.0%          LazyCompile: *testFor /home/lukas/Development/GitHub/javascript/node.js/010_debugging/profiling.js:83:18
      7  100.0%            LazyCompile: ~main /home/lukas/Development/GitHub/javascript/node.js/010_debugging/profiling.js:91:15
      6   35.3%        LazyCompile: *<anonymous> /home/lukas/Development/GitHub/javascript/node.js/010_debugging/profiling.js:71:24
      6  100.0%          LazyCompile: *InnerArrayForEach native array.js:942:27
      6  100.0%            LazyCompile: *forEach native array.js:961:22
      4   23.5%        LazyCompile: *multisplitFor /home/lukas/Development/GitHub/javascript/node.js/010_debugging/profiling.js:31:24
      3   75.0%          LazyCompile: *testFor /home/lukas/Development/GitHub/javascript/node.js/010_debugging/profiling.js:83:18
      3  100.0%            LazyCompile: ~main /home/lukas/Development/GitHub/javascript/node.js/010_debugging/profiling.js:91:15
      1   25.0%          LazyCompile: ~testFor /home/lukas/Development/GitHub/javascript/node.js/010_debugging/profiling.js:83:18
      1  100.0%            LazyCompile: ~main /home/lukas/Development/GitHub/javascript/node.js/010_debugging/profiling.js:91:15
     15   14.6%      LazyCompile: *<anonymous> /home/lukas/Development/GitHub/javascript/node.js/010_debugging/profiling.js:73:34
     15  100.0%        LazyCompile: *InnerArrayForEach native array.js:942:27
     15  100.0%          LazyCompile: *forEach native array.js:961:22
     15  100.0%            LazyCompile: *<anonymous> /home/lukas/Development/GitHub/javascript/node.js/010_debugging/profiling.js:71:24
     13   12.6%      LazyCompile: *multisplitFor /home/lukas/Development/GitHub/javascript/node.js/010_debugging/profiling.js:31:24
     12   92.3%        LazyCompile: *testFor /home/lukas/Development/GitHub/javascript/node.js/010_debugging/profiling.js:83:18
     12  100.0%          LazyCompile: ~main /home/lukas/Development/GitHub/javascript/node.js/010_debugging/profiling.js:91:15
     12  100.0%            Function: ~<anonymous> /home/lukas/Development/GitHub/javascript/node.js/010_debugging/profiling.js:1:11
      1    7.7%        LazyCompile: ~testFor /home/lukas/Development/GitHub/javascript/node.js/010_debugging/profiling.js:83:18
      1  100.0%          LazyCompile: ~main /home/lukas/Development/GitHub/javascript/node.js/010_debugging/profiling.js:91:15
      1  100.0%            Function: ~<anonymous> /home/lukas/Development/GitHub/javascript/node.js/010_debugging/profiling.js:1:11
     58   23.2%    LazyCompile: *multisplitForOf /home/lukas/Development/GitHub/javascript/node.js/010_debugging/profiling.js:49:26
     55   94.8%      LazyCompile: *testFor /home/lukas/Development/GitHub/javascript/node.js/010_debugging/profiling.js:83:18
     55  100.0%        LazyCompile: ~main /home/lukas/Development/GitHub/javascript/node.js/010_debugging/profiling.js:91:15
     55  100.0%          Function: ~<anonymous> /home/lukas/Development/GitHub/javascript/node.js/010_debugging/profiling.js:1:11
     55  100.0%            LazyCompile: ~Module._compile module.js:379:37
      3    5.2%      LazyCompile: ~testFor /home/lukas/Development/GitHub/javascript/node.js/010_debugging/profiling.js:83:18
      3  100.0%        LazyCompile: ~main /home/lukas/Development/GitHub/javascript/node.js/010_debugging/profiling.js:91:15
      3  100.0%          Function: ~<anonymous> /home/lukas/Development/GitHub/javascript/node.js/010_debugging/profiling.js:1:11
      3  100.0%            LazyCompile: ~Module._compile module.js:379:37
     29   11.6%    LazyCompile: *split native string.js:424:23
     12   41.4%      LazyCompile: *<anonymous> /home/lukas/Development/GitHub/javascript/node.js/010_debugging/profiling.js:71:24
     12  100.0%        LazyCompile: *InnerArrayForEach native array.js:942:27
     12  100.0%          LazyCompile: *forEach native array.js:961:22
     12  100.0%            LazyCompile: *<anonymous> /home/lukas/Development/GitHub/javascript/node.js/010_debugging/profiling.js:70:24
     10   34.5%      LazyCompile: *multisplitForOf /home/lukas/Development/GitHub/javascript/node.js/010_debugging/profiling.js:49:26
      8   80.0%        LazyCompile: *testFor /home/lukas/Development/GitHub/javascript/node.js/010_debugging/profiling.js:83:18
      8  100.0%          LazyCompile: ~main /home/lukas/Development/GitHub/javascript/node.js/010_debugging/profiling.js:91:15
      8  100.0%            Function: ~<anonymous> /home/lukas/Development/GitHub/javascript/node.js/010_debugging/profiling.js:1:11
      2   20.0%        LazyCompile: ~testFor /home/lukas/Development/GitHub/javascript/node.js/010_debugging/profiling.js:83:18
      2  100.0%          LazyCompile: ~main /home/lukas/Development/GitHub/javascript/node.js/010_debugging/profiling.js:91:15
      2  100.0%            Function: ~<anonymous> /home/lukas/Development/GitHub/javascript/node.js/010_debugging/profiling.js:1:11
      7   24.1%      LazyCompile: *multisplitFor /home/lukas/Development/GitHub/javascript/node.js/010_debugging/profiling.js:31:24
      6   85.7%        LazyCompile: *testFor /home/lukas/Development/GitHub/javascript/node.js/010_debugging/profiling.js:83:18
      6  100.0%          LazyCompile: ~main /home/lukas/Development/GitHub/javascript/node.js/010_debugging/profiling.js:91:15
      6  100.0%            Function: ~<anonymous> /home/lukas/Development/GitHub/javascript/node.js/010_debugging/profiling.js:1:11
      1   14.3%        LazyCompile: ~testFor /home/lukas/Development/GitHub/javascript/node.js/010_debugging/profiling.js:83:18
      1  100.0%          LazyCompile: ~main /home/lukas/Development/GitHub/javascript/node.js/010_debugging/profiling.js:91:15
      1  100.0%            Function: ~<anonymous> /home/lukas/Development/GitHub/javascript/node.js/010_debugging/profiling.js:1:11
     21    8.4%    LazyCompile: IN native runtime.js:277:12
     21  100.0%      LazyCompile: *InnerArrayForEach native array.js:942:27
     21  100.0%        LazyCompile: *forEach native array.js:961:22
     21  100.0%          LazyCompile: *<anonymous> /home/lukas/Development/GitHub/javascript/node.js/010_debugging/profiling.js:71:24
     21  100.0%            LazyCompile: *InnerArrayForEach native array.js:942:27
     19    7.6%    LazyCompile: *<anonymous> /home/lukas/Development/GitHub/javascript/node.js/010_debugging/profiling.js:73:34
     19  100.0%      LazyCompile: *InnerArrayForEach native array.js:942:27
     19  100.0%        LazyCompile: *forEach native array.js:961:22
     19  100.0%          LazyCompile: *<anonymous> /home/lukas/Development/GitHub/javascript/node.js/010_debugging/profiling.js:71:24
     19  100.0%            LazyCompile: *InnerArrayForEach native array.js:942:27
     14    5.6%    LazyCompile: *multisplitFor /home/lukas/Development/GitHub/javascript/node.js/010_debugging/profiling.js:31:24
     13   92.9%      LazyCompile: *testFor /home/lukas/Development/GitHub/javascript/node.js/010_debugging/profiling.js:83:18
     13  100.0%        LazyCompile: ~main /home/lukas/Development/GitHub/javascript/node.js/010_debugging/profiling.js:91:15
     13  100.0%          Function: ~<anonymous> /home/lukas/Development/GitHub/javascript/node.js/010_debugging/profiling.js:1:11
     13  100.0%            LazyCompile: ~Module._compile module.js:379:37
      1    7.1%      LazyCompile: ~testFor /home/lukas/Development/GitHub/javascript/node.js/010_debugging/profiling.js:83:18
      1  100.0%        LazyCompile: ~main /home/lukas/Development/GitHub/javascript/node.js/010_debugging/profiling.js:91:15
      1  100.0%          Function: ~<anonymous> /home/lukas/Development/GitHub/javascript/node.js/010_debugging/profiling.js:1:11
      1  100.0%            LazyCompile: ~Module._compile module.js:379:37

    247    3.2%  Stub: KeyedLoadICStub
    225   91.1%    LazyCompile: *next native array-iterator.js:44:27
    225  100.0%      LazyCompile: *multisplitForOf /home/lukas/Development/GitHub/javascript/node.js/010_debugging/profiling.js:49:26
    207   92.0%        LazyCompile: *testFor /home/lukas/Development/GitHub/javascript/node.js/010_debugging/profiling.js:83:18
    207  100.0%          LazyCompile: ~main /home/lukas/Development/GitHub/javascript/node.js/010_debugging/profiling.js:91:15
    207  100.0%            Function: ~<anonymous> /home/lukas/Development/GitHub/javascript/node.js/010_debugging/profiling.js:1:11
     18    8.0%        LazyCompile: ~testFor /home/lukas/Development/GitHub/javascript/node.js/010_debugging/profiling.js:83:18
     18  100.0%          LazyCompile: ~main /home/lukas/Development/GitHub/javascript/node.js/010_debugging/profiling.js:91:15
     18  100.0%            Function: ~<anonymous> /home/lukas/Development/GitHub/javascript/node.js/010_debugging/profiling.js:1:11
     22    8.9%    LazyCompile: *multisplitForOf /home/lukas/Development/GitHub/javascript/node.js/010_debugging/profiling.js:49:26
     20   90.9%      LazyCompile: *testFor /home/lukas/Development/GitHub/javascript/node.js/010_debugging/profiling.js:83:18
     20  100.0%        LazyCompile: ~main /home/lukas/Development/GitHub/javascript/node.js/010_debugging/profiling.js:91:15
     20  100.0%          Function: ~<anonymous> /home/lukas/Development/GitHub/javascript/node.js/010_debugging/profiling.js:1:11
     20  100.0%            LazyCompile: ~Module._compile module.js:379:37
      2    9.1%      LazyCompile: ~testFor /home/lukas/Development/GitHub/javascript/node.js/010_debugging/profiling.js:83:18
      2  100.0%        LazyCompile: ~main /home/lukas/Development/GitHub/javascript/node.js/010_debugging/profiling.js:91:15
      2  100.0%          Function: ~<anonymous> /home/lukas/Development/GitHub/javascript/node.js/010_debugging/profiling.js:1:11
      2  100.0%            LazyCompile: ~Module._compile module.js:379:37

    184    2.4%  LazyCompile: *multisplitForOf /home/lukas/Development/GitHub/javascript/node.js/010_debugging/profiling.js:49:26
    176   95.7%    LazyCompile: *testFor /home/lukas/Development/GitHub/javascript/node.js/010_debugging/profiling.js:83:18
    176  100.0%      LazyCompile: ~main /home/lukas/Development/GitHub/javascript/node.js/010_debugging/profiling.js:91:15
    176  100.0%        Function: ~<anonymous> /home/lukas/Development/GitHub/javascript/node.js/010_debugging/profiling.js:1:11
    176  100.0%          LazyCompile: ~Module._compile module.js:379:37
    176  100.0%            LazyCompile: ~Module._extensions..js module.js:430:37
      8    4.3%    LazyCompile: ~testFor /home/lukas/Development/GitHub/javascript/node.js/010_debugging/profiling.js:83:18
      8  100.0%      LazyCompile: ~main /home/lukas/Development/GitHub/javascript/node.js/010_debugging/profiling.js:91:15
      8  100.0%        Function: ~<anonymous> /home/lukas/Development/GitHub/javascript/node.js/010_debugging/profiling.js:1:11
      8  100.0%          LazyCompile: ~Module._compile module.js:379:37
      8  100.0%            LazyCompile: ~Module._extensions..js module.js:430:37

    161    2.1%  Stub: LoadICStub
    161  100.0%    LazyCompile: *multisplitForOf /home/lukas/Development/GitHub/javascript/node.js/010_debugging/profiling.js:49:26
    153   95.0%      LazyCompile: *testFor /home/lukas/Development/GitHub/javascript/node.js/010_debugging/profiling.js:83:18
    153  100.0%        LazyCompile: ~main /home/lukas/Development/GitHub/javascript/node.js/010_debugging/profiling.js:91:15
    153  100.0%          Function: ~<anonymous> /home/lukas/Development/GitHub/javascript/node.js/010_debugging/profiling.js:1:11
    153  100.0%            LazyCompile: ~Module._compile module.js:379:37
      8    5.0%      LazyCompile: ~testFor /home/lukas/Development/GitHub/javascript/node.js/010_debugging/profiling.js:83:18
      8  100.0%        LazyCompile: ~main /home/lukas/Development/GitHub/javascript/node.js/010_debugging/profiling.js:91:15
      8  100.0%          Function: ~<anonymous> /home/lukas/Development/GitHub/javascript/node.js/010_debugging/profiling.js:1:11
      8  100.0%            LazyCompile: ~Module._compile module.js:379:37

