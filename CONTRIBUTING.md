# CONTRIBUTING

Please check the `sayings.json` before adding new one. Put your saying in **first season then episode and finally the time(saidAt)** order and make sure your object
is respecting this schema:

```js
Saying: {
    Required: saying, season, episode, episodeName, saidAt, saidBy
    saying: string
      example: 'Avcı ne kadar hile bilirse, ayı da o kadar yol bilir.'
    season: number(int)
      example: 2
    episode: number(int)
      example: 4
    episodeName: string
      example: 'Kuki'
    saidAt: string
      example: '22:33' or ''
    saidBy: string
      example: 'Ersoy'
}
```
