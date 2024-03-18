import { OG } from "@/app/_utils/og-helper";
import { Metadata, ResolvingMetadata } from "next";

export interface NextPageProps<TParams = {}> {
  params: TParams;
  searchParams: { [key: string]: string | string[] | undefined };
}

interface PostDetailPageParams {
  postId: string;
}

/** ------------------------------------------------------------------------------
 * 
 * generate SEO /post/[postId]
 * 
 ------------------------------------------------------------------------------ */
export async function generateMetadata(
  { params, searchParams }: NextPageProps<PostDetailPageParams>,
  parent: ResolvingMetadata
): Promise<Metadata> {
  try {
    const postId = Number(params.postId);

    return {
      title: "post title",
      description: "post description",
      ...OG({
        title: "post title",
        description: "post description",
        images: ["https://via.placeholder.com/150"],

        /** @see - If you set the openGraph type "article" on this page, you will get an error due to emails in the og-helper */
        type: "article",
        addUrl: `/post/${postId}`,
        authors: "custom author",
      }),
    };
  } catch (e) {
    console.log(e);
    return {};
  }
}

const PostDetailPage = async (props: NextPageProps<PostDetailPageParams>) => {
  const { postId: postIdStr } = props.params;
  const postId = Number(postIdStr);

  return <div>post detail page {postId}</div>;
};

export default PostDetailPage;
