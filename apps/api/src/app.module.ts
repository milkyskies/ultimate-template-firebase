import { Module } from '@nestjs/common';
import { HealthController } from './app/health/health.controller';
import { UserController } from './app/user/user.controller';
import { AuthController } from './app/auth/auth.controller';
import { AuthModule } from './infra/auth/auth.module';

@Module({
  imports: [AuthModule],
  controllers: [HealthController, UserController, AuthController],
})
export class AppModule {}
