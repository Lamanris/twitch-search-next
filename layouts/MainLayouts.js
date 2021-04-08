import Head from 'next/head'
import Header from "../components/Header";
export function MainLayout ({children}) {
    return (
        <>
            <Head>
                <title> Twitch | Search</title>
            </Head>
            <Header/>
            <main>
                {children}
            </main>
        </>
    )
}