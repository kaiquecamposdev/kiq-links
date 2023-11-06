export function Portfolio(data: { width: string; height: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      width={data.width}
      height={data.height}
      stroke="currentColor"
      fill="currentColor"
    >
      <path d="M28 10h-6V6a2 2 0 0 0-2-2h-8a2 2 0 0 0-2 2v4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V12a2 2 0 0 0-2-2ZM12 6h8v4h-8ZM4 26V12h24v14Z" />
    </svg>
  )
}
