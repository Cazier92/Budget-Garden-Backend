import mongoose from 'mongoose'

const Schema = mongoose.Schema

const triviaSchema = new Schema({
  category: String,
  q: String,
  ans: String,
  a: String,
  b: String,
  c: String,
  d: String
})

const Trivia = mongoose.model('Trivia', triviaSchema)

export { Trivia }
