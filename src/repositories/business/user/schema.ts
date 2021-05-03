import VersionableSchema from '../../versionable/VersionableSchema';
export default class UserSchema extends VersionableSchema {
  constructor(options: any) {
    const baseSchema = {
        name: {
            required: true,
            type: String,
        },
        userId:{
          required: true,
          type: String,
        },
        email:{
          required: true,
          type: String,
        },
        password:{
          required: true,
          type: String,
        },
        role:{
          required: true,
          type: String,
        }
    };

    super(baseSchema, options);
  }
}
