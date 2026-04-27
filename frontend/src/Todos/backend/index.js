import express from 'express';
import cors from 'cors';
import fs from 'fs';
const app = express();
const PORT = 5000;
app.use(cors());
app.use(express.json());


app.post('/todos/post', (req, res) => {
    const {text} = req.body;

    if(!text || text.trim() === "") {
        res.json({
            status: "400",
            message: "Text is required"
        })
    }

    const newTodos = {
        id: Date.now(),
        text: text
    };

    fs.readFile('./data/todos.json', 'utf-8', (err, data) => {
        if(err) {
            res.json({
                status: "500",
                message: "Error reading file"
            })
        } else {
            const todos = JSON.parse(data);
            todos.push(newTodos);
            fs.writeFile('./data/todos.json', JSON.stringify(todos), (err) => {
                if(err) {
                    res.json({
                        status: "500",
                        message: "Error writing file"
                    })
                } else {
                    res.json(newTodos);
        }
            })
        }
    })
})

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

