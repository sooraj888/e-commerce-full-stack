import { Injectable } from '@nestjs/common';
import { PrismaService, Product, Prisma } from '@myrepo/my-prisma-client';

@Injectable()
export class ProductsService {
  constructor(private prisma: PrismaService) {}

  async product(
    productWhereUniqueInput: Prisma.ProductWhereUniqueInput
  ): Promise<Product | null> {
    return this.prisma.product.findUnique({
      where: productWhereUniqueInput,
    });
  }

  // async posts(params: {
  //   skip?: number;
  //   take?: number;
  //   cursor?: Prisma.PostWhereUniqueInput;
  //   where?: Prisma.PostWhereInput;
  //   orderBy?: Prisma.PostOrderByWithRelationInput;
  // }): Promise<Post[]> {
  //   const { skip, take, cursor, where, orderBy } = params;
  //   return this.prisma.post.findMany({
  //     skip,
  //     take,
  //     cursor,
  //     where,
  //     orderBy,
  //   });
  // }

  // async createPost(data: Prisma.PostCreateInput): Promise<Post> {
  //   return this.prisma.post.create({
  //     data,
  //   });
  // }

  // async updatePost(params: {
  //   where: Prisma.PostWhereUniqueInput;
  //   data: Prisma.PostUpdateInput;
  // }): Promise<Post> {
  //   const { data, where } = params;
  //   return this.prisma.post.update({
  //     data,
  //     where,
  //   });
  // }

  // async deletePost(where: Prisma.PostWhereUniqueInput): Promise<Post> {
  //   return this.prisma.post.delete({
  //     where,
  //   });
  // }
}
