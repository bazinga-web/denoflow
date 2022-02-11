import axiod from "https://deno.land/x/axiod@0.24/mod.ts";
axiod.get('https://test.owenyoung.com/slim.json')
    .then(res => {
        console.log(res)
    })