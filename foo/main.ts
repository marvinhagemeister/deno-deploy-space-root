import * as p from "preact";

Deno.serve((req) => {
  console.log(p);
  return new Response("it works");
});
