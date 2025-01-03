import mongoose from "mongoose";

const formSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },

  elements: {
    type: [
      {
        id: {
          type: Number,
        },
        title: {
          type: String,
        },

        elementName: {
          type: String,
        },
        type: {
          type: String,
        },
        bubbleContent: {
          type: String,
        },
      },
    ],
  },
  responses:{
    type:[[String]]
  },
  creator: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
    required: true,
  },

  sharedWith: {
    type: [
      {
        user: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "User",
        },
        accessType: {
          type: String,
          enum: ["view", "edit"],
          default: "view",
        },
      },
    ],
  },

  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Form = mongoose.model("Form", formSchema);

export default Form;
