# gibi Sayings Public API for fun

This is a simple API project that lists Turkish sayings said on gibi Show.

Please check the [example project](https://mcanvar.github.io/gibi-sayings/) created using this API.

## Endpoints

### `/v1.0.0/sayings.json`

```
curl -X 'GET' \
  'https://mcanvar.github.io/gibi-sayings/v1.0.0/sayings.json' \
  -H 'accept: application/json'
  ```

#### Code: 200 Example response:

```json
[
  {
    "saying": "Allahın dinlenme tesisinde bu ne sembolizm ya böyle?",
    "season": 2,
    "episode": 4,
    "saidAt": "22:30",
    "saidBy": "Yılmaz"
  },
  {
    "saying": "Avcı ne kadar hile bilirse, ayı da o kadar yol bilir.",
    "season": 2,
    "episode": 2,
    "saidAt": "36:02",
    "saidBy": "İlkkan"
  }
]

```

### `/v1.0.0/sayings/#.json`

`#` is a number between 1 to length of the `sayings` array.

```
curl -X 'GET' \
  'https://mcanvar.github.io/gibi-sayings/v1.0.0/sayings/#.json' \
  -H 'accept: application/json'
  ```

#### Code: 200 Example response:

```json
{
  "saying": "Kuş Cenneti bitiyor, bizim bölgemiz başlıyor gibi.",
  "season": 2,
  "episode": 4,
  "saidAt": "53:38",
  "saidBy": "Yılmaz"
}

```

## Contribution

Please check the `sayings.json` before adding new one. Put your saying in alphabetical order and make sure your object is
respecting this schema:

```js
Saying: {
    Required: saying, season, episode, saidAt, saidBy
    saying: string
    example: 'Avcı ne kadar hile bilirse, ayı da o kadar yol bilir.'
    season: number(int)
    example: 2
    episode: number(int)
    example: 4
    saidAt: string
    example: '22:33'
    saidBy: string
    example: 'Ersoy'
}
```

## Disclaimer

This project created and shared to let developers test their front-end & mobile applications during developments in a funny way.
All rights belongs to gibi on Exxen, nothing related commercial use. All responsibility belongs to the user or forker of the API.
