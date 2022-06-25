import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { AdminModule } from './admin/admin.module';
import { ReportModule } from './report/report.module';
import { NoticeModule } from './notice/notice.module';
import { FileModule } from './file/file.module';
import { ProjectModule } from './project/project.module';

@Module({
  imports: [AuthModule, UserModule, AdminModule, ReportModule, NoticeModule, FileModule, ProjectModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
