type Message = { message: string };

const FilledButton = (props: Message) => {
  return (
    <div className="bg-[#008EEF] text-white font-semibold px-8 rounded-lg py-3">
      {props.message}
    </div>
  );
};

export default FilledButton;
