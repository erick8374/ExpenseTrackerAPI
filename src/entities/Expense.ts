import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { User } from './Users';
import { Category } from './Category';

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

  constructor(
    id?:number,
    descricao?:string,
    valor?:number,
    user?:User,
    category?:Category
  ){
    this.id = id,
    this.descricao = descricao,
    this.valor = valor,
    this.user = user,
    this.category = category
  }
}


export default Expense