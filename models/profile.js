import mongoose from 'mongoose'

const Schema = mongoose.Schema

const profileSchema = new Schema({
  name: String,
  photo: String,
  persFinance: {type: Number, default: 0},
  buisEcon: {type: Number, default: 0},
  investing: {type: Number, default: 0},
  taxes: {type: Number, default: 0},
  finHistory: {type: Number, default: 0},
  insurance: {type: Number, default: 0},
  stock: {type: Number, default: 0},
  finInst: {type: Number, default: 0}

},{
  timestamps: true,
})

const Profile = mongoose.model('Profile', profileSchema)

export { Profile }
