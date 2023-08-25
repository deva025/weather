const req=require('express')

const app=req()

app.set('view engine', 'hbs');



 const path=require('path')
 const full=path.join(__dirname,'../public')
 

app.use(req.static(full))
app.get('/',(req,res)=> res.render('index',{title:'weather app',name:'temperature and longitude &latitude'}))
app.get('/contact',(req,res)=>res.render('contact'))
app.get('/deva',(req,res)=>{ if(res) {
    if(!req.query.address) {
      return res.send("hey put some address")
    }
    const hj=req.query.address;
   // res.send({dva:'kjhg',lkjhgfgh:'jgfd',address:hj}) }






    const re1q=require('request')


    const urll='https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1Ijoic2RmZHNhc2QiLCJhIjoiY2xsZWd1N285MDN2dzNmcGJnOXBuZXJhbSJ9.6gbOg77TOZgiIFmeM-G9YQ&limit=1'
    
    const weatheUrl = urll.replace('Los%20Angeles', hj)
    
    re1q(weatheUrl,async(error,response)=>{
        if(error) {
    console.log("hi there u hve an erreor")
    
        }
    else {
        const jj=await JSON.parse(response.body)
    const gh=jj.features
   //res.send({dva:gh[0].center[0],lkjhgfgh:gh[0].center[1],address:hj}) 
    
const url='http://api.weatherstack.com/current?access_key=345378739bcf6422faf2763f8babed45&query=34.053691,-118.242766'
const weatherUrl = url.replace('34.053691', gh[0].center[1]).replace('-118.242766', gh[0].center[0]);
re1q(weatherUrl,async(error,response)=>{


    if (response && response.statusCode === 200) {
        const jj = await JSON.parse(response.body);
        res.send({dva:gh[0].center[0],lkjhgfgh:gh[0].center[1],address:jj.current.temperature})
    } else {
        res.send("Error fetching weather data.");
    }
    
     }
 
     )

    
   
    
        }
    
        })







    }




})

app.get('/ex',(req,res)=>{
    if(!req.query.search) {
        return res.send("oh shit")
    }
    
    res.send({prod:[]})})

app.get('*',(req,res)=>{res.render('404page')})



app.listen(3000,()=>{console.log('god ')})

