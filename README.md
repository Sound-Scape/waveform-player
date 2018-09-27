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

DB:

waveformplayer

Tables:

```
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
```

## API ROUTING

### SONGS
  ####GET /api/songs/

  - On success, the HTTP status code in the response header is 200 OK and the response body contains an object, whose key "data" points to an array of objects, with each object representing a song.

  ####example data
  {
    "data": [
        {
            "id": 1,
            "title": "Brandupdated",
            "coverArt": "https://source.unsplash.com/OSKZMbtsLFU/690x900",
            "artist": "Kailyn Lindgren II",
            "date": "2018-09-26T09:19:08.000Z",
            "duration": 4.24,
            "genre": "payment",
            "waveform": "https://w1.sndcdn.com/cWHNerOLlkUq_m.png",
            "backgroundColor": "#3a2e55"
        },
        {
            "id": 3,
            "title": "knowledge base",
            "coverArt": "https://source.unsplash.com/c0ZvWlXRPLk/690x900",
            "artist": "Herminia Kuhic",
            "date": "2018-09-26T11:05:34.000Z",
            "duration": 0,
            "genre": "content-based",
            "waveform": "https://w1.sndcdn.com/cWHNerOLlkUq_m.png",
            "backgroundColor": "#106b18"
        }, ...


  ####GET /api/songs/:id
  get a song's data
  ####PUT /api/songs/:id
  update a song
  ####DELETE /api/songs/:id
  delete a song
  ####POST /api/songs/:id
  create a song

### COMMENTS
  ####GET /api/comments/
  get all comment data
  ####GET /api/comments/:id
  get a comment's data
  ####PUT /api/comments/:id
  update a comments
  ####DELETE /api/comments/:id
  delete a comments
  ####POST /api/comments/:id
  create a comments


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

