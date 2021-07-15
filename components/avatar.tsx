
type Props = {
  initials: string
}

const Avatar = ({initials}: Props) => {
  return (
    <div>
        <span className="inline-flex items-center justify-center h-10 w-10 rounded-full bg-gray-500">
          <span className="font-medium leading-none text-white">{initials}</span>
        </span>
    </div>
  );
}

export default Avatar