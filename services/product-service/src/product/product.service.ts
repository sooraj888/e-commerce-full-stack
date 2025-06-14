import { Injectable } from '@nestjs/common';
import { CreateProductInput } from './dto/create-product.input';
import { UpdateProductInput } from './dto/update-product.input';
import { Product } from './entities/product.entity';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class ProductService {
  constructor(
    @InjectModel(Product.name) private productModel: Model<Product>,
  ) {}

  async create(input: CreateProductInput): Promise<Product> {
    const created = new this.productModel(input);
    return created.save();
  }

  async findAll(): Promise<Product[]> {
    return this.productModel.find().exec();
  }

  async findOne(id: string): Promise<Product | null> {
    return this.productModel.findById(id).exec();
  }

  async update(id: string, input: UpdateProductInput): Promise<Product | null> {
    return this.productModel.findByIdAndUpdate(id, input, { new: true }).exec();
  }

  async remove(id: string): Promise<boolean> {
    await this.productModel.findByIdAndDelete(id).exec();
    return true;
  }
}
