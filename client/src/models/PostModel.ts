import { CommentModel } from "./CommentModel";

export interface PostModel {
    id?: number;
    user_id?: number;
    username: string;
    visibility: boolean;
    image?: string;
    description?: string;
    likes?: number;
    comments?: CommentModel[];
}
