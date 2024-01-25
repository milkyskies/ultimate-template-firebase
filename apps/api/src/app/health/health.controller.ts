import { Controller, Get, UseGuards } from '@nestjs/common';
import { Role } from '@prisma/client';
import { FirebaseAuthGuard } from '@whitecloak/nestjs-passport-firebase';
import { Roles } from 'src/infra/auth/roles.decorator';
import { RolesGuard } from 'src/infra/auth/roles.guard';

@Controller('health')
export class HealthController {
  @Get()
  async getHealth(): Promise<string> {
    return Promise.resolve('OK');
  }

  @Get('authn')
  @UseGuards(new FirebaseAuthGuard())
  async getAuthnProtectedHealth(): Promise<string> {
    return Promise.resolve('OK');
  }

  @Get('authz')
  @UseGuards(new FirebaseAuthGuard(), RolesGuard)
  @Roles(Role.USER)
  async getAuthzProtectedHealth(): Promise<string> {
    return Promise.resolve('OK');
  }
}
