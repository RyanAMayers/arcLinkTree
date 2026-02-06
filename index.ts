import index from './src/index.html'

const server = Bun.serve({
  port: 17011,
  routes: {
    "/": index,
  }
});

console.log(`Listening on ${server.url}`);