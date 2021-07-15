type Props = {
  type?: string,
  title?: string
}

const Alert = ({ type, title }: Props) => {
  if (type == "warning") {
    return (
      <p>
        Warning
      </p>
    )
  } else {
    return (
    <p>
      Default
    </p>
    )
  }
}

export default Alert