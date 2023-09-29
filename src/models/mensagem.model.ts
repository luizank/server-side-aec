import {
    getModelForClass,
    modelOptions,
    prop,
  } from "@typegoose/typegoose";
  
  @modelOptions({
    schemaOptions: {
      // Add createdAt and updatedAt fields
      timestamps: true,
    },
  })
  
  // Export the User class to be used as TypeScript type
  export class Mensagem {
    @prop()
    idm: number;

    @prop()
    mensagem: string;
  }
  
  // Create the user model from the User class
  const mensagemModel = getModelForClass(Mensagem);
  export default mensagemModel;
  