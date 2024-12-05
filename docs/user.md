## Update user

- Method: **PATCH**
- Endpoint: **/users**

### Request Body
```json
{
  "name": "<optional> string",
  "email": "<optional> string",
  "password": "<optional> string"
}
```

### Response (Success)

```json
{
    "status": 200,
  "body": {
      "message": "User updated successfully",
    "error": false
  }
}
```


## Update user
      
- Method: **DELETE**
- Endpoint: **/users**

### Response (Success)

```json
{
    "status": 200,
  "body": {
      "message": "User deleted successfully",
    "error": false
  }
}
```
