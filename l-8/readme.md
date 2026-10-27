in this video we are going to learn about postman and express

# API and Postman

## What is an API?
An API allows two applications to communicate by sending requests and receiving responses.

## What is Postman?
Postman is a tool used to test APIs without creating a frontend.

## HTTP Methods

- **GET:** Fetch data.
- **POST:** Send or create data.
- **PUT:** Replace or update data.
- **DELETE:** Delete data.

## Testing APIs with Postman

### 1. GET — Fetch a Random Dog Image

**URL:** `https://dog.ceo/api/breeds/image/random`

- Select `GET` in Postman.
- Paste the URL and click **Send**.
- The response contains a random dog image URL.

### 2. POST — Send Data

**URL:** `https://jsonplaceholder.typicode.com/posts`

- Select `POST`.
- Open **Body → raw → JSON**.
- Enter:

```json
{
  "title": "Hello",
  "body": "Learning APIs",
  "userId": 1
}
```

- Click **Send**.

### 3. PUT — Update Data

**URL:** `https://jsonplaceholder.typicode.com/posts/1`

- Select `PUT`.
- Choose **Body → raw → JSON**.
- Send:

```json
{
  "id": 1,
  "title": "Updated Post",
  "body": "Learning PUT",
  "userId": 1
}
```

- Click **Send**.

**Note:** JSONPlaceholder is a testing API; POST and PUT changes are not permanently saved.

## Remember

- **API:** Connects applications.
- **Postman:** Tests APIs.
- **Request:** Sent to the server.
- **Response:** Returned by the server.
- **JSON:** Common format for API data.