interface IEmojiProps {
  label: string;
  symbol: string;
}

const Emoji: React.FC<IEmojiProps> = ({ label, symbol }) => {
  return (
    <span role='img' aria-label={label}>
      {symbol}
    </span>
  );
};

export default Emoji;
