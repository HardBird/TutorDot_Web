import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


interface Props {
    Component: React.FunctionComponent,
    pageProps: any
}

const App: React.FunctionComponent<Props> = ({ Component, pageProps }) => {
    React.useEffect(() => {
        const jssStyles = document.querySelector('#jss-server-side');
        if (jssStyles) {
            // @ts-ignore
            jssStyles.parentElement.removeChild(jssStyles);
        }
    }, []);

    // React.useEffect(() => {
    //   setInterval(() => {
    //     //console.info('hello')
    //   }, SESSION_CHECK_TIME)    
    // }, [])

    return <Component {...pageProps} />
}


export default App
