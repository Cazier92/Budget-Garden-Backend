import { Trivia } from '../models/trivia.js'

function index(req, res) {
  Trivia.find({})
  .then(trivia => res.json(trivia))
  .catch(err => {
    console.log(err)
    res.status(500).json(err)
  })
}

const show = async (req, res) => {
  try {
    const trivia = await Trivia.findById(req.params.id)
    res.status(200).json(trivia);
  } catch (error) {
    console.log(error, "Show Controller Error");
    res.status(500).json(error);
  }
};



const post = async (req, res) => {
  try {
    const newTrivia = await Trivia.create(req.body);
    res.status(201).json(newTrivia);
  } catch (err) {
    res.status(400).json({
      error: err.message,
    });
  }
};


export {index, show, post}
