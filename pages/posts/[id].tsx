import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import { ParsedUrlQuery } from "querystring";
import React from "react";

type PostProps = {
    id: string;
}

const Post: NextPage<PostProps> = (props) => {
    const { id } = props;
    const router = useRouter();

    if (router.isFallback) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <Head>
                <title>Static Site Generation</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main>
                <p> This page is generated at build time.</p>
                <p>{`/posts/${id}に対応するページです`}</p>
            </main>
        </div >
    )
}

export const getStaticPaths: GetStaticPaths = async () => {
    const paths = [
        { params: { id: "1" } },
        { params: { id: "2" } },
        { params: { id: "3" } },
    ];

    return { paths, fallback: false };
}

interface PostParams extends ParsedUrlQuery {
    id: string;
}
export const getStaticProps: GetStaticProps<PostProps, PostParams> = async (context) => {
    const { id } = context.params!;
    return {
        props: {
            id,
        },
    };
}

export default Post;
