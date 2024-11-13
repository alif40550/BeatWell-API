# foods

- Method: **GET**
- Endpoint: **/activities**

## Responses (Success)

```json
{
    "status":200,
    "body":{
        "message":'berhasil mendapatkan list foods',
        "error":false,
        "data":[
            {
                "id":string,
                "name":string,
                "recipe":string
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
        "message":'gagal mendapatkan list foods',
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
        "message":'berhasil mendapatkan list foods',
        "error":false,
        "data":[]
    },
    ...
}
```
