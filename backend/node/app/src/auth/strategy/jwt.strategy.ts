import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Request } from 'express';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy, 'jwt') {
  constructor(private readonly configService: ConfigService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: configService.get('authConfig.jwt'),
      passReqToCallback: true,
    });
  }

  async validate(req: Request, payload: any) {
    const url = /auth\/email-verify*/;

    if (!url.test(req.url) && !payload.twoFactor)
      throw new UnauthorizedException();

    return payload;
  }
}
