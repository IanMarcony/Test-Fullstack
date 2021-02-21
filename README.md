# :rocket: Test-Fullstack

This is a web project to show products on showcase divided by Most Popular and Products with Price Reduction.

# :computer: Backend
The Backend is divided in towlayer.

#### 1. Technologies
*  [Typescript Documentation](https://www.typescriptlang.org/docs/)
*  [NodeJS](https://nodejs.org/en/docs/)
*  [Typeorm](https://nodejs.org/en/docs/)

## API-CATALOGO

This layer is to return a product from database

### 1. How to initialize?
Run the code: 
```
  cd backend/api-catalogo/ # To enter in api-catalogo folder
  
  yarn # To install dependencies or use npm install
  
  yarn typeorm migration:run # You must run the migrations to you use this layer
  
  yarn start # To start server
  
```

### 2. Routes

This layer has two endpoints

1. To return compact product ``` /products/:id/compact ```
2. To return complete product ``` /products/:id/complete ```

## API-RECOMENDACAO

This layer is to return the most popular products and products with price reduction

### 1. How to initialize?
Run the code: 
```
  cd backend/api-recomendacao/ # To enter in api-recomendacao folder
  
  yarn # To install dependencies or use npm install
  
  yarn start # To start server or use npm start
  
```

### 2. Routes

This layer has one endpoint. You must set the maxProducts to get products. Default maxProducts is 10.

1. To return recommendation ``` /products?maxProducts=10 ```


# :computer: Frontend
The Frontend is the products showcase.

### 1. Technologies

* [HTML](https://developer.mozilla.org/pt-BR/docs/Web/HTML)
* [CSS](https://developer.mozilla.org/pt-BR/docs/Web/CSS)
* [JavaScript](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)
* [Axios](https://github.com/axios/axios)

### 2. How to initialize?

Before you open the ```./frontend/src/pages/Dashboard/index.html``` file on your browser you must start the two layers Backend and install the dependencies frontend

Run the code in frontend folder:

```
  yarn # To install dependencies or use npm install

```

After that, you can open the ```index.html``` in ```./frontend/src/pages/Dashboard/ ```


