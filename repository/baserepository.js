class Mapper {
    constructor(models) {
      this.models = models;
    }
  
    async create(entity, data) {
      const model = this.models[entity];
      if (!model) {
        throw new Error(`Invalid entity: ${entity}`);
      }
      return model.create(data);
    }
    async InsertMany(entity, data) {
      const model = this.models[entity];
      if (!model) {
        throw new Error(`Invalid entity: ${entity}`);
      }
      return model.insertMany(data);
    }
    async aggregate(entity, pipeline) {
        const model = this.models[entity];
        if (!model) {
          throw new Error(`Invalid entity: ${entity}`);
        }
        return model.aggregate(pipeline);
      }
  }
  
  module.exports = Mapper;
  