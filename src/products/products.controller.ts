import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';

import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product } from './schemas/product.schema';

@Controller('products')
export class ProductsController {
  // eslint-disable-next-line no-unused-vars
  constructor(private readonly productService: ProductsService) {}

  @Get()
  getAll(): Promise<Product[]> {
    return this.productService.getAll();
  }

  @Get(':id')
  getOne(@Param('id') id): Promise<Product> {
    return this.productService.getById(id);
  }

  @Post()
  create(@Body() createProductDto: CreateProductDto): Promise<Product> {
    return this.productService.create(createProductDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<Product> {
    return this.productService.remove(id);
  }

  @Put(':id')
  update(@Body() updateProductDto: UpdateProductDto, @Param('id') id: string): Promise<Product> {
    return this.productService.update(id, updateProductDto);
  }
}
