import { Module } from '@nestjs/common';
import { FirebaseAuthModule } from '@whitecloak/nestjs-passport-firebase';
import { FIREBASE_PROJECT_ID } from '../env';

@Module({
  imports: [
    FirebaseAuthModule.register({
      audience: FIREBASE_PROJECT_ID,
      issuer: `https://securetoken.google.com/${FIREBASE_PROJECT_ID}`,
    }),
  ],
})
export class AuthModule {}
