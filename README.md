# Project Name

> Project description

This project is SoundCloud mock, a front-end capstone project for Hack Reactor. This module
represents the top component of an individual songs' page, with the waveform, dynamically rendered
comments, and song characteristics.

Here is another readme edit for the readme branch.


## Related Projects

  Proxy server:
  - https://github.com/SoundScape/proxy-avincenthill

  Component services:
  - https://github.com/SoundScape/component-jverch-comments
  - https://github.com/SoundScape/component-brandon-socialArea
  - https://github.com/SoundScape/component-rebecca-relatedLists

## API Documentation

This component server has a standard CRUD API described below:

#### DATA SHAPE

DB: waveformplayer

Tables:

songs
  +-----------------+--------------+------+-----+---------+----------------+
| Field           | Type         | Null | Key | Default | Extra          |
+-----------------+--------------+------+-----+---------+----------------+
| id              | int(11)      | NO   | PRI | NULL    | auto_increment |
| title           | varchar(255) | YES  |     | NULL    |                |
| coverArt        | varchar(255) | YES  |     | NULL    |                |
| artist          | varchar(255) | YES  |     | NULL    |                |
| date            | datetime     | YES  |     | NULL    |                |
| duration        | float        | YES  |     | NULL    |                |
| genre           | varchar(255) | YES  |     | NULL    |                |
| waveform        | varchar(255) | YES  |     | NULL    |                |
| backgroundColor | varchar(255) | YES  |     | NULL    |                |
+-----------------+--------------+------+-----+---------+----------------+

comments
+------------+--------------+------+-----+---------+----------------+
| Field      | Type         | Null | Key | Default | Extra          |
+------------+--------------+------+-----+---------+----------------+
| id         | int(11)      | NO   | PRI | NULL    | auto_increment |
| text       | varchar(255) | YES  |     | NULL    |                |
| user       | varchar(255) | YES  |     | NULL    |                |
| userImage  | varchar(255) | YES  |     | NULL    |                |
| timePosted | float        | YES  |     | NULL    |                |
| songId     | int(11)      | YES  |     | NULL    |                |
+------------+--------------+------+-----+---------+----------------+

#### ROUTING

##### GET SOCIAL AREA DATA FOR ALL TRACKS
  // TBD fix this
  Endpoint
  GET .../api/stats/

  - On success, the HTTP status code in the response header is 200 OK and the response body contains an array of objects, with each object representing a song.

  - Each song object has an id, plays, likes and reposts.

  Example Data
  [
    {
        "_id": "5baabe947707de1ea0f10019",
        "id": 3,
        "plays": 7729,
        "likes": 80,
        "reposts": 309,
        "__v": 0
    },
    {
        "_id": "5baabe947707de1ea0f1001a",
        "id": 4,
        "plays": 3957,
        "likes": 845,
        "reposts": 316,
        "__v": 0
    }
  ]


## Table of Contents

1. [Usage](#Usage)
1. [Requirements](#requirements)
1. [Development](#development)

## Usage

> Some usage instructions

## Requirements

An `nvmrc` file is included if using [nvm](https://github.com/creationix/nvm).

- Node 6.13.0
- etc

## Development

### Installing Dependencies

From within the root directory:

```sh
npm install -g webpack
npm install
```

