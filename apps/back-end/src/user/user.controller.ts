import {
  Controller,
  Post,
  Body,
  Param,
  Get,
  Put,
  Delete,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }

  @Get('/:userId')
  async findById(@Param('userId') userId: string) {
    return await this.userService.findById(userId);
  }

  @Put('/:userId')
  async update(
    @Param('userId') userId: string,
    @Body() createUserDto: CreateUserDto
  ) {
    return await this.userService.update(userId, createUserDto);
  }

  @Delete('/:userId')
  async delete(@Param('userId') userId: string) {
    return await this.userService.delete(userId);
  }
}
