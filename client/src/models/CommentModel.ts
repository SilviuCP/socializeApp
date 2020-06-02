export interface CommentModel {
    id?: number;
    author_id: number;
    author_name: string;
    comment: string;
    commentParent: number;
}
