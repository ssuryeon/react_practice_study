import {useState, useEffect} from 'react';
import {Iarticle} from '../components/NewsItem'

export default function usePromise<T>(promiseCreator:() => Promise<T>, deps:any) {
    const [loading, setLoading] = useState(false);
    const [resolved, setResolved] = useState<T | null>(null);
    const [error, setError] = useState<any>(null);

    useEffect(() => {
        const process = async() => {
            setLoading(true);
            try {
                const resolved = await promiseCreator();
                setResolved(resolved);
            } catch(e:any) {
                setError(e);
            }
            setLoading(false);
        }
        process();
    }, deps)
    return [loading, resolved, error] as const;
}