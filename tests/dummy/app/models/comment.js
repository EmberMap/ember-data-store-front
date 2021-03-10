import Model, { attr, belongsTo } from '@ember-data/model';

export default class CommentModel extends Model {

  @attr('string') text;

  @belongsTo({ async: false }) post;
  @belongsTo() author;

}
