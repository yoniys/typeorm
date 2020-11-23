import { Body, Controller, Delete, Get, Param, Post, Put, ValidationPipe } from '@nestjs/common';
import { CreateUserDto } from 'src/entitys1/createUserDto';
import { ScontrolerService } from 'src/s/scontroler/scontroler.service';

@Controller('typormco')
export class TypormcoController {
    constructor(private readonly usersService: ScontrolerService) {}
    @Post()
    create(@Body() createUserDto: CreateUserDto) {
      console.log("post")
      return this.usersService.create(createUserDto);
    }
    @Get()
    findAll() {
      return this.usersService.findAll();
    }
    @Get(':id')
    findOne(@Param('id',ValidationPipe) id: string) {
      // throw new BadRequestException();
      return this.usersService.findOne(+id);
    }
    @Put(':id')
    update(@Param('id') id: string, @Body() firstName) {
      return this.usersService.update(+id, firstName.firstName);
    }
    @Delete(':id')
    remove(@Param('id') id: string) {
      return this.usersService.remove(+id);
    }
}
