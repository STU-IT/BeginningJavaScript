# Brug af Node.js og VS Code

## Installer

* Node.js 
    * <https://nodejs.org/en/download/>
* VS Code
    * https://code.visualstudio.com/download>
    * VS Code extensions:
        * `Jasmine Test Explorer`
        * kig selv om der er flere du kan bruge med søgeordet `Jasmine`
* Jasmine
    * kør `npm install -g jasmine` i VSCodes terminal vindue. [`Ctrl-æ`]

## Konfigerér

    Så hvidt jeg ved, er det ikke nødvendigt at gøre noget af det følgende, hvis du bruger bransh'en `node.js`.

* kør:
    * `jasmine init`

* rediger  `spec\support\jasmine.json` så der står 
    ```json
    {
        "spec_dir": "./",
        "spec_files": [
            "0*/**/tests.js"
        ],
        "helpers": [
            "helpers/**/*.js"
        ],
        "stopSpecOnExpectationFailure": false,
        "random": false
    }
    ```
    især er det vigtigt at ændre  `spec_files:` til  `, "../0*/tests.js"`  
    OG at ændre `random:` til `false`.

* Hver af `practice.js` filerne skal være et _module_ i nodes-forstand, derfor skal der tilføje en linie med `module.exports {...}` hvor `{ }` indeholder navnene på de funktioner der skal testes.

* i `tests.js` skal ovensnævnte "modul" indlæses med `require`, og funktionerne skal globaliseres.  
    Jeg overvejer om det kan ske i en helper...

