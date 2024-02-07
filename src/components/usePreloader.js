import { useState, useEffect } from 'react';

function usePreloader() {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setIsLoading(true);
        document.body.classList.add("overflow-hidden")
        setTimeout(() => {
            setIsLoading(false);
            document.body.classList.remove("overflow-hidden")
        }, 3500);
    }, []);

    return isLoading;
}
export default usePreloader