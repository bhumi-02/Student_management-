import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StudentController } from './controller/student.controller';
import { StudentSchema } from './schema/student.schema';
import { StudentService } from './service/student.service';
@Module({
  imports: [MongooseModule.forRoot('mongodb+srv://functionUpUranium-2:JECVxS0v96bKoG0a@cluster0.j1yrl.mongodb.net/bhumi-DB',{dbName: 'studentdb'}),
  MongooseModule.forFeature([{ name: 'Student', schema: StudentSchema }])
],
  controllers: [AppController,StudentController],
  providers: [AppService,StudentService],
})
export class AppModule {}
