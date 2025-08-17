import { Injectable } from '@nestjs/common';
import { PrismaService, Product, Prisma } from '@myrepo/my-prisma-client';

@Injectable()
export class ProductService {
  constructor(private prisma: PrismaService) {}

  async findAll() {
    return this.prisma.product.findMany();
  }

  async findOne({ id }: { id: number }): Promise<Product | null> {
    return this.prisma.product.findUnique({ where: { id } });
  }

  async create({ data }: { data: Prisma.ProductCreateInput }) {
    return this.prisma.product.create({ data });
  }

  async delete({ id }: { id: number }) {
    return this.prisma.product.delete({ where: { id } });
  }
}
