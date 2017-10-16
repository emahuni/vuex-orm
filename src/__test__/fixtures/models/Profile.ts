import Model, { Fields } from '../../../Model'
import User from './User'

export default class Profile extends Model {
  static entity: string = 'profiles'

  static fields (): Fields {
    return {
      id: this.attr(null),
      user_id: this.attr(null),
      user: this.belongsTo(User, 'user_id')
    }
  }
}
