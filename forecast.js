const request=require('request');
const forecast=(latitude,longitude,callback)=>
{
    const url='https://api.darksky.net/forecast/6e4c6971231fd0b2cbf722aac65f87d2/'+(latitude)+','+(longitude)+'?units=si&lang=en';
    request({url:url,json:true},(error,response)=>
    {
        if(error)
        {
            callback('Unable to connect to weather services!',undefined);
        }else if(response.body.error)
        {
            callback('Unable to find the weather for the searched location',undefined);
        }
        else
        {
            callback(undefined,response.body.daily.data[0].summary+`It is currently ${response.body.currently.temperature} degrees out. There is ${response.body.currently.precipProbability}% chance of rain. TimeZone: ${response.body.timezone}`
             );
        }
    })
}
module.exports=forecast;
