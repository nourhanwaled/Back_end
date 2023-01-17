import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppService } from './app.service';
import { typeOrmConfig } from './config/typeorm.config';
import { UserModule } from './modules/user/user.module';
import { UserAuthModule } from './modules/user-auth/user-auth.module';
import { SettingModule } from './modules/setting/setting.module';
import { AppController } from './app.controller';
import { CompanyModule } from './modules/company/company.module';
import { ContactModule } from './modules/contact/contact.module';
import { planModule } from './modules/plan/plan.module';
import { AttributeModule } from './modules/attribute/attribute.module';
import { PartenerModule } from './modules/partner/partner.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRoot(typeOrmConfig),
    UserModule,
    UserAuthModule,
    SettingModule,
    CompanyModule,
    ContactModule,
    planModule,
    AttributeModule,
    PartenerModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
