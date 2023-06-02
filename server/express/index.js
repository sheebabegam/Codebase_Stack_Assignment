const express = require("express")

const morgan = require("morgan");

const cors = require('cors')

const app = express();

app.use(express.json());

app.use(cors());

app.use(morgan('dev'))

app.get('/hello', (req, res) => {

    res.status(200).send('Hello World');

})

function QueryRunning() {

    console.log("QUERY RUNNING")

}

function myFun(e) {

    let sum = 0;
    
    for (let i = 0; i <= e.length; i++) {

        if (i % 2 == 0) {  // only allow the reminder zero
            sum = sum + i
        }
    }

    console.log(`sum of even number ${e}: ${sum}`);

    return sum;

}

const numArr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const myTimeout = setInterval(QueryRunning, 5000);

const evenNum = myFun(numArr);


app.listen(3000, () => {
    console.log("This port running at server 3000");
})



