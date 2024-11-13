# Activity

- Method: **GET**
- Endpoint: **/activities**

## Responses (Success)

```json
{
    "status":200,
    "body":{
        "message":string,
        "error":false,
        "data":[
            ...,
            {},
            ...,
        ]
    }
}
```

## Responses (Failed)

```json
{
    "body":{
        "message":string,
        "error":true,
    },
    "status":400,
}
```

## Responses (Empty)

```json
{
    "body":{
        "message":string,
        "error":false,
        "data":[]
    },
    "status":200,
}
```
