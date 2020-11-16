import getRelations from "../../hooks/get-relations";
export default {
  before: {
    all: [
      getRelations([
        {
          association: "categories",
          attributes: ["name"],
          through: {
            attributes: []
          }
        },
        {
          association: "product_images",
          attributes: ["imageUrl"]
        },
      ]),
    ],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: [],
  },

  after: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: [],
  },

  error: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: [],
  },
};
