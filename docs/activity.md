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
            {
                "id":string,
                "name":string,
            },
            ...
        ]
    },
    ...
}
```

## Responses (Failed)

```json
{
    "status":400,
    "body":{
        "message":string,
        "error":true,
    },
    ...
}
```

## Responses (Empty)

```json
{
    "status":200,
    "body":{
        "message":string,
        "error":false,
        "data":[]
    },
    ...
}
```
