import { useEffect } from "react"

const detectScroll = (callback, dependencies) => {
    useEffect(() => {
        callback();

        return () => {

        }
    }, dependencies)
}