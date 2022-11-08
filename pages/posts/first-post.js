import Head from 'next/head';
import Link from "next/link";
import Layout from '../../components/layout';
// import Script from 'next/script';


export default function FirstPost() {
    return (
        <Layout>
                <Head>
                    <title>First Post</title>
                </Head>
                {/* <script src="https://connect.facebook.net/en_US/sdk.js" /> FB SDK LOAD TRADITIONAL <script> Approach  */}

                {/* VV This is the Next.js approach to using the Next <Script> Component. */}
                {/* <Script
                    src="https://connect.facebook.net/en_US/sdk.js"
                    strategy="lazyOnload"
                    onLoad={() =>
                        console.log(`script loaded correctly, window.FB has been populated`)
                    }
                />  */}
                <h1>First Post -- 10 min BREAK -- BRB</h1>
                <h2>
                    <Link href="/">Back to home</Link>
                </h2>
        </ Layout>
    );
}