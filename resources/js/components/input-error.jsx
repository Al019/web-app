const InputError = ({ message }) => {
  return message ? (
    <p className="text-[0.8rem] font-medium text-destructive">
      {message}
    </p>
  ) : null;
}

export default InputError