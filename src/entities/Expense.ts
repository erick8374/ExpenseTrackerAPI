import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { User } from './Users';
import { Category } from './Category';
import { Account } from './Account';
@Entity()
export class Expense {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column()
  descricao?: string;

  @Column('decimal')
  valor?: number;

  @ManyToOne(() => User, user => user.expenses)
  user?: User;

  @ManyToOne(() => Category, category => category.expenses)
  category?: Category;

  @ManyToOne(() => Account, account => account.expenses)
  account?: Account;

  constructor(
    id?:number,
    descricao?:string,
    valor?:number,
    user?:User,
    category?:Category,
    account?: Account

  ){
    this.id = id,
    this.descricao = descricao,
    this.valor = valor,
    this.user = user,
    this.category = category,
    this.account = account
  }
}


export default Expense