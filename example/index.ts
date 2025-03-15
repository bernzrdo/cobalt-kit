import { Cobalt } from '../src';

const cobalt = new Cobalt({
    instance: process.env.INSTANCE_URL!,
    auth: {
        scheme: 'Api-Key',
        token: process.env.API_KEY!
    },
    headers: { 'User-Agent': process.env.USER_AGENT! }
});

(async ()=>{

    const info = await cobalt.info()
    console.log(`Cobalt v${info.cobalt.version}`);

    const res = await cobalt.download('https://www.youtube.com/watch?v=VUFr92i5jkA');
    console.log(res);

})();
