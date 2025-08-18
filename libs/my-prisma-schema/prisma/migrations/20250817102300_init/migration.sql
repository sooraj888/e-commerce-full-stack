-- CreateTable
CREATE TABLE "public"."Product" (
    "id" SERIAL NOT NULL,
    "image" TEXT NOT NULL,
    "name" TEXT,

    CONSTRAINT "Product_pkey" PRIMARY KEY ("id")
);
