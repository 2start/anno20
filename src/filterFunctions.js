export default function filterFunctions(functions, searchText) {
  return functions
    .filter(f => {
      return f.toLowerCase().includes(searchText.toLowerCase());
    })
}
