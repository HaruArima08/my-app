import { GetStaticProps, NextPage, NextPageContext } from "next";
import Head from "next/head";
import React from "react";

type SSGProps = {
    message: string;
}

const SSG: NextPage<SSGProps> = (props) => {
    const { message } = props;
    return (
        <div>
            <Head>
                <title>Static Site Generation</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main>
                <p> This page is generated at build time.</p>
                <p>{message}</p>
            </main>
        </div >
    )
}

export const getStaticProps: GetStaticProps<SSGProps> = async () => {
    const timestamp = new Date().toLocaleString();
    const message = `${timestamp} にgetStaticPropsが実行されました。`;
    console.log(message);
    return {
        props: {
            message,
        },
    };
}

export default SSG;
