# Activity

- Method: **GET**
- Endpoint: **/foods**

## Responses (Success)

```json
{
    "status":200,
    "body":{
        "message":'berhasil mendapatkan list food',
        "error":false,
        "data":[
            {
                "id":string,
                "name":string,
                "detail":string
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
        "message":'gagal mendapatkan list activity',
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
        "message":'berhasil mendapatkan list activity',
        "error":false,
        "data":[]
    },
    ...
}
```
