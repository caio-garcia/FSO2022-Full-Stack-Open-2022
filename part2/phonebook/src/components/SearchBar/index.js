export function SearchBar({ handleFiltering }) {
  return (
    <div>
      filter shown with <input onChange={handleFiltering} />
    </div>
  );
}
