export default function ChapterDivider({ text }) {
  return (
    <div className="chapter-divider">
      <div className="chapter-divider__line" />
      <p className="chapter-divider__text">{text}</p>
      <div className="chapter-divider__line" />
    </div>
  );
}
