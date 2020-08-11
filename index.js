var PORT = process.env.PORT || 5000;
const exp = require('express');
const iq = require('inspirational-quotes');
const app = exp();




app.set('view engine','ejs');
app.get('/',(req,res)=>{
    let quote = iq.getQuote();
    res.render('index.ejs',{
        qt : quote.text,
        au : quote.author
    });
});




app.listen(PORT, () => console.log("Initialized"));