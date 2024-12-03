import {
  Entity,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
  CreateDateColumn,
  BaseEntity,
  Column,
  UpdateDateColumn,
} from 'typeorm';
import { Video } from './video.entity';
import { TVDevice } from './tv-device.entity';

@Entity('campaigns')
export class Campaigns extends BaseEntity {
  @PrimaryGeneratedColumn({ type: 'int', unsigned: true })
  id: number;

  @Column({
    name: 'campaign_name',
    type: 'varchar',
    length: 255,
    default: 'Unnamed Campaign',
  })
  campaignName: string;

  @Column({ name: 'user_id', type: 'int' })
  userId: number;

  @CreateDateColumn({
    name: 'created_at',
  })
  createdDate: Date;

  @UpdateDateColumn({
    name: 'updated_at',
  })
  updatedDate: Date;

  @Column({
    name: 'device_type',
    type: 'enum',
    enum: ['landscape', 'portrait'],
    nullable: false,
  })
  assetType: 'landscape' | 'portrait';

  @Column({
    name: 'assigned_asset_url',
    type: 'varchar',
    length: 2083,
    nullable: true,
  })
  assignedAssetUrl: string;

  @ManyToOne(() => Video, { nullable: false })
  @JoinColumn({ name: 'video_id' })
  video: Video;

  @ManyToOne(() => TVDevice, { nullable: false })
  @JoinColumn({ name: 'device_id' })
  device: TVDevice;
}
