import { useState } from 'react';
interface EventProps {
    color: string;
}

const EventComponent: React.FC<EventProps> = ({ color }) => {
    const [ownColor, setOwnColor] = useState<string | undefined>();

    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        let color = event.target.value;
        switch (color.toLowerCase()) {
            case 'red':
                setOwnColor(color);
                break;
            case 'green':
                setOwnColor(color);
                break;
            case 'blue':
                setOwnColor(color);
                break;
            default:
                setOwnColor(color);
                break;
        }
    };

    return (
        <div>
            <input onChange={onChange} />
            <p>{color === ownColor ? `The Color Is ${color}` : `Expected ${color} but got ${ownColor}`} </p>
        </div>
    );
};

export default EventComponent;
