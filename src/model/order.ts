import mongoose, { Document, Schema } from "mongoose"

// Define the interface for the Order document
interface IOrder extends Document {
  name: string
  jobTitle: string
  phoneNumber: string
  email: string
  brandName: string
  brandField: string
  brandDescription: string
  videosType: "ugc" | "models"
  serviceType: "campaign" | "video"
  numberOfModules?: string
  numberOfVideos?: "15" | "20" | "30" | "more"
  likedVideo?: string
  videoType: "homemade" | "liveCoverage"
  contentCreatorSex: "male" | "female" | "both"
  modalReservation?: "1" | "2"
}

// Define the schema for the Order document
const OrderSchema: Schema = new Schema({
  name: { type: String, required: [true, "الرجاء ادخال الاسم بالكامل."] },
  jobTitle: { type: String, required: [true, "الرجاء ادخال المسمى الوظيفي"] },
  phoneNumber: {
    type: String,
    required: [true, "الرجاء استخدام رقم سعودي"],
    match: [/^\+?(966)?5\d{8}$/, "الرجاء استخدام رقم سعودي"],
  },
  email: {
    type: String,
    required: [true, "يرجى كتابة ايميل صحيح"],
    match: [/.+@.+\..+/, "يرجى كتابة ايميل صحيح"],
  },
  brandName: {
    type: String,
    required: [true, "الرجاء ادخال اسم العلامة التجارية."],
  },
  brandField: { type: String, required: [true, "مجال العلامة التجارية مطلوب. "] },
  brandDescription: {
    type: String,
    required: [true, "الرجاء كتابة نبذة مبسطة "],
    minlength: [50, "الرجاء كتابة نبذة مبسطة "],
  },
  videosType: { type: String, enum: ["ugc", "models"], required: true },
  serviceType: { type: String, enum: ["campaign", "video"], required: true },
  numberOfModules: {
    type: String,
    validate: {
      validator: function (this: IOrder) {
        return this.videosType === "models"
          ? /^\d+$/.test(this.numberOfModules!)
          : true
      },
      message: "الرجاء اختيار عدد صالح",
    },
  },
  numberOfVideos: {
    type: String,
    enum: ["15", "20", "30", "more"],
    required: function (this: IOrder) {
      return this.serviceType !== "video"
    },
  },
  likedVideo: {
    type: String,
    validate: {
      validator: function (this: IOrder) {
        return this.videosType === "ugc"
          ? /^(ftp|http|https):\/\/[^ "]+$/.test(this.likedVideo!)
          : true
      },
      message: "رابط غير صالح!",
    },
  },
  videoType: { type: String, enum: ["homemade", "liveCoverage"], required: true },
  contentCreatorSex: {
    type: String,
    enum: ["male", "female", "both"],
    required: true,
  },
  modalReservation: {
    type: String,
    enum: ["1", "2"],
    required: function (this: IOrder) {
      return this.videosType === "models"
    },
  },
})

// Create the Order model
const Order = mongoose.models.Order || mongoose.model<IOrder>("Order", OrderSchema)

export default Order
