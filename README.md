# smarties

A smartscreen displaying various helpers for my day-to-day life in my hallway

## Development

Run the dev server:

```shellscript
npm run dev
```

## Deployment
### No Docker
First, build your app for production:

```sh
npm run build
```

Then run the app in production mode:

```sh
npm start
```

### Docker
```sh
$ docker build -t smarties-img .
$ docker run -it --rm --name smarties smarties-img
```