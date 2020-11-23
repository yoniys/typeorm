import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm/dist/common/typeorm.decorators';
import { CreateUserDto } from 'src/entitys1/createUserDto';
import { User,  } from 'src/entitys1/entitymodel';
import { Repository } from 'typeorm';

@Injectable()
export class ScontrolerService {
    
    constructor(@InjectRepository(User)

    private userDb: Repository<User>) {}

    public async create(user: CreateUserDto): Promise<User> {
        return await this.userDb.save(user);
    }
    public async findAll(): Promise<User[]> {
        return await this.userDb.find();
    }
    public async findOne(id: number) {
        // return `This action returns a #${id} user`;
        return await this.userDb.findOne(id)
    }
    public async  update(id: number ,updatefirstName) {
      return  await this.userDb.update({id:id}, {firstName: updatefirstName});
        //  `This action updates a #${id} user`;
    }
    async remove(id: number ) {
        await this.userDb.delete(id)
        return `הוסר משתמש ${id} `
    }
    public async findByEmail(email: string): Promise<User | null> {
        const user = await this.userDb.find({ email: email });
        if (user) {
            console.log("user by email", user);
            return user[0];
        }
        throw new HttpException('משתמש עם דוא"ל זה אינו קיים', HttpStatus.NOT_FOUND);
    }

}
