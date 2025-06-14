import type { MDXComponents } from "mdx/types";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: ({ children }) => (
      <h1 className="text-6xl font-bold mt-8 mb-4 text-gray-900 dark:text-gray-100">
        {children}
      </h1>
    ),
    h2: ({ children }) => (
      <h2 className="text-3xl font-bold mt-6 mb-3 text-gray-900 dark:text-gray-100">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-2xl font-bold mt-4 mb-2 text-gray-900 dark:text-gray-100">
        {children}
      </h3>
    ),

    // Paragraphs
    p: ({ children }) => (
      <p className="mb-4 text-gray-700 dark:text-gray-300 leading-relaxed">
        {children}
      </p>
    ),

    // Lists
    ul: ({ children }) => (
      <ul className="list-disc list-inside mb-4 text-gray-700 dark:text-gray-300 space-y-1">
        {children}
      </ul>
    ),
    ol: ({ children }) => (
      <ol className="list-decimal list-inside mb-4 text-gray-700 dark:text-gray-300 space-y-1">
        {children}
      </ol>
    ),
    li: ({ children }) => <li className="ml-4">{children}</li>,

    // Text formatting
    strong: ({ children }) => (
      <strong className="font-bold text-gray-900 dark:text-gray-100">
        {children}
      </strong>
    ),
    em: ({ children }) => (
      <em className="italic text-gray-800 dark:text-gray-200">{children}</em>
    ),

    // Code
    code: ({ children }) => (
      <code className="bg-gray-100 dark:bg-gray-800 px-1 py-0.5 rounded text-sm font-mono">
        {children}
      </code>
    ),

    // Wrapper for the entire content
    wrapper: ({ children }) => (
      <div className="max-w-4xl mx-auto px-4 py-8">{children}</div>
    ),

    ...components,
  };
}
