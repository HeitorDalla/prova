import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { SequelizeModuleOptions, SequelizeOptionsFactory } from '@nestjs/sequelize';
import { Filme } from 'src/filmes/entities/filme.entity';
import { Estilo } from 'src/estilos/entities/estilo.entity';

@Injectable()
export class SequelizeConfigService implements SequelizeOptionsFactory {
    constructor (
        private configService : ConfigService
    ) {}

    createSequelizeOptions(connectionName?: string): SequelizeModuleOptions | SequelizeModuleOptions {
        return {
            dialect: 'mysql',
            host: this.configService.get<string>('DB_HOST'),
            port: this.configService.get<number>('DB_PORT'),
            username: this.configService.get<string>('DB_USER'),
            password: this.configService.get<string>('DB_PASSWORD'),
            database: this.configService.get<string>('DB_DATABASE'),
            synchronize: true,
            autoLoadModels: true,
            models: [Filme, Estilo]
        }
    }
}