import React from 'react'
import { Provider } from "react-redux";
import { createWrapper } from "next-redux-wrapper";
import store from "../store/store";
import NextNprogress from 'nextjs-progressbar'
import '../styles/main.scss'

function myApp ({Component, pageDrops}) {
    return (
        <Provider store={store}>
            <NextNprogress
                color="white"
                startPosition={0.3}
                stopDelayMs={200}
                height="3"
            />
            <Component {...pageDrops}/>
        </Provider>
        )
}
const makestore = () => store
const wrapper = createWrapper(makestore)

export default wrapper.withRedux(myApp)