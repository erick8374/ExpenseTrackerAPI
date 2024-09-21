import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Expense } from './Expense';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column()
  name?: string;

  @Column({ unique: true })
  email?: string;

  @Column()
  senha?: string;

  @OneToMany(() => Expense, expense => expense.user)
  expenses?: Expense[];

constructor(
  id?: number,
  name?: string,
  email?: string,
  senha?: string,
  expenses?:[]
)
{
  this.id = id
  this.name = name
  this.email = email
  this.senha = senha,
  this.expenses = expenses

}
}
export default User