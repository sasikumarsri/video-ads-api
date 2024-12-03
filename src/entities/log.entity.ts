import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  ManyToOne,
  JoinColumn,
  BaseEntity,
} from 'typeorm';
import { TVDevice } from './tv-device.entity';

export enum LogAction {
  URL_OPENED = 'URL_OPENED',
  BROWSER_CLOSED = 'BROWSER_CLOSED',
  POWER_OFF = 'POWER_OFF',
}

@Entity('logs')
export class Log extends BaseEntity {
  @PrimaryGeneratedColumn({ type: 'int', unsigned: true })
  id: number;

  @ManyToOne(() => TVDevice, { nullable: false })
  @JoinColumn({ name: 'device_id' })
  device: TVDevice;

  @Column({ type: 'enum', enum: LogAction })
  action: LogAction;

  @Column({ type: 'text', nullable: true })
  details: string;

  @CreateDateColumn()
  created_at: Date;
}
