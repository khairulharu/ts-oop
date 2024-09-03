# cara Setup

npm init

# Lalu tambahkan di file package.json

type:module

# lalu instalIl jest

npm install --save-dev types @types/jest

# lalu install babel

npm install --save-dev babel-jest @babel/preset-env

# setup babel, ubah script pada bagian package.json


"scripts": {
"test": "jest"
},
"jest": {
"transform": {
"^.+\\.[t|j]sx?$": "babel-jest"
}
}

# lalu buat file babel.config.json dan tambahkan kode di bawah

{
"presets": ["@babel/preset-env"]
}

# lalu kita install typescript

npm install --save-dev typescript

lalu setting tsconfig.json di bagian module menjadi
"module": "ES6",
