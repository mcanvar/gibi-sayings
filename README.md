# gibi Sayings Public API

This is a simple API project that lists Turkish sayings said on gibi Show.

Please check the [example project](https://mcanvar.github.io/gibi-sayings/example/) created using this API.

For API docs please [refer here](https://mcanvar.github.io/gibi-sayings/docs) created by Swagger.

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
    "saying": "Avcı ne kadar hile bilirse, ayı da o kadar yol bilir.",
    "season": 2,
    "episode": 2,
    "episodeName": "Kuki",
    "saidAt": "36:02",
    "saidBy": "İlkkan"
  },
  {
    "saying": "Allahın dinlenme tesisinde bu ne sembolizm ya böyle?",
    "season": 2,
    "episode": 4,
    "episodeName": "Sokak Röportajı",
    "saidAt": "22:30",
    "saidBy": "Yılmaz"
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
  "episodeName": "Sokak Röportajı",
  "saidAt": "53:38",
  "saidBy": "Yılmaz"
}

```

## Contribution

Please check [the contributing guide](https://github.com/mcanvar/gibi-sayings/blob/main/CONTRIBUTING.md).

## Disclaimer

This project created and shared to let developers test their front-end & mobile applications during developments in a
funny way. All rights belongs to gibi on Exxen, nothing related commercial use. All responsibility belongs to the user
or forker of the API.

## Thanks

For style candy special thanks to Tailwind CSS and for lokum icons thanks to Hero Icons.
