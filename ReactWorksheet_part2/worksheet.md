problem 1

synchronous cleanup function:

It happens instantly when the component unmounts or before the effect runs again.

It uses for removing event listeners, clearing timers, or aborting fetch requests.

Asynchronous cleanup function:

If you try to make the cleanup function asynchronous (e.g., using async/await), React won’t know how to handle it.

React expects the cleanup function to be synchronous because it needs to finish cleanup before performing other tasks.

AbortController:


AbortController is a JavaScript API that lets you cancel ongoing fetch requests.

In React, you can use it in useEffect to clean up unfinished requests when the component unmounts or the dependency changes.


If a component unmounts while a fetch request is still in progress, React might try to update a component that no longer exists. This can lead to errors or memory leaks.



problem 2


Error dubugging code
```
import React, { useMemo } from "react";

function FilteredComponent({ data, searchTerm }) {
  const filteredData = useMemo(() => {
    return data.filter((item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [data, searchTerm]);

  return (
    <ul>
      {filteredData.map((item) => (
        <li key={item.id}>{item.name}</li>
      ))}
    </ul>
  );
}

export default FilteredComponent;
```




related topic question

React.memo ensures that the child component only re-renders if its props change.

It performs a shallow comparison of props to determine if the re-render is necessary.

useMemo ensures that derived or calculated props passed to the child are memoized.

This prevents unnecessary recalculations and avoids triggering re-renders of the child component due to new object or array references.








