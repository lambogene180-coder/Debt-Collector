import { Controller, Get, Module } from '@nestjs/common';
import { Roles } from '../security/roles.decorator';

@Controller('health')
class HealthController {
  @Get()
  @Roles('OWNER', 'MANAGER', 'AGENT')
  getHealth() {
    return { status: 'ok' };
  }
}

@Module({
  controllers: [HealthController],
})
export class HealthModule {}
