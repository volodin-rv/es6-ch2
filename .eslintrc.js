module.exports = {
    "env": {
        // "browser": true,
        "es6": true,
        "node": true
    },
    "extends": "eslint:recommended",
    "parserOptions": {
        "sourceType": "module"
    },
    "rules": {
        "indent": [0, "tab"],
        "linebreak-style": [0, "windows"],
        "quotes": [2, "single"],
        "semi": [0, "never"], // Правило обеспечивает согласованный стиль привязки для блоков
        'no-unused-vars': [0], // Правило направлено на устранение неиспользуемых переменных, функций и параметров функций.
        'no-console': [0]  // Разрешим вывод в консоль
    }
};