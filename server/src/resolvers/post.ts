import { Post } from "../entities/Post";
import { Arg, Mutation, Query, Resolver } from "type-graphql";

@Resolver()
export class PostResolver {
  @Query(() => [Post])
  posts() {
    return Post.find();
  }

  @Query(() => Post, { nullable: true })
  post(@Arg("id") id: number) {
    return Post.findOne(id);
  }

  @Mutation(() => Post)
  async createPost(@Arg("title") title: string) {
    return await Post.create({ title }).save();
  }

  @Mutation(() => Post, { nullable: true })
  async updatePost(@Arg("id") id: number, @Arg("title") title: string) {
    let postToUpdate = await Post.findOne(id);
    if (!postToUpdate) {
      return null;
    }
    if (typeof title !== undefined) {
      postToUpdate.title = title;
      await postToUpdate.save();
    }
    return postToUpdate;
  }

  @Mutation(() => Boolean)
  async deletePost(@Arg("id") id: number) {
    Post.delete(id);
    return true;
  }
}
