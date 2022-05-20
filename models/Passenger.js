import mongoose from "mongoose";
const { Schema, model } = mongoose;

const PassengerShema = new Schema({
  Survived: {
    type : Boolean,
    required: true,
  },
  Pclass: {
    type : Number,
    required: true,
  },
  Name: {
    type : String,
    required: true,
  },
  Sex: {
    type : String,
    required: true,
  },
  Age:{
    type: Number
  },
  SibSp:{
    type: Number
  },
  Parch:{
    type: Number
  },
  Ticket:{
    type: String
  },
  Fare:{
    type: String
  },
  Cabin:{
    type: String
  },
  Embarqued:{
    type: String
  }
});

const Passenger = model('passengers', PassengerShema);

export default Passenger;