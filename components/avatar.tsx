
type Props = {
  initials: string
}

const Avatar = ({initials}: Props) => {
  return (
    <div class="c-avatar">{initials}</div>
  );
}

export default Avatar
