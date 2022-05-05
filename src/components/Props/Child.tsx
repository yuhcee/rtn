import EventComponent from '../EventComponent/EventComponent';

interface ChildProps {
  color: string;
}

const ChildFC: React.FC<ChildProps> = ({ color }) => {
  return (
    <div>
      <p>{color && color.toLocaleUpperCase()} color dectector</p>
      <EventComponent color={color} />
    </div>
  );
};

export default ChildFC;
