//beforeEach(function() {
    console.log("before...");

    function f() {return "fis"};

    console.log(Object.getOwnPropertyNames(global).filter(function (p) {
        return typeof global[p] === 'function';
    }));


    console.log("...");

    console.log(Object.getOwnPropertyNames(this).filter(function (p) {
        return typeof this[p] === 'function';
    }));

    console.log("...later")
  //});