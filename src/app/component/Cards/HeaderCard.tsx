import Typography from "../../Typography/typograph";

type HeaderCard = {
    title : string;
    description : string;
}

const HeaderCard: React.FC<HeaderCard> = ({
     title = "Hello World",
    description = "Hello World"
}) => {
  return (
    <div className='bg-white shadow-md rounded-md max-w-[500px]'>
        <div className='p-4'>
            <Typography variant='h1'>{title}</Typography>
            <Typography variant='body1'>{description}</Typography>
        </div>
    </div>
  )
}
