const redis = require('redis');
const moment = require('moment');

const client = redis.createClient({
    socket : {
        host: process.env.REDIS_HOST,
        port: process.env.REDIS_PORT
    }
});
client.connect();

const WINDOW = parseInt(process.env.RATE_LIMIT_WINDOW || '60');
const MAX_REQ = parseInt(process.env.RATE_LIMIT_MAX || '100');

module.exports = async function rateLimiter(req,res,next){
    try{
        const ip = req.ip;
        const windowKey = `rate-limit:${ip}:${moment().format('YYYYMMDDHHmm')}`;
        
        const count = await client.incr(windowKey);
        if(count===1){
            await client.expire(windowKey,WINDOW);
        }

        if(count>MAX_REQ){
            return res.status(429).json({error:'Too many requests, please try again later.'});
        }

        next()
    }
    catch (err){
        console.error(err);
        res.status(500).json({error:'Rate Limiter error'});
    }
};
