import ChildFC from './Child';

const ParentFC: React.FC = () => {
  return (
    <div>
      <ChildFC color="red" />
    </div>
  );
};

export default ParentFC;
