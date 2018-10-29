# Brug af Node.js og VS Code

## Installer

* Node.js
* VS Code
    * VS Code extensions:
        * `Jasmine Test Explorer`
        * kig selv om der er flere du kan bruge med søgeordet `Jasmine`
* Jasmine `npm install -g jasmine`

## Konfigerér

* kør:
    * `jasmine init`

* rediger  `spec\support\jasmine.json` så der står 
    ```json
    {
    "spec_dir": "spec",
    "spec_files": [
        "**/*[sS]pec.js",
        "../0[2]*/tests.js"
    ],
    "helpers": [
        "helpers/**/*.js"
    ],
    "stopSpecOnExpectationFailure": false,
    "random": false
    }
    ```
    især er det vigtigt at tilføje `, "../0[2]*/tests.js"` under `spec_files:`  
OG at ændre `random:` til `false`.

        !! stien herover skal rettes !!

* Hver af `practice.js` filerne skal være et _module_ i nodes-forstand, derfor skal der tilføje en linie med `module.exports {...}` hvor `{ }` indeholder navnene på de funktioner der skal testes.

* i `tests.js` skal ovensnævnte "modul" indlæses med `require`, og funktionerne skal globaliseres.  
    Jeg overvejer om det kan ske i en helper...

