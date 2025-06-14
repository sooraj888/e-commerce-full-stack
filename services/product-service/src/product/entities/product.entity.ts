import { ObjectType, Field, ID, Int } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ProductDocument = Product & Document;

@ObjectType() // GraphQL Type
@Schema({ timestamps: true }) // Mongoose Schema
export class Product {
  @Field(() => String)
  id: string;

  @Prop({ required: true })
  @Field()
  name: string;

  @Prop()
  @Field({ nullable: true })
  description?: string;

  @Prop({ required: true })
  @Field(() => Int)
  price: number;

  @Prop({ default: 0 })
  @Field(() => Int)
  quantity: number;

  @Prop()
  @Field({ nullable: true })
  imageUrl?: string;

  @Prop({ default: true })
  @Field()
  isAvailable: boolean;

  @Prop()
  @Field({ nullable: true })
  category?: string;

  @Field(() => Date)
  createdAt: Date;

  @Field(() => Date)
  updatedAt: Date;
}

export const ProductSchema = SchemaFactory.createForClass(Product);
