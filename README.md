# Manifesto API

[![license](https://img.shields.io/github/license/mashape/apistatus.svg?style=flat-square)](https://choosealicense.com/licenses/mit/)

Manifesto's backend API.

## Requirements

 + docker & docker-compose
 + NodeJS 6+

## Setup

```
$ npm install
```

## Develop

```
$ npm run dev
```

## Test

```
$ npm test
```

## ENV

Following variables are needed to correctly boot the server
```
DB_CONNECTOR=postgresql
DB_URL=postgres://postgres:postgres@localhost/manifesto
DB_MIGRATE_STRATEGY=safe
```
You can provision them using an `.env` file

## DB migrate strategies

 + To automatically migrate your applications models use `DB_MIGRATE_STRATEGY=safe`. It will execute `autoupdate` method from Loopback [see docs](http://apidocs.loopback.io/loopback-datasource-juggler/#datasource-prototype-autoupdate).

 + To re-create DB tables from scratch, use `DB_MIGRATE_STRATEGY=drop` which will call Loopback's `automigrate` method [see docs](http://apidocs.loopback.io/loopback-datasource-juggler/#datasource-prototype-automigrate) **WARNING** in many situations, this will destroy data!

Migrate command can also be run like:
```
$ npm run migrate
```

## Production server

```
$ npm start
```


## Contact

Email:    info[@]adabits[.]org  
Twitter:  [@adab1ts](https://twitter.com/adab1ts)  
Facebook: [Adab1ts](https://www.facebook.com/Adab1ts)  
LinkedIn: [adab1ts](https://www.linkedin.com/company/adab1ts)  


## Contributors

Designed, developed and maintained by

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
[<img alt="laklau" src="https://avatars.githubusercontent.com/u/6210292?v=3&s=117" width="117">]((https://github.com/adab1ts/www.pareudepararme.org/commits?author=laklau)) |[<img alt="zuzust" src="https://avatars.githubusercontent.com/u/351530?v=3&s=117" width="117">](https://github.com/adab1ts/www.pareudepararme.org/commits?author=zuzust) |
:---: |:---: |
[Klaudia Alvarez](https://github.com/laklau) |[Carles Muiños](https://github.com/zuzust)
<!-- ALL-CONTRIBUTORS-LIST:END -->


## License

The code of this app is &copy; 2017 [Adab1ts](http://www.adabits.org) under the terms of the [MIT License](https://choosealicense.com/licenses/mit/).  
