import mongoose from "mongoose";

const formSchemaa = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },

  elements: {
    type: [
      {
        id: {
          type: Number,
          required: true,
        },
        title: {
          type: String,
          required: true,
        },

        elementName: {
          type: String,
          required: true,
        },
        type: {
          type: String,
          required: true,
        },
        bubbleContent: {
          type: String,
          required: true,
        },
      },
    ],
    required: true,
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

const Form = mongoose.model("Form", formSchemaa);

export default Form;
