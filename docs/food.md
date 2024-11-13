# Food Endpoint

## Get All Foods

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
        "message":'gagal mendapatkan list food',
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
## Get Detail Foods

- Method: **GET**
- Endpoint: **/foods/{id}**

## Response Success

```json
{
    "status":200,
    "body":{
        "message":'berhasil mendapatkan data food',
        "error":false,
        "data":{
                "id":string,
                "name":string,
                "recipe":string
            },
            ...
    },
    ...
}
```
## Responses (Failed)

```json
{
    "status":400,
    "body":{
        "message":'gagal mendapatkan data food',
        "error":true,
    },
    ...
}
```