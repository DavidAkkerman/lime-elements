import{r as e,h as n}from"./index-5f2797d5.js";const o=class{constructor(n){e(this,n),this.code='class Animal {\n    move(distanceInMeters: number = 0) {\n        console.log(`Animal moved ${distanceInMeters}m.`);\n    }\n}\n\nclass Dog extends Animal {\n    bark() {\n        console.log("Woof! Woof!");\n    }\n}\n// Just a comment…\nconst dog = new Dog();\ndog.bark();\ndog.move(10);'}render(){return n("limel-code-editor",{value:this.code,language:"typescript",readonly:!0,"line-numbers":!0,colorScheme:"dark"})}};export{o as limel_example_code_editor_readonly_with_line_numbers}