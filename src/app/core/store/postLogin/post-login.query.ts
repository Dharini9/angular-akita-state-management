import { Query } from '@datorama/akita';
import { PostLoginState, PostLoginStore } from './post-login.store';

export class PostLoginQuery extends Query<PostLoginState> {

    selectName$ = this.select('DisplayName');
    loginDetails$ = this.select();

    constructor(protected postLoginStore: PostLoginStore) {
        super(postLoginStore);
    }
}
