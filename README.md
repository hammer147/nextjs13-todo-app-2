# Nextjs 13 App folder demo

We have a home page at the root of the app an 2 subtrees:

- todos (uses jsonplaceholder.typicode.com)
- search (uses serpapi.com)

Note that we have multiple layout.tsx files that are used to wrap the pages content.  
The layouts persist across page changes, deeper down the tree.

## Todos

The Todos page will change when a user clicks on a todo item from todo-list.tsx in layout.tsx.  
It will display the page in the dynamic route [todoId].  
We check for the existence of the todo in the page component, if it doesn't, we call the notFound function from 'next/navigation' to render the special not-found.tsx page.  
Note that all components in this subtree are server components, but we would need a client component if we would add te ability to add a todo via a form.

## Search

We added a head.tsx to change the title for the search subtree.  
We have a search.tsx in a layout.tsx file.  
When a search is performed, the layout persists and the page changes to the search results page (in the dynamic route [searchTerm]).  
Note that Next.js will recognize the await keyword and will automatically render the special loading.tsx page while the search is being performed (await search(searchTerm)).  
In the dynamic route page, we can throw an error to render the special error.tsx page.  
Note that search.tsx is the only client component in this subtree.
