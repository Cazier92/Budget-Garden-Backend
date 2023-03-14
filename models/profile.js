import mongoose from 'mongoose'

const Schema = mongoose.Schema

const profileSchema = new Schema({
  name: String,
  photo: String,
  persFinance: Number,
  buisEcon: Number,
  investing: Number,
  taxes: Number,
  finHistory: Number,
  insurance: Number,
  stock: Number,
  finInst: Number

},{
  timestamps: true,
})

const Profile = mongoose.model('Profile', profileSchema)

export { Profile }
