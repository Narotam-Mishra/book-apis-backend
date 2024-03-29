
## [book-apis-backend](https://book-apis-backend-naru.onrender.com/)

### Setup
```npm install && npm run dev```

### Database Connection
1. Import connectDB.js from db
2. Invoke in start()
3. setup .env in the root
4. Add mongoURL with correct value

### Routers
- [bookStoreRoutes.js]

### Book Model
- [bookModel.js]

### CRUD APIs (Controllers)
- [create Book](https://book-apis-backend-naru.onrender.com/api/v1/book)
- [Get All Books](https://book-apis-backend-naru.onrender.com/api/v1/book)
- [Get Single Book](https://book-apis-backend-naru.onrender.com/api/v1/book/6606896e4b14922c2e1e443a)
- [update Book](https://book-apis-backend-naru.onrender.com/api/v1/book/6606896e4b14922c2e1e443a)
- [Delete Book](https://book-apis-backend-naru.onrender.com/api/v1/book/6606896e4b14922c2e1e443a)

### Tested all Book APIs using Postman
- [Postman Collection Link](https://schema.postman.com/json/collection/v2.1.0/collection.json)

### Additionally added API documention using Docgen library
- [Docgen Library](https://github.com/thedevsaddam/docgen)
- Export Postman Collection
- Make sure the postman's collection and windows_amd64.exe should reside in same folder 
- Run below command using command prompt
- windows_amd64 build -i book-store-APIs.postman_collection.json -o index.html
- A index.html file will be generated then place place that file under public folder
- Use this code to host static html file ```server.use(express.static('./public'));```