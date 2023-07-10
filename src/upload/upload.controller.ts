import {
  Controller,
  Post,
  UseInterceptors,
  UploadedFile,
} from '@nestjs/common';
import { diskStorage } from 'multer';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller('files')
export class FilesController {
  //   @Post('upload')
  //   @UseInterceptors(FileInterceptor('file'))
  //   async uploadFile(@UploadedFile() file: Express.Multer.File) {
  //     console.log(file);
  //     return { message: 'File uploaded successfully' };
  //   }
  // }

  @Post('/upload')
  @UseInterceptors(
    FileInterceptor('file', {
      storage: diskStorage({
        destination: './uploads',
        filename: (req, file, cb) => {
          cb(null, `${file.originalname}`);
        },
      }),
    }),
  )
  async uploadFile(@UploadedFile() file: any) {
    console.log(file);
    return 'success';
  }
}
