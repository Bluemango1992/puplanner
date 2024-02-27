
interface ContainerProps {
    children: React.ReactNode;
  };

const Container = ({ children }: ContainerProps) => {
    return (
        <div className="bg-slate-200 my-12 mx-24">
            {children}
        </div>
    );
    }

 export default Container;