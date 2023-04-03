import posts from "./tuits.js";
let tuits = posts;

const createTuit = (req, res) => {}
const findTuits  = (req, res) => {}
const updateTuit = (req, res) => {}
const deleteTuit = (req, res) => {}


const createTuit = (req, res) => {
    const newTuit = req.body;
    newTuit._id = (new Date()).getTime()+'';
    newTuit.likes = 0;
    newTuit.liked = false;
    tuits.push(newTuit);
    res.json(newTuit);
}
  

export default (app) => {
 app.post('/api/tuits', createTuit);
 app.get('/api/tuits', findTuits);
 app.put('/api/tuits/:tid', updateTuit);
 app.delete('/api/tuits/:tid', deleteTuit);
}
