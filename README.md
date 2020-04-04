# FancyTodo-server

**Membuat todo (Create todo)**
----
  Returns json data about a single todo task that recently added.

* **URL**

  /todos

* **Method:**

  `POST`
  
*  **URL Params**

   **Required:**
 
   None

* **Data Params**

```javascript
 {
     "title": "Learn REST API",
     "description": "Learn how to create RESTful API with Express and Sequelize",
     "due_date": "2020-01-29"
 }
 ```

* **Success Response:**

  * **Code:** 201 Created <br />
    **Content:** `{ "id": 1, "title": "Learn REST API", "description": "Learn how to create RESTful API with Express and Sequelize", "status": "Unfinished",     "due_date": "2020-01-29" }`
 
* **Error Response:**

  * **Code:** 400 BAD REQUEST <br />
    **Content:** `{ error : "Invalid request." }`

  OR

  * **Code:** 500 INTERNAL SERVER ERROR <br />
    **Content:** `{ error : "Internal Server Error." }`

 **Request Header:**
 ```javascript
 {
    "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiZW1haWwiOiJoYXJpc2tpMThAZ21haWwuY29tIiwiaWF0IjoxNTg1NjY3MzgzfQ.t2IFTfKLMEGi_LHVKdR_qaqczqN8tRKBg66z-sVtR5E"
 }
 ```
 -----------------------------------------------------------------------------------

**Mengambil semua data todo (Read todo)**
----
  Returns json data about multiple todo task that already exists in database.

* **URL**

  /todos

* **Method:**

  `GET`
  
*  **URL Params**

   **Required:**
 
   None

* **Data Params**

  None

* **Success Response:**

  * **Code:** 200 OK <br />
    **Content:** `[ { "id": 1, "title": "Learn REST API", "description": "Learn how to create RESTful API with Express and Sequelize", "status": "Unfinished",     "due_date": "2020-01-29" } ]`
 
* **Error Response:**

  * **Code:** 500 INTERNAL SERVER ERROR <br />
    **Content:** `{ error : "Internal Server Error." }`

 **Request Header:**
 ```javascript
 {
    "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiZW1haWwiOiJoYXJpc2tpMThAZ21haWwuY29tIiwiaWF0IjoxNTg1NjY3MzgzfQ.t2IFTfKLMEGi_LHVKdR_qaqczqN8tRKBg66z-sVtR5E"
 }
 ```

 -----------------------------------------------------------------------------------

**Mengambil detail todo berdasarkan ID (Get todo by ID)**
----
  Returns json data about a single todo task that match with a given params.

* **URL**

  /todos/:id

* **Method:**

  `GET`
  
*  **URL Params**

   **Required:**
 
    `id=[integer]`

* **Data Params**

  None

* **Success Response:**

  * **Code:** 200 OK <br />
    **Content:** `{ "id": 1, "title": "Learn REST API", "description": "Learn how to create RESTful API with Express and Sequelize", "status": "Unfinished",     "due_date": "2020-01-29" }`
 
* **Error Response:**

  * **Code:** 404 NOT FOUND <br />
    **Content:** `{ error : "Task doesn't exist." }`

  **Request Header:**
 ```javascript
 {
    "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiZW1haWwiOiJoYXJpc2tpMThAZ21haWwuY29tIiwiaWF0IjoxNTg1NjY3MzgzfQ.t2IFTfKLMEGi_LHVKdR_qaqczqN8tRKBg66z-sVtR5E"
 }
 ```

 -----------------------------------------------------------------------------------

 **Mengubah data todo (Update todo)**
----
  Returns json data about a single todo task that recently updated.

* **URL**

  /todos/:id

* **Method:**

  `PUT`
  
*  **URL Params**

   **Required:**
 
    `id=[integer]`

* **Data Params**

```javascript
 {
     "title": "Learn REST API",
     "description": "Learn how to create RESTful API with Express and Sequelize",
     "status": "Finished",
     "due_date": "2020-01-29"
 }
 ```

* **Success Response:**

  * **Code:** 200 OK <br />
    **Content:** `{ "id": 1, "title": "Learn REST API", "description": "Learn how to create RESTful API with Express and Sequelize", "status": "Finished",     "due_date": "2020-01-29" }`
 
* **Error Response:**

  * **Code:** 404 NOT FOUND <br />
    **Content:** `{ error : "Error Not Found." }`

     OR

  * **Code:** 400 BAD REQUEST <br />
    **Content:** `{ error : "Invalid request." }`

    OR

  * **Code:** 500 INTERNAL SERVER ERROR <br />
    **Content:** `{ error : "Internal Server Error." }`

 **Request Header:**
 ```javascript
 {
    "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiZW1haWwiOiJoYXJpc2tpMThAZ21haWwuY29tIiwiaWF0IjoxNTg1NjY3MzgzfQ.t2IFTfKLMEGi_LHVKdR_qaqczqN8tRKBg66z-sVtR5E"
 }
 ```


 -----------------------------------------------------------------------------------

  **Menghapus data todo (Delete todo)**
----
  Returns json data about a single todo task that recently deleted.

* **URL**

  /todos/:id

* **Method:**

  `DELETE`
  
*  **URL Params**

   **Required:**
 
    `id=[integer]`

* **Data Params**

  None

* **Success Response:**

  * **Code:** 200 OK <br />
    **Content:** `{ "id": 1, "title": "Learn REST API", "description": "Learn how to create RESTful API with Express and Sequelize", "status": "Finished",     "due_date": "2020-01-29" }`
 
* **Error Response:**

  * **Code:** 404 NOT FOUND <br />
    **Content:** `{ error : "Error Not Found." }`

    OR

  * **Code:** 500 INTERNAL SERVER ERROR <br />
    **Content:** `{ error : "Internal Server Error." }`

 **Request Header:**
 ```javascript
 {
    "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiZW1haWwiOiJoYXJpc2tpMThAZ21haWwuY29tIiwiaWF0IjoxNTg1NjY3MzgzfQ.t2IFTfKLMEGi_LHVKdR_qaqczqN8tRKBg66z-sVtR5E"
 }
 ```
 -----------------------------------------------------------------------------------

 **Membuat user (Create user)**
----
  Returns json data about a single user that recently added.

* **URL**

  /users/signup

* **Method:**

  `POST`
  
*  **URL Params**

   **Required:**
 
   None

* **Data Params**

```javascript
 {
     "email": "sample@mail.com",
     "password": "EF797C8118F02DFB649607DD5D3F8C7623048C9C063D532CC95C5ED7A898A64F"
 }
 ```

* **Success Response:**

  * **Code:** 201 Created <br />
    **Content:** `{ "id": 1, "email": "sample@email.com", "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiZW1haWwiOiJoYXJpc2tpMThAZ21haWwuY29tIiwiaWF0IjoxNTg1NjY3MzgzfQ.t2IFTfKLMEGi_LHVKdR_qaqczqN8tRKBg66z-sVtR5E" }`
 
* **Error Response:**

  * **Code:** 500 INTERNAL SERVER ERROR <br />
    **Content:** `{ error : "Internal Server Error." }`

 -----------------------------------------------------------------------------------

  **Signin user**
----
  Returns json data about a single user that recently signed in.

* **URL**

  /users/signup

* **Method:**

  `POST`
  
*  **URL Params**

   **Required:**
 
   None

* **Data Params**

```javascript
 {
     "email": "sample@mail.com",
     "password": "EF797C8118F02DFB649607DD5D3F8C7623048C9C063D532CC95C5ED7A898A64F"
 }
 ```

* **Success Response:**

  * **Code:** 200 Ok <br />
    **Content:** `{ "id": 1, "email": "sample@email.com", "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiZW1haWwiOiJoYXJpc2tpMThAZ21haWwuY29tIiwiaWF0IjoxNTg1NjY3MzgzfQ.t2IFTfKLMEGi_LHVKdR_qaqczqN8tRKBg66z-sVtR5E" }`
 
* **Error Response:**

  * **Code:** 400 BAD REQUEST <br />
    **Content:** `{ error : "Invalid request." }`

  OR

  * **Code:** 500 INTERNAL SERVER ERROR <br />
    **Content:** `{ error : "Internal Server Error." }`

 -----------------------------------------------------------------------------------

  **Signin user (google)**
----
  Returns json data about a single user that recently signed in or signed up.

* **URL**

  /users/signup

* **Method:**

  `POST`
  
*  **URL Params**

   **Required:**
 
   None

* **Data Params**

```javascript
 {
     "email": "sample@mail.com",
     "password": "EF797C8118F02DFB649607DD5D3F8C7623048C9C063D532CC95C5ED7A898A64F"
 }
 ```

* **Success Response:**

  * **Code:** 201 Created <br />
    **Content:** `{ "id": 1, "email": "sample@email.com", "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiZW1haWwiOiJoYXJpc2tpMThAZ21haWwuY29tIiwiaWF0IjoxNTg1NjY3MzgzfQ.t2IFTfKLMEGi_LHVKdR_qaqczqN8tRKBg66z-sVtR5E" }`

    OR

  * **Code:** 200 Ok <br />
    **Content:** `{ "id": 1, "email": "sample@email.com", "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiZW1haWwiOiJoYXJpc2tpMThAZ21haWwuY29tIiwiaWF0IjoxNTg1NjY3MzgzfQ.t2IFTfKLMEGi_LHVKdR_qaqczqN8tRKBg66z-sVtR5E" }`
 
* **Error Response:**

  * **Code:** 400 BAD REQUEST <br />
    **Content:** `{ error : "Invalid request." }`

  OR

  * **Code:** 500 INTERNAL SERVER ERROR <br />
    **Content:** `{ error : "Internal Server Error." }`

 -----------------------------------------------------------------------------------

**Mengambil data prayer time (Get prayer time data)**
----
  Returns json data about today prayer time, data fetched according to user's ip geolocation.

* **URL**

  /features/time

* **Method:**

  `GET`
  
*  **URL Params**

   **Required:**
 
  None

* **Data Params**

  None

* **Success Response:**

  * **Code:** 200 OK <br />
    **Content:** `{ date_for: '2020-4-4', fajr: '4:37 am', dhuhr: '11:55 am', asr: '3:12 pm',maghrib: '6:01 pm', isha: '7:05 pm' }`
 
* **Error Response:**

  * **Code:** 500 INTERNAL SERVER ERROR <br />
    **Content:** `{ error : "Internal Server Error." }`

  **Request Header:**
 ```javascript
 {
    "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiZW1haWwiOiJoYXJpc2tpMThAZ21haWwuY29tIiwiaWF0IjoxNTg1NjY3MzgzfQ.t2IFTfKLMEGi_LHVKdR_qaqczqN8tRKBg66z-sVtR5E"
 }
 ```

 -----------------------------------------------------------------------------------

 **Mengambil data holiday (Get holiday data)**
----
  Returns json data about holiday time, data fetched according to user's input year.

* **URL**

  /features/check-holiday/:year

* **Method:**

  `GET`
  
*  **URL Params**

   **Required:**
 
  `year=[integer]`

* **Data Params**

  None

* **Success Response:**

  * **Code:** 200 OK <br />
    **Content:** `{ "holidays": [{ "date": "2020-01-01", "localName": "Tahun Baru Masehi",  "name": "New Year's Day", "countryCode": "ID", "fixed": true, "global": true, "counties": null, "launchYear": null, "type": "Public" }]}`
 
* **Error Response:**

  * **Code:** 500 INTERNAL SERVER ERROR <br />
    **Content:** `{ error : "Internal Server Error." }`

  **Request Header:**
 ```javascript
 {
    "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiZW1haWwiOiJoYXJpc2tpMThAZ21haWwuY29tIiwiaWF0IjoxNTg1NjY3MzgzfQ.t2IFTfKLMEGi_LHVKdR_qaqczqN8tRKBg66z-sVtR5E"
 }
 ```

 -----------------------------------------------------------------------------------