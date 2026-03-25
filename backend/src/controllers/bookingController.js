// import { Booking } from "../models/Booking.js";


// export const createBooking = async (req,res) =>{
//    const {user, event} = req.body

//    try{
//      const Booking = await Booking.create({user,event})
//      res.sendStatus(201).json({message:"Booking successfully", Booking});

//    }catch(err){
//     return res.sendStatus(400).json({error: err.message})
//    }
// }

// export const getAllBooking = async (req,res) =>{
  
//     try{
//          const {userId} = req.params;
//          const Booking = await Booking.find({user: userId}).populate("event")
//          res.json(Booking);
//     }catch(err){
//         return res.sendStatus(400).json({error:err.message})
//     }
// }



import { Booking } from "../models/Booking.js";

export const createBooking = async (req, res) => {
  const { user, event } = req.body;

  try {
    const booking = await Booking.create({ user, event });
    return res.status(201).json({
      message: "Booking successfully",
      booking,
    });
  } catch (err) {
    return res.status(400).json({ error: err.message });
  }
};

export const getAllBooking = async (req, res) => {
  try {
    const { userId } = req.params;
    const bookings = await Booking.find({ user: userId }).populate("event");
    return res.json(bookings);
  } catch (err) {
    return res.status(400).json({ error: err.message });
  }
};
