# fileSync

*WIP*

A file sync server.  The server stores file uploads in an object store.  When
the local files change, the client library can re-upload the files.

## Clients

* python [fileSync-python-client](https://github.com/micarlise/fileSync-python-client)

## Run locally

```
npx nodemon index.js
```

### API

*upload a file*

```
curl --form block='@filename' localhost:3000/block/k2h2lm
```

*download a file*

```
curl localhost:3000/block/k2h2lm
```

## Run Tests

```
npm i 
npm t
```
