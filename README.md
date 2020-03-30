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

  None

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
     "Content-Type": "application/json"
 }
 ```

 **Request Body:**
 ```javascript
 {
     "title": "Learn REST API",
     "description": "Learn how to create RESTful API with Express and Sequelize",
     "status": "Unfinished",
     "due_date": "2020-01-29"

 }
 ```

  **Response:**
 ```javascript
 {
     "id": 1,
     "title": "Learn REST API",
     "description": "Learn how to create RESTful API with Express and Sequelize",
     "status": "Unfinished",
     "due_date": "2020-01-29"
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
     "Content-Type": "application/json"
 }
 ```

  **Response:**
 ```javascript
 [
     {
        "id": 1,
        "title": "Learn REST API",
        "description": "Learn how to create RESTful API with Express and Sequelize",
        "status": "Unfinished",
        "due_date": "2020-01-29"
    }
 ]
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
     "Content-Type": "application/json"
 }
 ```

  **Response:**
 ```javascript
{
    "id": 1,
    "title": "Learn REST API",
    "description": "Learn how to create RESTful API with Express and Sequelize",
    "status": "Unfinished",
    "due_date": "2020-01-29"
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

  None

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
     "Content-Type": "application/json"
 }
 ```

 **Request Body:**
 ```javascript
 {
     "title": "Learn REST API",
     "description": "Learn how to create RESTful API with Express and Sequelize",
     "status": "Finished",
     "due_date": "2020-01-29"

 }
 ```

  **Response:**
 ```javascript
{
    "id": 1,
    "title": "Learn REST API",
    "description": "Learn how to create RESTful API with Express and Sequelize",
    "status": "Finished",
    "due_date": "2020-01-29"
}
 ```

 -----------------------------------------------------------------------------------

  **Menghapus data todo (Delete todo)**
----
  Returns json data about a single todo task that recently deleted.

* **URL**

  /todos/:id

* **Method:**

  `DEL`
  
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
     "Content-Type": "application/json"
 }
 ```

  **Response:**
 ```javascript
{
    "id": 1,
    "title": "Learn REST API",
    "description": "Learn how to create RESTful API with Express and Sequelize",
    "status": "Finished",
    "due_date": "2020-01-29"
}
 ```