const express = require('express');
const app = express();
app.use(express.json());


app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.get('/users',(req,res)=>{
    const users = [
        {id:1,name:'keza',email:'keza@gmail.com'},
        {id:2,name:'john',email:'john@gmail.com'},
        {id:3,name:'jane',email:'jane@gmail.com'}
    ];
    res.status(200).json({
        data:users,
         message:'Users retrieved successfully'
    });
});
app.get('/products',(req,res)=>{
    const products = [
        {id:1,name:'Laptop',price:1000},
        {id:2,name:'Phone',price:500},
        {id:3,name:'Tablet',price:300}
    ];
    res.status(200).json({
        data:products,
         message:'Products retrieved successfully'
    });
});
app.post('/products',(req,res)=>{
    const{name,price} = req.body;
    if(!name || !price){
        return res.status(400).json({
            message:'Name and price are required'
        });
    }
    res.status(201).json({
        message:'Product created successfully', data:{name,price}
    });
});
app.post('/users',(req,res)=>{
    const{id,name} = req.body;
    if(!id || !name){
        return res.status(400).json({
            message:'Name and email are required'
        });
    }
    res.status(201).json({
        message:'users created successfully', data:{id,name,}
    });
});
app.get('/users/:id', (req, res) => {
    const { id } = req.params;
    res.status(200).json({
        message: 'User retrieved successfully',
        data: { id, name: 'example' }
    });
});

app.put('/users/:id', (req, res) => {
    const { id } = req.params;
    const { name, email } = req.body;
    if (!name || !email) {
        return res.status(400).json({
            message: 'Name and email are required'
        });
    }
    const user=[
        {id:1,name:'keza',email:'keza@gmail.com'},
        {id:2,name:'john',email:'john@gmail.com'},
        {id:3,name:'jane',email:'jane@gmail.com'}

    ];
    const userIndex= user.findIndex(u=>u.id === parseInt(id));
    if(userIndex === -1){
        return res.status(404).json({
            message:'User not found'
        });
    }
    user[userIndex]={id:parseInt(id),name,email};
    res.status(200).json({
        message: 'User updated successfully',
        data: user[userIndex]
    });
});


app.delete('/users/:id', (req, res) => {
    const { id } = req.params;
    res.status(200).json({
        message: 'User deleted successfully',
        data: { id }
    });
});
app.get('/products/:id', (req, res) => {
    const { id } = req.params;
    res.status(200).json({
        message: 'Product retrieved successfully',
        data: { id, name: 'example', price: 0 }
    });
});

app.put('/products/:id', (req, res) => {
    const { id } = req.params;
    const { name, price } = req.body;
    if (!name || !price) {
        return res.status(400).json({
            message: 'Name and price are required'
        });
    }
    res.status(200).json({
        message: 'Product updated successfully',
        data: { id, name, price }
    });
});

app.delete('/products/:id', (req, res) => {
    const { id } = req.params;
    res.status(200).json({
        message: 'Product deleted successfully',
        data: { id }
    });
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});

