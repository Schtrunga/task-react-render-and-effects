import { useEffect, useState } from 'react';
import { subscribe, unsubscribe } from './resources/API';

export function Effects(props: { sourceId: string }) {
    const [message, setMessage] = useState(-1);

    useEffect(() => {
        setMessage(-1);

        const callback = (data: number) => {
            setMessage(data);
        };

        subscribe(props.sourceId, callback);

        return () => {
            unsubscribe(props.sourceId, callback);
        };
    }, [props.sourceId]);

    return (
        <div>
            {props.sourceId}: {message}
        </div>
    );
}
