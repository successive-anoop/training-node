import VersionableSchema from '../../versionable/VersionableSchema';
export default class ProductSchema extends VersionableSchema {
  constructor(options: any) {
    const baseSchema = {
        name: {
            required: true,
            type: String,
        },
        productId:{
          required: true,
          type: String,
        },
        type:{
          required: true,
          type: String,
        },
        quantity: {
          required: true,
          type: String,
        },
        price:{
          required: true,
          type: String,
        }
    };

    super(baseSchema, options);
  }
}
