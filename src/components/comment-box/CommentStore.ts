import { BehaviorSubject } from 'rxjs';
import { getComments, postComment } from '../../api'
import { CommentItem } from '../../models/CommentItem'
import * as moment from 'moment'

export class CommentStore {
  comments = new BehaviorSubject<CommentItem[]>([])
  section: string = ""

  async getComments(section: string) {
    this.section = section
    const data = await getComments(section)

    this.comments.next(data.map(d => ({
        content: d.content,
        publishedAt: moment(d.creation_date).locale('es').fromNow(),
        id: d._id,
    })))
  }

  async postComment(content: string) {
    await postComment(this.section, content)
    await getComments(this.section)
  }
}