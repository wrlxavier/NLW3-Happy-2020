import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, ManyToMany, JoinColumn } from 'typeorm';
import Orphanade from './Orphanages';


@Entity('images')

export default class Image {

    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column()
    path: string;

    @ManyToOne(() => Orphanade, orphanage => orphanage.images)
    @JoinColumn({ name: 'orphanage_id'})
    orphanage: Orphanade;
}