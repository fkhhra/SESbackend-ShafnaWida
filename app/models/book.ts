import { DateTime } from 'luxon'
import { BaseModel, column } from '@adonisjs/lucid/orm'

export default class Book extends BaseModel {
   public static table = 'book' 
  @column({ isPrimary: true })
  declare id: number | undefined

  @column()
  declare title: string | undefined

  @column()
  declare author: string | undefined

  @column()
  declare category: string | undefined

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime | undefined

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime | undefined

}