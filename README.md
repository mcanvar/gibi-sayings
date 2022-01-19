# gibi Sayings Public API for fun

This is a simple API project that lists Turkish sayings said on gibi Show.

Please check the [example project](https://mcanvar.github.io/gibi-sayings/) created using this API.

## Endpoints

### `/v1.0.0/lits.json`

```
curl -X 'GET' \
  'https://mcanvar.github.io/gibi-sayings/v1.0.0/list.json' \
  -H 'accept: application/json'
  ```

#### Code: 200 Example response body:

```json
[
  {
    "id": 1,
    "saying": "Avcı ne kadar hile bilirse, ayı da o kadar yol bilir.",
    "season": 2,
    "episode": 4,
    "startTime": "22:33",
    "saidBy": "Ersoy"
  }
]

```

## Contribution

Please check the `list.json` before adding new one. Give your saying an id and make sure your object is respecting this
schema:
```js
Saying: {
    Required: episode,id,saidBy,saying,season,saidAt
    id: number (int)
        example: 1
    saying: string
        example: 'Avcı ne kadar hile bilirse, ayı da o kadar yol bilir.'
    season: number (int)
        example: 2
    episode: number (int)
        example: 4
    saidAt: string
        example: '22:33'
    saidBy: string
        example: 'Ersoy'
}
```


## Disclaimer

This project created and shared to let developers test their front-end applications during developments in a funny way.
All rights belongs to gibi on Exxen, nothing related commercial use. All responsibility belongs to the user of the API.
