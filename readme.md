# cara Setup

```json
npm init
```

# Lalu tambahkan di file package.json

```json
"type":"module"
```

# lalu instalIl jest

```json
npm install --save-dev jest @types/jest
```

# lalu install babel

```json
npm install --save-dev babel-jest @babel/preset-env
```

# setup babel, ubah script pada bagian package.json

```json

"scripts": {
"test": "jest"
},
"jest": {
"transform": {
"^.+\\.[t|j]sx?$": "babel-jest"
}
}

```

# lalu buat file babel.config.json dan tambahkan kode di bawah

```json
{
"presets": ["@babel/preset-env"]
}

```
# lalu kita install typescript

```json

npm install --save-dev typescript

```

# tambahkan perintah untuk setting typescriptnya, dan membuat file konfigurasi

```json

npx tsc --init

```

# lalu setting tsconfig.json di bagian module menjadi
```json

"module": "ES6",

```

# setup jest Agar sopprt  typescript
```json

npm install --save-dev @babel/preset-typescript

```

# tambahkan ini ke dalam babel.config.json

```json

'@babel/preset-typescript',

```

# agar menjadi seperti ini

```json

{
     "presets": [
          "@babel/preset-env",
          "@babel/preset-typescript"
     ]
     
}

```
# lalu kita install ts-jest

```json
npm install --save-dev ts-jest
```

# terackhir install type defenition
# agar bisa menggunakan type di typescript
```ts
export type Person = {
     name: string;
}
```

``
npm install --save-dev @jest/globals
``

# jika berhasil file package.json, akan menjadi seperti ini

```json

"author": "haru",
  "license": "ISC",
  "type": "module",
  "devDependencies": {
    "@babel/preset-env": "^7.25.4",
    "@babel/preset-typescript": "^7.24.7",
    "@jest/globals": "^29.7.0",
    "@types/jest": "^29.5.12",
    "babel-jest": "^29.7.0",
    "jest": "^29.7.0",
    "ts-jest": "^29.2.5",
    "typescript": "^5.5.4"
  }

```