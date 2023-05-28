export default function ExploreButtom() {
  return (
    <button
      type="button"
      className="relative mt-20 h-36 w-36 rounded-full bg-white text-xl uppercase leading-6
        text-primary before:absolute before:left-0 before:top-0 before:-z-10 before:h-36 before:w-36 
        before:rounded-full before:bg-white before:opacity-10 before:transition-transform hover:before:flex
        hover:before:scale-175"
    >
      explore
    </button>
  );
}
